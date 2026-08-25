/**
 * Cliente HTTP pra API do Asaas — SERVER-ONLY. Nunca importar este
 * arquivo de código que roda no navegador: ele lê `ASAAS_API_KEY` do
 * ambiente, e isso não pode vazar pro bundle do client. Só
 * `src/lib/checkout.server.ts` (server function) e a rota de webhook
 * devem importar isto.
 *
 * `ASAAS_ENV` controla sandbox vs produção — igual ao padrão de "modo
 * simulado primeiro" já usado nos outros projetos do dono: começa em
 * sandbox, só troca pra produção depois de testar o fluxo inteiro.
 */

type AsaasCheckoutItem = {
  name: string;
  description?: string;
  quantity: number;
  value: number;
};

type CreateCheckoutParams = {
  items: AsaasCheckoutItem[];
  externalReference: string;
  successUrl: string;
  cancelUrl?: string;
};

type CreateCheckoutResult = {
  checkoutUrl: string;
};

function baseUrl(): string {
  const env = process.env.ASAAS_ENV === "production" ? "production" : "sandbox";
  return env === "production" ? "https://api.asaas.com/v3" : "https://api-sandbox.asaas.com/v3";
}

function requireApiKey(): string {
  const key = process.env.ASAAS_API_KEY;
  if (!key) {
    throw new Error(
      "ASAAS_API_KEY não configurada no ambiente do servidor — sem isso não dá pra criar checkout de verdade.",
    );
  }
  return key;
}

/**
 * Cria um checkout hospedado pelo Asaas (o comprador escolhe Pix, cartão
 * ou boleto na própria página do Asaas, e informa nome/CPF lá — não
 * precisamos coletar isso no nosso formulário).
 *
 * ⚠️ Endpoint/formato de payload segue a documentação pública do Asaas
 * pra "Checkout" (POST /v3/checkouts) — como não há credencial real
 * disponível nesta sessão pra testar contra a API de verdade, validar o
 * formato exato do payload (nomes de campo podem ter mudado) rodando uma
 * vez em sandbox antes de confiar em produção.
 */
export async function createCheckout(params: CreateCheckoutParams): Promise<CreateCheckoutResult> {
  const apiKey = requireApiKey();

  const response = await fetch(`${baseUrl()}/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      access_token: apiKey,
    },
    body: JSON.stringify({
      billingTypes: ["PIX", "CREDIT_CARD", "BOLETO"],
      chargeTypes: ["DETACHED"],
      items: params.items,
      externalReference: params.externalReference,
      callback: {
        successUrl: params.successUrl,
        cancelUrl: params.cancelUrl ?? params.successUrl,
        autoRedirect: true,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Asaas recusou a criação do checkout (HTTP ${response.status}): ${body}`);
  }

  const data = (await response.json()) as { link?: string; url?: string };
  const checkoutUrl = data.link ?? data.url;
  if (!checkoutUrl) {
    throw new Error("Resposta do Asaas não trouxe a URL do checkout — conferir formato da resposta da API.");
  }

  return { checkoutUrl };
}

/**
 * Verifica o token de webhook do Asaas (configurado no painel dele em
 * Integrações -> Webhooks -> "Token de acesso"). Comparação simples de
 * string — o Asaas manda esse valor de volta no header a cada webhook.
 */
export function isValidWebhookToken(receivedToken: string | null): boolean {
  const expected = process.env.ASAAS_WEBHOOK_TOKEN;
  if (!expected) return false;
  return receivedToken === expected;
}
