const PERSONAS = [
  {
    title: "Agencias com muitas frentes",
    body: "Visao clara de clientes, canais, status e responsaveis para quem precisa publicar sem virar refem de reuniao de alinhamento.",
    metric: "20+",
    label: "marcas em paralelo",
  },
  {
    title: "Creators que viraram empresa",
    body: "Um lugar para transformar repertorio, ghostwriting, edicao, design e aprovacao em uma linha de producao leve.",
    metric: "4x",
    label: "mais formatos por ideia",
  },
  {
    title: "Times internos de conteudo",
    body: "Governanca editorial, biblioteca de aprendizados e analytics para quem precisa provar impacto sem matar a criatividade.",
    metric: "1",
    label: "fonte de verdade",
  },
];

export function Personas() {
  return (
    <section id="pra-quem" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-eyebrow">Para operacoes vivas</div>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Conteudo deixa de ser tarefa e vira sistema.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
            O KAI foi desenhado para o momento em que a marca ja tem volume,
            dependencias e urgencia demais para operar no improviso.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PERSONAS.map((persona) => (
            <article key={persona.title} className="glass-panel p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[13rem] text-2xl font-semibold leading-tight text-ink">
                  {persona.title}
                </h3>
                <div className="text-right">
                  <div className="text-3xl font-semibold text-ink">{persona.metric}</div>
                  <div className="mt-1 text-xs font-semibold uppercase text-muted">
                    {persona.label}
                  </div>
                </div>
              </div>
              <p className="mt-8 text-base leading-7 text-muted">{persona.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
