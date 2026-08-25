import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/90 to-navy-deep" />
        </>
      )}
      <div className="container-site relative py-20 text-center md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-4">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
