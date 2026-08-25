/**
 * Cálculo de frete por TABELA — não é a API oficial dos Correios (exigiria
 * contrato/credencial do cliente). Valores são uma ESTIMATIVA de PAC
 * partindo do Rio de Janeiro (origem confirmada com o dono do projeto),
 * baseada em faixas de preço público conhecidas — não uma consulta em
 * tempo real. **Revisar periodicamente** com o dono do projeto e ajustar
 * conforme o preço real cobrado pelos Correios mudar.
 *
 * Peso por livro assumido em 350g (livro brochura padrão) — ajustar
 * `WEIGHT_PER_BOOK_GRAMS` se os livros reais pesarem diferente.
 */

export const WEIGHT_PER_BOOK_GRAMS = 350;

type Region = "sudeste" | "sul" | "centro-oeste" | "nordeste" | "norte";

/**
 * Mapa de faixa de CEP (2 primeiros dígitos) -> região, baseado nas faixas
 * oficiais de distribuição dos Correios. Precisão de estado dentro da
 * região não importa aqui — só a região é usada pra tarifar.
 *
 * Uma imprecisão conhecida: o prefixo 76 mistura Goiás (Centro-Oeste) com
 * o sul de Rondônia (Norte) — tratado aqui como Centro-Oeste por
 * simplicidade; ajustar se isso gerar reclamação de frete errado.
 */
const CEP_PREFIX_TO_REGION: Record<number, Region> = {
  ...Object.fromEntries(range(1, 39).map((p) => [p, "sudeste" as Region])),
  ...Object.fromEntries(range(40, 65).map((p) => [p, "nordeste" as Region])),
  ...Object.fromEntries(range(66, 69).map((p) => [p, "norte" as Region])),
  ...Object.fromEntries(range(70, 76).map((p) => [p, "centro-oeste" as Region])),
  77: "norte",
  ...Object.fromEntries(range(78, 79).map((p) => [p, "centro-oeste" as Region])),
  ...Object.fromEntries(range(80, 99).map((p) => [p, "sul" as Region])),
};

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const REGION_LABEL: Record<Region, string> = {
  sudeste: "Sudeste",
  sul: "Sul",
  "centro-oeste": "Centro-Oeste",
  nordeste: "Nordeste",
  norte: "Norte",
};

/** [até 300g, até 500g, até 1kg, até 2kg] em reais, saindo do Rio de Janeiro. */
const SHIPPING_TABLE: Record<Region, [number, number, number, number]> = {
  sudeste: [15, 17, 20, 26],
  sul: [18, 20, 24, 31],
  "centro-oeste": [20, 23, 28, 36],
  nordeste: [22, 25, 31, 40],
  norte: [26, 30, 38, 50],
};

/** Custo de cada 500g adicional além de 2kg, por região — pra carrinho grande. */
const EXTRA_PER_500G: Record<Region, number> = {
  sudeste: 4,
  sul: 5,
  "centro-oeste": 6,
  nordeste: 7,
  norte: 9,
};

const ESTIMATED_DAYS: Record<Region, string> = {
  sudeste: "3 a 5 dias úteis",
  sul: "4 a 6 dias úteis",
  "centro-oeste": "5 a 8 dias úteis",
  nordeste: "6 a 10 dias úteis",
  norte: "8 a 14 dias úteis",
};

export type ShippingQuote = {
  price: number;
  estimatedDays: string;
  region: string;
};

function normalizeCep(cep: string): string {
  return cep.replace(/\D/g, "");
}

function regionForCep(cep: string): Region | null {
  const digits = normalizeCep(cep);
  if (digits.length !== 8) return null;
  const prefix = Number.parseInt(digits.slice(0, 2), 10);
  return CEP_PREFIX_TO_REGION[prefix] ?? null;
}

function priceForWeight(region: Region, totalWeightGrams: number): number {
  const [upTo300, upTo500, upTo1000, upTo2000] = SHIPPING_TABLE[region];
  if (totalWeightGrams <= 300) return upTo300;
  if (totalWeightGrams <= 500) return upTo500;
  if (totalWeightGrams <= 1000) return upTo1000;
  if (totalWeightGrams <= 2000) return upTo2000;

  const extraGrams = totalWeightGrams - 2000;
  const extraSteps = Math.ceil(extraGrams / 500);
  return upTo2000 + extraSteps * EXTRA_PER_500G[region];
}

/** Retorna null se o CEP não tiver 8 dígitos válidos ou prefixo desconhecido. */
export function calculateShipping(destinationCep: string, totalWeightGrams: number): ShippingQuote | null {
  const region = regionForCep(destinationCep);
  if (!region) return null;

  return {
    price: priceForWeight(region, totalWeightGrams),
    estimatedDays: ESTIMATED_DAYS[region],
    region: REGION_LABEL[region],
  };
}
