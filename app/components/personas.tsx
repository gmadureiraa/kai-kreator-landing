const PERSONAS = [
  {
    id: "01",
    title: "Agencia in-house",
    body: "Voce toca 5, 10, 20 marcas ao mesmo tempo e precisa saber em 10 segundos o que esta sendo publicado, onde e por quem. Sem depender da boa vontade da planilha compartilhada.",
    tag: "Times de ate 30",
  },
  {
    id: "02",
    title: "Creator que virou empresa",
    body: "Voce ja nao escreve tudo sozinho. Tem ghostwriter, editor, gestor de trafego. Precisa de um lugar pra pauta + aprovacao que nao atrapalhe a criatividade nem vire burocracia.",
    tag: "Contas pessoais + marcas",
  },
  {
    id: "03",
    title: "Gestor de pauta",
    body: "Voce vive no calendario editorial. Precisa ver capacidade, bottleneck, entregas atrasadas e performance no mesmo lugar. E quer assinar o que aprova.",
    tag: "Editorial / head de conteudo",
  },
];

export function Personas() {
  return (
    <section id="pra-quem" className="border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
              / 01 &middot; Pra quem e
            </div>
            <h2 className="headline-kern mt-5 font-black text-5xl md:text-7xl lg:text-8xl">
              Feito pra quem <span className="serif-italic font-normal">ja tentou</span>
              <br />
              resolver na <span className="u-accent">planilha.</span>
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-muted">
            A gente construiu o KAI porque nenhuma ferramenta de mercado
            aguentou o ritmo de uma operacao editorial de verdade. Entao foi
            mais barato fazer que alugar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 border border-ink">
          {PERSONAS.map((p, i) => (
            <article
              key={p.id}
              className={`relative p-6 md:p-8 flex flex-col gap-5 bg-paper ${
                i < PERSONAS.length - 1 ? "md:border-r border-ink" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-ink" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                  {p.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] bg-ink text-paper px-2 py-1">
                  {p.tag}
                </span>
              </div>
              <h3 className="headline-kern text-3xl md:text-4xl font-black">
                {p.title}
              </h3>
              <p className="text-base leading-relaxed text-ink/80">{p.body}</p>
              <div className="mt-auto pt-6 border-t border-ink/20 font-mono text-[11px] uppercase tracking-[0.22em] text-muted flex items-center justify-between">
                <span>Persona</span>
                <span aria-hidden>&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
