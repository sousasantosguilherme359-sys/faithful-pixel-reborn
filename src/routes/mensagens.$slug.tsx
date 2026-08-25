import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { POSTS, WHATSAPP_MAIN } from "@/data/site";

export const Route = createFileRoute("/mensagens/$slug")({
  component: PostPage,
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Pastor Cláudio Gama` },
          { name: "description", content: loaderData.excerpt.slice(0, 155) },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt.slice(0, 155) },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
});

function PostPage() {
  const post = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-border/60">
        <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/90 to-navy-deep" />
        <div className="container-site relative py-20 md:py-24">
          <Link
            to="/mensagens"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-gold uppercase hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para estudos
          </Link>
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight font-bold md:text-5xl">{post.title}</h1>
          <p className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            {post.date}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.read} de leitura
            </span>
          </p>
        </div>
      </header>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <img src={post.image} alt={post.title} className="w-full rounded-3xl border border-border object-cover" />

          <p className="mt-10 border-l-2 border-gold pl-6 font-display text-xl leading-relaxed text-foreground/90 italic">
            {post.verse}
          </p>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/oracao" className="btn-gold">
              Enviar pedido de oração
            </Link>
            <a href={WHATSAPP_MAIN} target="_blank" rel="noreferrer" className="btn-outline-gold">
              <Share2 className="mr-2 inline h-4 w-4" />
              Compartilhar no WhatsApp
            </a>
          </div>
        </div>

        <aside>
          <h2 className="eyebrow">Leia também</h2>
          <div className="mt-4 space-y-5">
            {(related.length > 0 ? related : POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)).map((p) => (
              <Link
                key={p.slug}
                to="/mensagens/$slug"
                params={{ slug: p.slug }}
                className="block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/60"
              >
                <img src={p.image} alt={p.title} loading="lazy" className="h-32 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs font-bold tracking-widest text-gold uppercase">{p.category}</span>
                  <h3 className="mt-2 font-display text-base leading-snug font-bold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
