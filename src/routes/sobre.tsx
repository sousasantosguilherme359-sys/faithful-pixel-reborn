import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { FORMATION } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre o Ministério | Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Conheça a história do Pastor Cláudio Gama: biografia, formação acadêmica, missão, visão, valores, família e a obra da ACEVEG.",
      },
      { property: "og:title", content: "Sobre o Ministério | Pastor Cláudio Gama" },
      {
        property: "og:description",
        content: "Biografia, formação, missão e valores do Ministério do Pastor Cláudio Gama.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PILLARS = [
  {
    title: "Missão",
    text: "Anunciar o Evangelho de Jesus Cristo com poder, amor e autoridade, testemunhando vidas transformadas pelo poder da fé.",
  },
  {
    title: "Visão",
    text: "Alcançar nações com a Palavra de Deus, formando líderes e edificando famílias para o Reino.",
  },
  {
    title: "Valores",
    text: "Fé, integridade, excelência, amor ao próximo e compromisso com a Palavra de Deus.",
  },
];

const AUTHOR_BOOKS = [
  "Tira Minha Alma da Prisão",
  "Abrindo o Coração para não Morrer do Coração",
  "5 Passos para se Tornar um Pregador Pentecostal Eficaz",
];

const GALLERY = [
  "/images/pastor-pregando-plateia.jpeg",
  "/images/pastor-pregando-costas.jpeg",
  "/images/pastor-sorrindo.jpeg",
];

function SobrePage() {
  return (
    <>
      <PageHero eyebrow="Conheça nossa história" title="SOBRE O MINISTÉRIO" image="/images/pastor-aplaudindo.jpeg" />

      <section className="container-site grid items-start gap-12 py-20 lg:grid-cols-2">
        <img
          src="/images/pastor-aplaudindo.jpeg"
          alt="Pastor Cláudio Gama"
          className="w-full rounded-3xl border border-border object-cover shadow-elegant"
        />
        <div>
          <h2 className="section-title normal-case">Pastor Cláudio Gama</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Cláudio Gama nasceu em 07 de maio de 1966, na cidade de São Gonçalo, no Estado do Rio de Janeiro, Brasil.
              Filho de Clemente e Jovelina, é casado com Berenice e pai de David Kennedy e Laura Evellyn.
            </p>
            <p>
              Pastor, conferencista e palestrante, é também técnico em contabilidade, pedagogo e bacharel em Teologia,
              com o Curso de Formação de Professores. Recebeu o título de Doutor Honoris Causa pela Academia Brasileira
              Teológica de Letras.
            </p>
            <p>
              É fundador e presidente da Associação Cristo em Vós a Esperança da Glória (ACEVEG). Atualmente, dedica sua
              vida a pastorear, escrever livros e revistas de estudos e a viajar pelo Brasil e pelo exterior,
              participando de congressos, escolas bíblicas e conferências evangelísticas — cumprindo o IDE de Jesus e
              proclamando as Boas Novas de Salvação.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-bold text-gold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-navy py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/familia-1.jpeg"
            alt="Pastor Cláudio Gama com a família e os netos"
            loading="lazy"
            className="w-full rounded-3xl border border-border object-cover shadow-elegant"
          />
          <div>
            <p className="eyebrow">Minha maior herança</p>
            <h2 className="section-title mt-3">MINHA FAMÍLIA</h2>
            <Quote className="mt-8 h-8 w-8 text-gold" />
            <blockquote className="mt-4 font-display text-2xl leading-snug">
              “Minha família, além de ser o meu maior patrimônio, também é o meu ministério.”
            </blockquote>
            <p className="mt-4 text-sm font-semibold tracking-[0.16em] text-gold">PASTOR CLÁUDIO GAMA</p>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <h2 className="section-title">FORMAÇÃO ACADÊMICA</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Uma vida dedicada ao estudo, ao ensino e ao aprofundamento na Palavra e nas ciências da educação.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATION.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-site pb-20">
        <h2 className="section-title">LIVROS DO AUTOR</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Obras escritas pelo Pastor Cláudio Gama que têm abençoado e transformado vidas.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {AUTHOR_BOOKS.map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-card p-6">
              <BookOpen className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-bold">{b}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site pb-24">
        <h2 className="section-title">GALERIA</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {GALLERY.map((src) => (
            <img
              key={src}
              src={src}
              alt="Ministério Pastor Cláudio Gama"
              loading="lazy"
              className="h-64 w-full rounded-2xl border border-border object-cover"
            />
          ))}
        </div>
      </section>
    </>
  );
}
