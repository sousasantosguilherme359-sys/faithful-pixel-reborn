import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { BOOKS } from "@/data/site";

export const Route = createFileRoute("/loja/")({
  component: LojaPage,
  head: () => ({
    meta: [
      { title: "Loja Oficial | Livros do Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Livros que transformam vidas: obras autorais do Pastor Cláudio Gama com profundidade bíblica e sensibilidade pastoral. Compre com atendimento personalizado.",
      },
      { property: "og:title", content: "Loja Oficial | Livros do Pastor Cláudio Gama" },
      {
        property: "og:description",
        content: "Obras autorais do Pastor Cláudio Gama para curar, fortalecer e libertar a sua alma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const FILTERS = ["Todos os Livros", "Mais Vendidos", "Bíblia e Teologia", "Devocionais"];

function LojaPage() {
  const [filter, setFilter] = useState(FILTERS[0]);
  const books = filter === FILTERS[0] ? BOOKS : BOOKS.filter((b) => b.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Loja oficial"
        title="LIVROS QUE TRANSFORMAM VIDAS"
        subtitle="Obras autorais do Pastor Cláudio Gama, escritas com profundidade bíblica, teológica e filosófica para curar, fortalecer e libertar a sua alma. Adquira pelo WhatsApp com atendimento personalizado."
      />

      <section className="container-site py-14">
        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                filter === f
                  ? "border-gold bg-gold text-navy-deep"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <article
              key={b.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/60"
            >
              <Link to="/loja/$slug" params={{ slug: b.slug }} className="block bg-navy p-6">
                <img src={b.image} alt={b.alt} loading="lazy" className="mx-auto h-64 w-auto object-contain" />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-gold uppercase">
                  {b.badge}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug">
                  <Link to="/loja/$slug" params={{ slug: b.slug }} className="hover:text-gold">
                    {b.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">Claudio Gama</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-display text-xl font-bold text-gold">{b.price}</span>
                  <Link to="/loja/$slug" params={{ slug: b.slug }} className="btn-gold !px-5 !py-2.5">
                    Adicionar
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
