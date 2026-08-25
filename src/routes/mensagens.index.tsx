import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { POSTS, POST_CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/mensagens/")({
  component: MensagensPage,
  head: () => ({
    meta: [
      { title: "Devocionais e Estudos Bíblicos | Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Devocionais, história da igreja, missões e teologia sistemática — estudos com profundidade bíblica escritos pelo Pastor Cláudio Gama.",
      },
      { property: "og:title", content: "Devocionais e Estudos Bíblicos | Pastor Cláudio Gama" },
      { property: "og:description", content: "Palavra & Estudo: conteúdos para uma fé com raiz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function MensagensPage() {
  const [cat, setCat] = useState(POST_CATEGORIES[0]);
  const posts = cat === "Tudo" ? POSTS : POSTS.filter((p) => p.category === cat);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Palavra & Estudo"
        title="DEVOCIONAIS E ESTUDOS BÍBLICOS"
        subtitle="Devocionais, história da igreja, missões e teologia — com profundidade bíblica, para uma fé com raiz."
      />

      <section className="container-site py-14">
        <div className="flex flex-wrap justify-center gap-3">
          {POST_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                cat === c
                  ? "border-gold bg-gold text-navy-deep"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Link
            to="/mensagens/$slug"
            params={{ slug: featured.slug }}
            className="mt-12 grid overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-gold/60 lg:grid-cols-2"
          >
            <img src={featured.image} alt={featured.title} className="h-full min-h-72 w-full object-cover" />
            <div className="p-8">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">{featured.category}</span>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {featured.date} · {featured.read}
              </p>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-2xl font-bold">Mais Estudos</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to="/mensagens/$slug"
                  params={{ slug: p.slug }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/60"
                >
                  <img src={p.image} alt={p.title} loading="lazy" className="h-48 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase">{p.category}</span>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <p className="mt-auto pt-5 text-xs text-muted-foreground">
                      {p.date} · {p.read}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
