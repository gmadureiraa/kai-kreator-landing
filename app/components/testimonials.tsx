const ITEMS = [
  {
    quote:
      "A gente tinha 11 planilhas compartilhadas. Hoje a gente tem o KAI aberto o dia inteiro. Parece obvio agora, nao parecia ha um ano.",
    name: "Placeholder",
    role: "Head de conteudo, marca parceira",
    meta: "ed. a editar",
  },
  {
    quote:
      "A parte que mais me pegou foi ver o cliente aprovando na propria ferramenta. Sem print, sem pdf, sem dor.",
    name: "Placeholder",
    role: "Gestor editorial, agencia amiga",
    meta: "ed. a editar",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-ink bg-paper-soft">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
              / 04 &middot; Quem ja usa
            </div>
            <h2 className="headline-kern mt-5 font-black text-5xl md:text-7xl lg:text-8xl">
              Gente que <span className="serif-italic font-normal">publica.</span>
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-muted">
            Os depoimentos abaixo sao placeholders. Quando voce assinar a
            proposta, a gente coloca o seu aqui.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="relative border border-ink bg-paper p-8 md:p-10 flex flex-col gap-8"
            >
              <div
                className="absolute -top-5 left-6 bg-accent text-accent-ink border border-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em]"
              >
                {t.meta}
              </div>
              <blockquote className="serif-italic text-2xl md:text-4xl leading-tight text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-between pt-6 border-t border-ink/20 font-mono text-xs uppercase tracking-[0.22em] text-muted">
                <span>{t.name}</span>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
