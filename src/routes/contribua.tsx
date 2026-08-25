import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, HandCoins, Church, Globe2, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { GIVING_CONTACT, GIVING_PURPOSES } from "@/data/site";

export const Route = createFileRoute("/contribua")({
  component: ContribuaPage,
  head: () => ({
    meta: [
      { title: "Contribua com a Obra | Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Semeie no Ministério Pastor Cláudio Gama: construção da igreja na comunidade, missões e ação social. Contribua por PIX ou fale com a tesouraria.",
      },
      { property: "og:title", content: "Contribua com a Obra | Pastor Cláudio Gama" },
      { property: "og:description", content: "Sua oferta sustenta missões, ação social e a construção da igreja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PIX_KEY = "contato@pastorclaudiogama.com.br";

const purposeIcon = [Church, Globe2, HeartHandshake];

function ContribuaPage() {
  const [copied, setCopied] = useState(false);

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Semeie na obra"
        title="CONTRIBUA COM O MINISTÉRIO"
        subtitle="Cada oferta se transforma em evangelho pregado, famílias acolhidas e um templo levantado na comunidade."
      />

      <section className="container-site py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {GIVING_PURPOSES.map((p, i) => {
            const Icon = purposeIcon[i] ?? HandCoins;
            return (
              <div key={p.title} className="rounded-3xl border border-border bg-card p-8">
                <Icon className="h-7 w-7 text-gold" />
                <h2 className="mt-5 font-display text-lg font-bold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-gold/40 bg-gold/5 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="eyebrow">Forma de contribuição</p>
            <h2 className="mt-4 font-display text-2xl font-bold">Ofertar por PIX</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Use a chave abaixo no aplicativo do seu banco. Se quiser destinar sua oferta a um projeto específico,
              informe no campo de mensagem do PIX.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <code className="flex-1 truncate rounded-xl border border-border bg-navy px-4 py-3 text-sm">
                {PIX_KEY}
              </code>
              <button type="button" onClick={copyPix} className="btn-gold whitespace-nowrap">
                {copied ? <Check className="mr-2 inline h-4 w-4" /> : <Copy className="mr-2 inline h-4 w-4" />}
                {copied ? "Copiada!" : "Copiar chave"}
              </button>
            </div>
          </div>

          <div className="lg:border-l lg:border-border/60 lg:pl-12">
            <p className="eyebrow">Prefere falar conosco?</p>
            <h2 className="mt-4 font-display text-2xl font-bold">Tesouraria do ministério</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Para transferências bancárias, ofertas mensais, doação de materiais ou emissão de recibo, fale
              diretamente com a nossa equipe.
            </p>
            <a href={GIVING_CONTACT.href} target="_blank" rel="noreferrer" className="btn-outline-gold mt-6 inline-flex">
              {GIVING_CONTACT.label}
            </a>
            <p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground italic">
              “Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama ao
              que dá com alegria.” — 2 Coríntios 9.7
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
