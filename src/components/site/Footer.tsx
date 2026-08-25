import { Link } from "@tanstack/react-router";
import { Youtube, Instagram, Facebook, Music2, Phone } from "lucide-react";
import { SOCIALS } from "@/data/site";

const socialIcon: Record<string, typeof Youtube> = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
  Facebook: Facebook,
};

const navLinks = [
  { label: "Sobre o Ministério", to: "/sobre" },
  { label: "Loja de Livros", to: "/loja" },
  { label: "Cláudio Gama Play", to: "/play" },
  { label: "Agenda", to: "/agenda" },
  { label: "Devocionais e Estudos", to: "/mensagens" },
  { label: "Pedido de Oração", to: "/oracao" },
  { label: "Contribua com a Obra", to: "/contribua" },
] as const;

const assessoria = [
  { label: "Rio de Janeiro", phone: "(21) 99987-1093", href: "https://wa.me/5521999871093" },
  { label: "São Paulo e Brasil", phone: "(11) 91135-6596", href: "https://wa.me/5511911356596" },
  { label: "WhatsApp Comercial / Livros", phone: "(11) 91135-6596", href: "https://wa.me/5511911356596" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/pastor-logo.png"
              alt="Logo Pastor Cláudio Gama"
              className="h-12 w-12 rounded-full border-2 border-gold object-cover"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold tracking-[0.14em]">PASTOR CLÁUDIO GAMA</span>
              <span className="block text-xs tracking-[0.16em] text-gold">Ministério de Fé e Transformação</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Levando a Palavra que transforma vidas. Há mais de cinco décadas servindo a Deus e edificando famílias.
          </p>
          <p className="mt-6 eyebrow">Siga o Pastor</p>
          <div className="mt-3 flex gap-2">
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label] ?? Youtube;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-gold hover:text-navy-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Navegação</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Assessoria</h3>
          <ul className="mt-4 space-y-4 text-sm">
            {assessoria.map((a, i) => (
              <li key={i}>
                <p className="text-muted-foreground">{a.label}</p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-gold hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {a.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-6">
        <p className="container-site text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ministério Pastor Cláudio Gama | Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
