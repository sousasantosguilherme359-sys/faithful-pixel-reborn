import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Users, Award, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/instituto")({
  component: InstitutoPage,
  head: () => ({
    meta: [
      { title: "Instituto Bíblico | Formação Teológica com Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Cursos e formações teológicas com o Pastor Cláudio Gama. Seja Aluno Fundador do Instituto Bíblico por R$ 39,90/mês e acesse todas as aulas e mensagens exclusivas.",
      },
      { property: "og:title", content: "Instituto Bíblico | Pastor Cláudio Gama" },
      { property: "og:description", content: "Formando vidas para o Reino: cursos e formações teológicas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const FEATURES = [
  { icon: BookOpen, title: "Conteúdo Bíblico", text: "Ensinos fundamentados na Palavra de Deus" },
  { icon: Users, title: "Comunidade", text: "Conecte-se com outros alunos e líderes" },
  { icon: Award, title: "Certificado", text: "Receba seu certificado ao concluir o curso" },
];

const COURSES = [
  {
    title: "Formação de Líderes e Obreiros",
    text: "Curso completo de formação ministerial com o Pastor Cláudio Gama. 8 módulos cobrindo todos os aspectos da liderança cristã.",
    modules: "6 módulos",
  },
  {
    title: "Livro do Gênesis: O Designer do homem no jardim do Éden",
    text: "Pré-lançamento exclusivo para os Alunos Fundadores do Instituto Pastor Cláudio Gama. Nesta primeira série de estudos bíblicos, mergulhamos no Livro do Gênesis para entender o projeto de Deus ao criar o homem — o Designer por trás da vida no Jardim do Éden. A primeira aula estreia no dia 10 de setembro. Ao garantir sua vaga agora, você assegura acesso a esta e a todas as próximas aulas, cursos e mensagens exclusivas do pastor.",
    modules: "1 módulos",
  },
];

function InstitutoPage() {
  return (
    <>
      <PageHero
        eyebrow="Formação Teológica"
        title="INSTITUTO BÍBLICO"
        subtitle="Formando vidas para o Reino. Cursos e formações teológicas com o Pastor Cláudio Gama."
        image="/images/pastor-microfone.jpeg"
      />

      <section className="container-site grid gap-6 py-16 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-7 text-center">
            <f.icon className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-lg font-bold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-border/60 bg-navy py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Assinatura do Instituto</p>
            <p className="mt-3 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold tracking-widest text-gold uppercase">
              Pré-lançamento · Vagas de Fundador
            </p>
            <h2 className="section-title mt-4 normal-case">Seja Aluno Fundador do Instituto</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Inscreva-se agora no pré-lançamento e tenha acesso a todas as aulas, cursos e mensagens exclusivas do
              Pastor Cláudio Gama. O primeiro tema — Livro do Gênesis: O Designer do homem no Jardim do Éden — estreia
              em 10 de setembro.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Todas as aulas e cursos", "Mensagens exclusivas", "Pix, cartão ou boleto"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gold/50 bg-card p-10 text-center shadow-gold">
            <p className="eyebrow">Aluno Fundador</p>
            <p className="mt-4 font-display text-5xl font-black text-gold">R$ 39,90</p>
            <p className="text-sm text-muted-foreground">/mês</p>
            <p className="mt-2 text-xs tracking-widest text-muted-foreground uppercase">preço de pré-lançamento</p>
            <a href="https://wa.me/5511911356596" target="_blank" rel="noreferrer" className="btn-gold mt-8 w-full">
              Quero ser Fundador
            </a>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <h2 className="section-title">CURSOS DISPONÍVEIS</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {COURSES.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-xs tracking-widest text-gold uppercase">{c.modules}</span>
                <a
                  href="https://wa.me/5511911356596"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
                >
                  Acessar <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
