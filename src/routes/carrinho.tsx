import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { BOOKS } from "@/data/site";
import { useCart } from "@/lib/cart";
import { calculateShipping, WEIGHT_PER_BOOK_GRAMS } from "@/lib/shipping";
import { createCheckoutFn } from "@/lib/checkout.server";

export const Route = createFileRoute("/carrinho")({
  component: CarrinhoPage,
  head: () => ({
    meta: [
      { title: "Carrinho | Loja Pastor Cláudio Gama" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function CarrinhoPage() {
  const cart = useCart();
  const [cep, setCep] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lines = useMemo(
    () =>
      cart.items
        .map((item) => ({ item, book: BOOKS.find((b) => b.slug === item.slug) }))
        .filter((l): l is { item: typeof cart.items[number]; book: NonNullable<typeof l.book> } => Boolean(l.book)),
    [cart.items],
  );

  const totalWeightGrams = lines.reduce((sum, l) => sum + WEIGHT_PER_BOOK_GRAMS * l.item.quantity, 0);
  const shipping = cep.replace(/\D/g, "").length === 8 ? calculateShipping(cep, totalWeightGrams) : null;
  const total = cart.subtotal + (shipping?.price ?? 0);

  async function handleCheckout() {
    setError(null);
    if (!shipping) {
      setError("Informe um CEP válido pra calcular o frete antes de finalizar.");
      return;
    }
    setCheckingOut(true);
    try {
      const { checkoutUrl } = await createCheckoutFn({
        data: {
          items: cart.items,
          destinationCep: cep,
          successUrl: `${window.location.origin}/loja?pedido=confirmado`,
        },
      });
      window.location.href = checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível gerar o checkout. Tente novamente.");
      setCheckingOut(false);
    }
  }

  if (lines.length === 0) {
    return (
      <section className="container-site py-24 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="section-title mt-6">SEU CARRINHO ESTÁ VAZIO</h1>
        <p className="mt-3 text-muted-foreground">Adicione livros da nossa loja pra continuar.</p>
        <Link to="/loja" className="btn-gold mt-8 inline-flex">
          Ir para a Loja
        </Link>
      </section>
    );
  }

  return (
    <section className="container-site py-14">
      <h1 className="section-title">MEU CARRINHO</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-4">
          {lines.map(({ item, book }) => (
            <div
              key={item.slug}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4 sm:items-center"
            >
              <img src={book.image} alt={book.alt} className="h-24 w-16 shrink-0 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <Link to="/loja/$slug" params={{ slug: book.slug }} className="font-display font-bold hover:text-gold">
                    {book.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{book.price} / unidade</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-border">
                    <button
                      type="button"
                      aria-label="Diminuir"
                      onClick={() => cart.setQuantity(item.slug, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center text-foreground/80 hover:text-gold"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Aumentar"
                      onClick={() => cart.setQuantity(item.slug, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center text-foreground/80 hover:text-gold"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    aria-label="Remover"
                    onClick={() => cart.remove(item.slug)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-card p-7">
          <h2 className="font-display text-lg font-bold">Resumo do pedido</h2>

          <label className="mt-6 block">
            <span className="text-sm font-medium">CEP de entrega</span>
            <input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
              inputMode="numeric"
              className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </label>
          {cep.replace(/\D/g, "").length === 8 && !shipping && (
            <p className="mt-2 text-xs text-destructive">CEP não reconhecido — confira os números.</p>
          )}

          <div className="mt-6 space-y-2 border-t border-border/60 pt-6 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatBRL(cart.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frete {shipping ? `(${shipping.region})` : ""}</span>
              <span>{shipping ? formatBRL(shipping.price) : "—"}</span>
            </div>
            {shipping && (
              <p className="text-xs text-muted-foreground">Prazo estimado: {shipping.estimatedDays}</p>
            )}
          </div>

          <div className="mt-4 flex justify-between border-t border-border/60 pt-4 font-display text-lg font-bold">
            <span>Total</span>
            <span className="text-gold">{formatBRL(total)}</span>
          </div>

          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

          <button
            type="button"
            onClick={handleCheckout}
            disabled={checkingOut}
            className="btn-gold mt-6 w-full disabled:opacity-60"
          >
            {checkingOut ? "Gerando checkout..." : "Finalizar Compra"} <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Pagamento seguro via Pix, cartão ou boleto.
          </p>
        </aside>
      </div>
    </section>
  );
}
