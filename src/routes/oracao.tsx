import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeartHandshake, MessageCircle, Clock3 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PRAYER_TOPICS, WHATSAPP_PRAYER_NUMBER, WHATSAPP_TESTIMONY } from "@/data/site";

export const Route = createFileRoute("/oracao")({
  component: OracaoPage,
  head: () => ({
    meta: [
      { title: "Pedido de Oração | Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Envie o seu pedido de oração para a equipe pastoral do Pastor Cláudio Gama. Intercedemos por saúde, família, finanças e vida espiritual — com sigilo e cuidado.",
      },
      { property: "og:title", content: "Pedido de Oração | Pastor Cláudio Gama" },
      { property: "og:description", content: "Estamos orando por você. Envie o seu pedido agora." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function OracaoPage() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [topic, setTopic] = useState(PRAYER_TOPICS[0]);
  const [pedido, setPedido] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Paz do Senhor! Meu nome é ${nome}${cidade ? `, de ${cidade}` : ""}.
Motivo: ${topic}
Pedido de oração: ${pedido}`;
    window.open(`https://wa.me/${WHATSAPP_PRAYER_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold";

  return (
    <>
      <PageHero
        eyebrow="Estamos orando por você"
        title="PEDIDO DE ORAÇÃO"
        subtitle="Nenhum pedido é pequeno demais para Deus. Envie o seu — nossa equipe pastoral vai interceder por você com sigilo e cuidado."
      />

      <section className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="nome" className="text-sm font-medium">
                Nome *
              </label>
              <input id="nome" required value={nome} onChange={(e) => setNome(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="cidade" className="text-sm font-medium">
                Cidade / Estado
              </label>
              <input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} className={inputClass} />
            </div>
            <div>
              <span className="text-sm font-medium">Motivo do pedido</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {PRAYER_TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
                      topic === t
                        ? "border-gold bg-gold text-navy-deep"
                        : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="pedido" className="text-sm font-medium">
                Seu pedido *
              </label>
              <textarea
                id="pedido"
                required
                rows={6}
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
                className={inputClass}
                placeholder="Escreva com liberdade. Vamos orar por você."
              />
            </div>
          </div>
          <button type="submit" className="btn-gold mt-8 w-full">
            Enviar pedido de oração
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            O envio abre o WhatsApp da assessoria com o seu pedido já escrito.
          </p>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-7">
            <HeartHandshake className="h-6 w-6 text-gold" />
            <h2 className="mt-4 font-display text-lg font-bold">Como oramos por você</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Todos os pedidos recebidos são levados ao altar nos cultos de intercessão e mantidos em absoluto sigilo
              pela equipe pastoral.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <Clock3 className="h-6 w-6 text-gold" />
            <h2 className="mt-4 font-display text-lg font-bold">Corrente de oração</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Toda quarta-feira, às 6h, a equipe se reúne para interceder pelos pedidos da semana. Ore junto conosco de
              onde você estiver.
            </p>
          </div>
          <div className="rounded-3xl border border-gold/40 bg-gold/5 p-7">
            <MessageCircle className="h-6 w-6 text-gold" />
            <h2 className="mt-4 font-display text-lg font-bold">Deus respondeu?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Conte para nós o que Ele fez. Seu testemunho fortalece a fé de outras pessoas.
            </p>
            <a href={WHATSAPP_TESTIMONY} target="_blank" rel="noreferrer" className="btn-outline-gold mt-5 inline-flex">
              Enviar testemunho
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
