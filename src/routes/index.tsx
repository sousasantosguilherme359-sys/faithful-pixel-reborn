import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  PlayCircle,
  ArrowRight,
  Quote,
  BookOpen,
  GraduationCap,
  Heart,
  Compass,
  Sparkles,
} from "lucide-react";
import {
  SITE,
  STATS,
  PILLARS,
  HOME_EVENTS,
  HOME_SERMONS,
  BOOKS,
  TESTIMONIALS,
  WHATSAPP_MAIN,
} from "@/data/site";

const PILLAR_ICONS = [BookOpen, Heart, Compass, Sparkles];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pastor Cláudio Gama | Ministério de Fé e Transformação" },
      {
        name: "description",
        content:
          "Site oficial do Pastor Cláudio Gama. Pregações, agenda de eventos, livros, cursos e conteúdos que transformam vidas pela fé em Jesus Cristo.",
      },
      { property: "og:title", content: "Pastor Cláudio Gama | Ministério de Fé e Transformação" },
      {
        property: "og:description",
        content:
          "Pregações, agenda de eventos, livros e conteúdos que transformam vidas pela fé em Jesus Cristo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE.name,
          description: SITE.description,
          jobTitle: "Pastor",
          knowsAbout: ["Teologia", "Pregação", "Liderança", "Aconselhamento Pastoral"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src="/images/pastor-microfone-left.jpeg"
          alt="Pastor Cláudio Gama pregando ao microfone"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-site relative flex min-h-[88vh] flex-col justify-center py-24 text-center">
          <p className="eyebrow">Ministério de Fé e Transformação</p>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-black leading-[1.05] md:text-7xl">
            PASTOR <span className="gold-gradient-text">CLÁUDIO GAMA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Nosso propósito é levar a Palavra de Deus com verdade, amor e poder, transformando vidas e
            edificando famílias para o Reino de Deus.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/sobre" className="btn-gold">
              <Compass className="h-4 w-4" />
              Conheça o Ministério
            </Link>
          </div>
          <a
            href={WHATSAPP_MAIN}
            target="_blank"
            rel="noreferrer"
            className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:text-gold hover:underline"
          >
            Fale com o ministério no WhatsApp
          </a>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pregação em Destaque</p>
          <h2 className="section-title mt-3">
            DEUS É A MINHA <span className="gold-gradient-text">PRIORIDADE</span>
          </h2>
        </div>
        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-3xl border border-border shadow-elegant">
          <img
            src="/images/video-destaque.jpg"
            alt="Deus é a Minha Prioridade — Pastor Cláudio Gama"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/40" />
          <button
            type="button"
            aria-label="Assistir vídeo"
            className="group absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 transition-transform hover:scale-110"
          >
            <PlayCircle className="h-10 w-10 text-navy-deep" />
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-semibold text-foreground">
            Assistir agora — sem sair do site
          </span>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-navy-deep">
        <div className="container-site grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-black text-gold md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Quatro Pilares</p>
          <h2 className="section-title mt-3">
            O QUE MOVE O <span className="gold-gradient-text">MINISTÉRIO</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = PILLAR_ICONS[i] ?? BookOpen;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-base font-bold tracking-wide">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="border-y border-border/60 bg-navy py-20">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Agenda</p>
              <h2 className="section-title mt-3">
                PRÓXIMOS <span className="gold-gradient-text">EVENTOS</span>
              </h2>
            </div>
            <Link
              to="/agenda"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
            >
              Ver agenda completa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {HOME_EVENTS.map((e, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/60"
              >
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-gold text-navy-deep">
                  <span className="font-display text-xl font-black leading-none">{e.day}</span>
                  <span className="text-[0.6rem] font-bold tracking-widest">{e.month}</span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold leading-snug">{e.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{e.place}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  <Clock className="h-4 w-4" /> {e.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERMONS */}
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Mensagens</p>
          <h2 className="section-title mt-3">
            PREGAÇÕES EM <span className="gold-gradient-text">DESTAQUE</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HOME_SERMONS.map((s) => (
            <Link
              key={s.title}
              to="/mensagens"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/60"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-navy-deep">
                  {s.tag}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-semibold">
                  {s.duration}
                </span>
                <PlayCircle className="absolute inset-0 m-auto h-12 w-12 text-gold/90 transition-transform group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold leading-snug group-hover:text-gold">
                  {s.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/play" className="btn-outline-gold">
            <PlayCircle className="h-4 w-4" />
            Assinar Cláudio Gama Play
          </Link>
        </div>
      </section>

      {/* BOOKS PREVIEW */}
      <section className="border-y border-border/60 bg-navy py-20">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Loja</p>
              <h2 className="section-title mt-3">
                LIVROS DO <span className="gold-gradient-text">PASTOR</span>
              </h2>
            </div>
            <Link
              to="/loja"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
            >
              Ver todos os livros <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BOOKS.slice(0, 3).map((b) => (
              <Link
                key={b.slug}
                to="/loja/$slug"
                params={{ slug: b.slug }}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/60"
              >
                <img
                  src={b.image}
                  alt={b.alt}
                  loading="lazy"
                  className="h-40 w-28 shrink-0 rounded-lg border border-border object-cover shadow-elegant"
                />
                <div className="flex flex-col">
                  <span className="w-fit rounded-full bg-gold/15 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-gold">
                    {b.badge}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug group-hover:text-gold">
                    {b.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{b.description}</p>
                  <span className="mt-auto pt-3 text-sm font-bold text-gold">{b.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSO MINISTÉRIO (família) */}
      <section className="container-site py-20">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <img
            src="/images/pastor-e-esposa.jpeg"
            alt="Pastor Cláudio Gama e sua esposa"
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-elegant"
          />
          <div>
            <p className="eyebrow">Nosso Ministério</p>
            <h2 className="section-title mt-3">
              MAIS DE CINCO <span className="gold-gradient-text">DÉCADAS</span> DE ENTREGA
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Há mais de 50 anos anunciando o Evangelho, o Pastor Cláudio Gama já esteve em mais de 30 países levando a
              Palavra de Deus e vendo vidas serem transformadas pela fé.
            </p>
            <Quote className="mt-8 h-7 w-7 text-gold/60" />
            <blockquote className="mt-4 font-display text-xl leading-snug">
              "Minha família, além de ser o meu maior patrimônio, também é o meu ministério."
            </blockquote>
            <p className="mt-3 text-sm font-semibold tracking-[0.16em] text-gold">PASTOR CLÁUDIO GAMA</p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
            >
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <img
          src="/images/familia-1.jpeg"
          alt="Pastor Cláudio Gama com a família e os netos"
          loading="lazy"
          className="mt-10 h-72 w-full rounded-3xl border border-border object-cover shadow-elegant"
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testemunhos</p>
          <h2 className="section-title mt-3">
            VIDAS <span className="gold-gradient-text">TRANSFORMADAS</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-7 w-7 text-gold/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.who}</span>
                  <span className="block text-xs text-muted-foreground">{t.city}</span>
                </span>
                <span className="ml-auto rounded-full bg-secondary px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-muted-foreground">
                  {t.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/images/pastor-sorrindo.jpeg"
          alt="Pastor Cláudio Gama"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/92 to-navy-deep" />
        <div className="container-site relative py-24 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h2 className="section-title mx-auto mt-6 max-w-3xl">
            FAÇA PARTE DESSE <span className="gold-gradient-text">MINISTÉRIO</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Acompanhe as pregações, estudos e eventos. Assine o Cláudio Gama Play, leia os livros
            ou participe dos cultos presenciais — a Palavra que transforma está ao seu alcance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/play" className="btn-gold">
              Assinar o Play
            </Link>
            <Link to="/contato" className="btn-outline-gold">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
