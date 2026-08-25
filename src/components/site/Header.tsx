import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, ShoppingBag, User, Menu, X, ArrowRight, Youtube, Instagram, Facebook, Music2 } from "lucide-react";
import { NAV, SOCIALS } from "@/data/site";

const socialIcon: Record<string, typeof Youtube> = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
  Facebook: Facebook,
};

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-navy-deep">
        <div className="container-site flex h-10 items-center justify-between text-xs">
          <Link to="/agenda" className="flex items-center gap-2 text-muted-foreground hover:text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <Calendar className="h-3.5 w-3.5 text-gold" />
            <span className="font-semibold tracking-[0.2em] text-gold">AGENDA</span>
            <span className="hidden sm:inline">— próximas datas e cidades</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden text-[0.65rem] font-semibold tracking-[0.25em] text-muted-foreground sm:inline">
              SIGA O PASTOR
            </span>
            {SOCIALS.map((s) => {
              const Icon = socialIcon[s.label] ?? Youtube;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-6 w-6 items-center justify-center rounded-md bg-secondary text-foreground transition-colors hover:bg-gold hover:text-navy-deep"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-navy/95 backdrop-blur">
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/pastor-logo.png"
              alt="Logo Pastor Cláudio Gama"
              className="h-11 w-11 rounded-full border-2 border-gold object-cover"
            />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-[0.16em] text-foreground">PASTOR</span>
              <span className="block font-display text-xs tracking-[0.24em] text-muted-foreground">CLÁUDIO GAMA</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-2 text-sm text-foreground/85 transition-colors hover:text-gold [&.active]:text-gold"
              >
                {"highlight" in item && item.highlight ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-semibold text-navy-deep">
                    <Calendar className="h-4 w-4" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/loja" aria-label="Loja" className="hidden text-foreground/80 hover:text-gold sm:block">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link
              to="/entrar"
              className="hidden items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-navy-deep sm:inline-flex"
            >
              <User className="h-4 w-4" />
              ENTRAR
            </Link>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="text-foreground lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="container-site flex flex-col gap-1 border-t border-border/60 py-4 lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground/90 hover:bg-secondary hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/entrar" onClick={() => setOpen(false)} className="btn-gold mt-2">
              ENTRAR
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
