import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, ArrowRight } from "lucide-react";
import { PLAY_CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/play")({
  component: PlayPage,
  head: () => ({
    meta: [
      { title: "Cláudio Gama Play | Pregações e Séries Exclusivas" },
      {
        name: "description",
        content:
          "Assine o Cláudio Gama Play e tenha acesso ilimitado a centenas de pregações sobre liderança, cura e revelação por R$ 50,00/mês.",
      },
      { property: "og:title", content: "Cláudio Gama Play | Pregações e Séries Exclusivas" },
      {
        property: "og:description",
        content: "Acesso ilimitado a centenas de pregações do Pastor Cláudio Gama por R$ 50,00/mês.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PlayPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src="/images/pastor-pregando-costas.jpeg"
          alt="Deus Revela o Impossível"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" />
        <div className="container-site relative py-28 md:py-36">
          <p className="eyebrow">Em destaque</p>
          <h1 className="section-title mt-4 max-w-2xl normal-case">Deus Revela o Impossível</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Uma palavra poderosa sobre fé, revelação e o agir sobrenatural de Deus na sua vida.
          </p>
          <button type="button" className="btn-gold mt-8">
            <Play className="h-4 w-4" /> Assistir agora
          </button>
        </div>
      </section>

      {PLAY_CATEGORIES.map((cat) => (
        <section key={cat.name} className="container-site py-12">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold">{cat.name}</h2>
            <button type="button" className="inline-flex items-center gap-1 text-sm text-gold hover:underline">
              Ver mais <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cat.videos.map((v) => (
              <article key={v.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative">
                  <img src={v.image} alt={v.title} loading="lazy" className="h-40 w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-navy-deep/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-10 w-10 text-gold" />
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-navy-deep/85 px-2 py-0.5 text-xs">
                    {v.duration}
                  </span>
                </div>
                <h3 className="p-4 text-sm font-semibold leading-snug">{v.title}</h3>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-border/60 bg-navy py-20">
        <div className="container-site text-center">
          <h2 className="section-title normal-case">Assine o Cláudio Gama Play</h2>
          <p className="mt-4 text-muted-foreground">
            Tenha acesso ilimitado a todas as pregações por apenas R$ 50,00/mês
          </p>
          <Link to="/entrar" className="btn-gold mt-8">
            Assine agora
          </Link>
        </div>
      </section>
    </>
  );
}
