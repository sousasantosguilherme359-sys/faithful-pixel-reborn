import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, CheckCircle2, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AGENDA_EVENTS, INVITE_RJ, INVITE_SP } from "@/data/site";

export const Route = createFileRoute("/agenda")({
  component: AgendaPage,
  head: () => ({
    meta: [
      { title: "Agenda do Pastor Cláudio Gama | Próximos Eventos e Cidades" },
      {
        name: "description",
        content:
          "Confira a agenda oficial do Pastor Cláudio Gama: próximos cultos, congressos e conferências pelo Brasil e exterior. Convide o pastor para o seu evento.",
      },
      { property: "og:title", content: "Agenda do Pastor Cláudio Gama | Próximos Eventos e Cidades" },
      {
        property: "og:description",
        content: "Próximos cultos, congressos e conferências do Pastor Cláudio Gama pelo Brasil e exterior.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const GALLERY = [
  "/images/pastor-pregando-plateia.jpeg",
  "/images/pastor-pregando-costas.jpeg",
  "/images/pastor-sorrindo.jpeg",
  "/images/pastor-aplaudindo.jpeg",
];

function AgendaPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <>
      <PageHero
        eyebrow="Agenda de Eventos"
        title={
          <>
            AGENDA DO <span className="gold-gradient-text">PASTOR CLÁUDIO GAMA</span>
          </>
        }
        subtitle="Confira os próximos eventos e participe!"
        image="/images/pastor-pregando-plateia.jpeg"
      />

      <section className="container-site grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold">Calendário</h2>
          <p className="mt-1 text-sm text-gold">
            Julho <span className="text-muted-foreground">2026</span>
          </p>
          <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
            {WEEKDAYS.map((d) => (
              <span key={d} className="py-2 font-semibold tracking-widest">
                {d}
              </span>
            ))}
            {days.map((d) => (
              <span
                key={d}
                className="rounded-md py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Próximos Eventos</h2>
          <ul className="mt-6 space-y-4">
            {AGENDA_EVENTS.map((e, i) => (
              <li
                key={i}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/60"
              >
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gold text-navy-deep">
                  <span className="font-display text-2xl font-black leading-none">{e.day}</span>
                  <span className="text-[0.65rem] font-bold tracking-widest">{e.month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 font-semibold">
                    <MapPin className="h-4 w-4 text-gold" />
                    {e.city}
                  </p>
                  {e.place && <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>}
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Confirmado
                  </p>
                </div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                  <Clock className="h-4 w-4" />
                  {e.time}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site pb-16">
        <h2 className="font-display text-xl font-bold">Eventos Realizados</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((src) => (
            <img
              key={src}
              src={src}
              alt="Evento realizado do Pastor Cláudio Gama"
              loading="lazy"
              className="h-52 w-full rounded-2xl border border-border object-cover"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-navy py-20">
        <div className="container-site text-center">
          <p className="eyebrow">Convite</p>
          <h2 className="section-title mt-3 normal-case">Convide o Pastor Cláudio Gama</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Deseja receber o Pastor Cláudio Gama em sua cidade, igreja ou evento? Fale com a nossa assessoria e vamos
            verificar a disponibilidade na agenda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={INVITE_SP} target="_blank" rel="noreferrer" className="btn-gold flex-col !items-start !gap-0.5">
              <span className="text-[0.65rem] opacity-80">Assessoria São Paulo</span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" /> (11) 91135-6596
              </span>
            </a>
            <a
              href={INVITE_RJ}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold flex-col !items-start !gap-0.5"
            >
              <span className="text-[0.65rem] opacity-80">Assessoria Rio de Janeiro e Internacional</span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" /> (21) 99987-1093
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
