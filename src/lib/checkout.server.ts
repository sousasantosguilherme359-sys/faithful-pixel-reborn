/**
 * Server function chamada pelo carrinho (src/routes/carrinho.tsx) pra
 * gerar o link de checkout do Asaas. Roda só no servidor (createServerFn)
 * — o client nunca vê `ASAAS_API_KEY`.
 *
 * Segurança: preço e frete são SEMPRE recalculados aqui a partir do
 * slug/quantidade/CEP recebidos — nunca confiamos em valor de preço vindo
 * do client (alguém podia adulterar o `fetch` do navegador e mandar preço
 * zero).
 */

import { createServerFn } from "@tanstack/react-start";
import { BOOKS } from "@/data/site";
import { calculateShipping, WEIGHT_PER_BOOK_GRAMS } from "@/lib/shipping";
import { createCheckout } from "@/lib/asaas";

type CheckoutInput = {
  items: { slug: string; quantity: number }[];
  destinationCep: string;
  successUrl: string;
};

function parsePrice(price: string): number {
  const numeric = price.replace(/[^\d,]/g, "").replace(",", ".");
  return Number.parseFloat(numeric) || 0;
}

export const createCheckoutFn = createServerFn({ method: "POST" })
  .validator((data: CheckoutInput) => data)
  .handler(async ({ data }) => {
    if (!data.items.length) {
      throw new Error("Carrinho vazio — não dá pra gerar checkout sem item nenhum.");
    }

    const resolvedItems = data.items.map((item) => {
      const book = BOOKS.find((b) => b.slug === item.slug);
      if (!book) throw new Error(`Livro "${item.slug}" não encontrado — carrinho desatualizado?`);
      return { book, quantity: Math.max(1, Math.floor(item.quantity)) };
    });

    const totalWeightGrams = resolvedItems.reduce(
      (sum, i) => sum + WEIGHT_PER_BOOK_GRAMS * i.quantity,
      0,
    );
    const shipping = calculateShipping(data.destinationCep, totalWeightGrams);
    if (!shipping) {
      throw new Error("CEP de destino inválido — confira o CEP informado.");
    }

    const asaasItems = resolvedItems.map((i) => ({
      name: i.book.title,
      description: `Livro do Pastor Cláudio Gama — ${i.book.title}`,
      quantity: i.quantity,
      value: parsePrice(i.book.price),
    }));
    asaasItems.push({
      name: "Frete",
      description: `Envio via PAC — estimativa para ${shipping.region}, ${shipping.estimatedDays}`,
      quantity: 1,
      value: shipping.price,
    });

    const externalReference = JSON.stringify({
      items: resolvedItems.map((i) => ({ slug: i.book.slug, title: i.book.title, quantity: i.quantity })),
      destinationCep: data.destinationCep,
      shippingPrice: shipping.price,
    });

    const { checkoutUrl } = await createCheckout({
      items: asaasItems,
      externalReference,
      successUrl: data.successUrl,
    });

    return { checkoutUrl };
  });
