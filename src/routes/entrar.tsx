import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/entrar")({
  component: EntrarPage,
  head: () => ({
    meta: [
      { title: "Entrar | Área do Aluno e Assinantes — Pastor Cláudio Gama" },
      {
        name: "description",
        content:
          "Acesse sua conta no Ministério Pastor Cláudio Gama para assistir às pregações do Cláudio Gama Play e às aulas do Instituto Bíblico.",
      },
      { property: "og:title", content: "Entrar | Ministério Pastor Cláudio Gama" },
      { property: "og:description", content: "Acesse sua conta no Ministério Pastor Cláudio Gama." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function EntrarPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-9">
        <Link
          to="/"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold font-display text-lg font-black text-gold"
        >
          CG
        </Link>
        <h1 className="mt-6 text-center font-display text-3xl font-bold">Entrar</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">Acesse sua conta no Ministério</p>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login" className="text-sm font-medium">
              E-mail ou WhatsApp
            </label>
            <input
              id="login"
              className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="senha" className="text-sm font-medium">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              className="mt-2 w-full rounded-xl border border-input bg-navy px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </div>
          <button type="submit" className="btn-gold w-full">
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Não tem conta? <span className="font-semibold text-gold">Cadastre-se</span>
        </p>
        <p className="mt-3 text-center text-sm">
          <Link to="/" className="text-muted-foreground hover:text-gold">
            Voltar ao início
          </Link>
        </p>
      </div>
    </section>
  );
}
