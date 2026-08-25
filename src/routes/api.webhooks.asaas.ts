/**
 * Recebe a confirmação de pagamento do Asaas e envia um e-mail de resumo
 * do pedido pro cliente (NOTIFY_EMAIL). Configurar essa URL no painel do
 * Asaas em Integrações -> Webhooks, com o mesmo token de
 * `ASAAS_WEBHOOK_TOKEN`.
 *
 * ⚠️ Duas coisas que dependem de configuração fora do código, não
 * verificadas nesta sessão (sem credencial disponível pra testar):
 * 1. `LOVABLE_API_KEY` — chave da própria Lovable pra enviar e-mail via
 *    @lovable.dev/email-js. Se o site estiver publicado pela Lovable,
 *    pode já vir provisionada automaticamente; senão, gerar no painel.
 * 2. Nome exato do header/campo do token de webhook do Asaas — a
 *    documentação pública usa o header "asaas-access-token", mas
 *    confirmar no painel do Asaas ao configurar (pode variar por conta).
 */

import { createFileRoute } from "@tanstack/react-router";
import { sendLovableEmail } from "@lovable.dev/email-js";
import { isValidWebhookToken } from "@/lib/asaas";

type AsaasWebhookPayload = {
  event: string;
  payment?: {
    id: string;
    value: number;
    externalReference?: string;
  };
};

type OrderReference = {
  items: { slug: string; title: string; quantity: number }[];
  destinationCep: string;
  shippingPrice: number;
};

const CONFIRMED_EVENTS = new Set(["PAYMENT_CONFIRMED", "PAYMENT_RECEIVED"]);

export const Route = createFileRoute("/api/webhooks/asaas")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = request.headers.get("asaas-access-token");
        if (!isValidWebhookToken(token)) {
          return new Response("Token de webhook inválido", { status: 401 });
        }

        const payload = (await request.json()) as AsaasWebhookPayload;

        if (!CONFIRMED_EVENTS.has(payload.event) || !payload.payment) {
          // Outros eventos (PAYMENT_CREATED, PAYMENT_OVERDUE, etc.) são
          // ignorados aqui de propósito — só confirmação de pagamento
          // dispara e-mail pro cliente.
          return Response.json({ ok: true, ignored: true });
        }

        let order: OrderReference | null = null;
        try {
          order = payload.payment.externalReference ? JSON.parse(payload.payment.externalReference) : null;
        } catch {
          order = null;
        }

        await notifyClient(payload.payment.id, payload.payment.value, order);

        return Response.json({ ok: true });
      },
    },
  },
});

async function notifyClient(paymentId: string, value: number, order: OrderReference | null): Promise<void> {
  const apiKey = process.env.LOVABLE_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  if (!apiKey || !notifyEmail) {
    console.error("LOVABLE_API_KEY ou NOTIFY_EMAIL ausente — pedido confirmado mas e-mail não pôde ser enviado.", {
      paymentId,
    });
    return;
  }

  const itemsHtml = order
    ? order.items.map((i) => `<li>${i.quantity}x ${i.title}</li>`).join("")
    : "<li>Detalhes do pedido não disponíveis (externalReference ausente/corrompido).</li>";

  const html = `
    <h2>Novo pedido confirmado — R$ ${value.toFixed(2).replace(".", ",")}</h2>
    <p><strong>ID do pagamento (Asaas):</strong> ${paymentId}</p>
    <h3>Itens</h3>
    <ul>${itemsHtml}</ul>
    ${order ? `<p><strong>CEP de entrega:</strong> ${order.destinationCep}</p><p><strong>Frete:</strong> R$ ${order.shippingPrice.toFixed(2).replace(".", ",")}</p>` : ""}
  `;
  const text = order
    ? `Novo pedido confirmado (R$ ${value.toFixed(2)}). Itens: ${order.items.map((i) => `${i.quantity}x ${i.title}`).join(", ")}. CEP: ${order.destinationCep}.`
    : `Novo pedido confirmado (R$ ${value.toFixed(2)}). Pagamento ${paymentId}.`;

  try {
    await sendLovableEmail(
      {
        to: notifyEmail,
        from: "Loja Pastor Cláudio Gama <pedidos@pastorclaudiogama.com.br>",
        subject: `Novo pedido confirmado — R$ ${value.toFixed(2).replace(".", ",")}`,
        html,
        text,
        purpose: "transactional",
        idempotency_key: `pedido-${paymentId}`,
      },
      { apiKey },
    );
  } catch (error) {
    console.error("Falha ao enviar e-mail de pedido confirmado:", error);
  }
}
