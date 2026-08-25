import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, MessageCircle, Phone, Minus, Plus } from "lucide-react";
import { BOOKS } from "@/data/site";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/loja/$slug")({
  loader: ({ params }) => {
    const book = BOOKS.find((b) => b.slug === params.slug);
    if (!book) throw notFound();
    return book;
  },
  component: BookPage,
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | Livro do Pastor Cláudio Gama` : "Livro | Pastor Cláudio Gama";
    const description = loaderData
      ? loaderData.description.slice(0, 155)
      : "Livro do Pastor Cláudio Gama.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function BookPage() {
  const book = Route.useLoaderData();
  const waText = encodeURIComponent(`Paz do Senhor! Tenho interesse no livro "${book.title}".`);
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    cart.add(book.slug, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <section className="container-site py-14">
      <Link to="/loja" className="inline-flex items-center gap-2 text-sm text-gold hover:underline">
        <ArrowLeft className="h-4 w-4" /> Voltar para a Loja
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-navy p-10">
          <img src={book.image} alt={book.alt} className="mx-auto max-h-[520px] w-auto object-contain" />
        </div>

        <div>
          <span className="rounded-full bg-gold/15 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-gold uppercase">
            {book.badge}
          </span>
          <h1 className="section-title mt-4 normal-case">{book.title}</h1>
          <p className="mt-2 text-muted-foreground">Claudio Gama</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{book.description}</p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Livro Físico</p>
            <p className="mt-1 font-display text-3xl font-black text-gold">{book.price}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center text-foreground/80 hover:text-gold"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center text-foreground/80 hover:text-gold"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={handleAddToCart} className="btn-gold">
                <ShoppingCart className="h-4 w-4" /> {added ? "Adicionado!" : "Adicionar ao carrinho"}
              </button>
              <a
                href={`https://wa.me/5511911356596?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold"
              >
                <MessageCircle className="h-4 w-4" /> Comprar pelo WhatsApp
              </a>
            </div>
            {added && (
              <p className="mt-3 text-sm font-semibold text-gold">
                Adicionado ao carrinho.{" "}
                <Link to="/carrinho" className="underline">
                  Ver carrinho
                </Link>
              </p>
            )}
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Compre online com Pix, cartão ou boleto — o frete dos Correios é calculado pelo seu CEP no checkout.
              Prefere atendimento pessoal? Faça o pedido pelo WhatsApp.
            </p>
          </div>

          <div className="mt-8">
            <p className="eyebrow">Comercial — cursos e livros</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511911356596"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" /> São Paulo: (11) 91135-6596
              </a>
              <a
                href="https://wa.me/5521970007857"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" /> Rio de Janeiro e demais Estados: (21) 97000-7857
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
