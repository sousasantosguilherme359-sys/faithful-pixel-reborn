import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart, MessageCircle, Phone } from "lucide-react";
import { BOOKS } from "@/data/site";

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
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="btn-gold">
                <ShoppingCart className="h-4 w-4" /> Adicionar ao carrinho
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
