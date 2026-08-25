import { createFileRoute } from "@tanstack/react-router";
import { Phone, Youtube, Instagram, Facebook, Music2, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CONTACTS, SOCIALS } from "@/data/site";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato e Assessoria | Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Fale com a assessoria do Pastor Cláudio Gama: convites para eventos, livros, cursos e assinaturas. WhatsApp de Rio de Janeiro, São Paulo e demais Estados.",
      },
      { property: "og:title", content: "Contato e Assessoria | Pastor Cláudio Gama" },
      { property: "og:description", content: "Canais oficiais de contato do Ministério Pastor Cláudio Gama." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const socialIcon: Record<string, typeof Youtube> = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
  Facebook: Facebook,
};

function ContatoPage() {
  return (
    <>
      <PageHero eyebrow="Fale conosco" title="CONTATO" />

      <section className="container-site grid gap-12 py-16 lg:grid-cols-2">
        <form
          className="rounded-3xl border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open("https://wa.me/5521999871093", "_blank");
          }}
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="nome" className="text-sm font-medium">
                Nome *
              </label>
              <input
                id="nome"
                required
                className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="assunto" className="text-sm font-medium">
                Assunto
              </label>
              <input
                id="assunto"
                className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="text-sm font-medium">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <button type="submit" className="btn-gold w-full">
              Enviar mensagem
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Seus dados estão protegidos e não serão compartilhados.
            </p>
          </div>
        </form>

        <div className="space-y-10">
          <div>
            <h2 className="font-display text-xl font-bold">Assessoria e Atendimento</h2>
            <ul className="mt-5 space-y-3">
              {CONTACTS.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/60"
                  >
                    <span className="text-sm text-muted-foreground">{c.label}</span>
                    <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-gold">
                      <Phone className="h-4 w-4" />
                      {c.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">Siga o Pastor nas Redes</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {SOCIALS.map((s) => {
                const Icon = socialIcon[s.label] ?? Youtube;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-gold/60"
                  >
                    <Icon className="h-5 w-5 text-gold" />
                    <span>
                      <span className="block text-sm font-semibold">{s.label}</span>
                      <span className="block text-xs text-muted-foreground">{s.handle}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="inline-flex items-center gap-2 font-display text-xl font-bold">
              <Clock className="h-5 w-5 text-gold" /> Horário de Atendimento
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Segunda a sexta: 9h às 18h</p>
            <p className="text-sm text-muted-foreground">Sábado: 9h às 13h</p>
          </div>
        </div>
      </section>
    </>
  );
}
