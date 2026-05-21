const FEATURES = [
  {
    step: "01",
    title: "Radar de ideias",
    body: "Captura sinais, referencias e temas recorrentes para alimentar a pauta antes da reuniao comecar.",
    accent: "bg-blue",
  },
  {
    step: "02",
    title: "Briefing vivo",
    body: "Tom de voz, objetivo, contexto, assets e historico de decisao no mesmo lugar que a equipe produz.",
    accent: "bg-green",
  },
  {
    step: "03",
    title: "Linha criativa",
    body: "Copy, roteiro, design e formatos derivados conectados como pecas de uma mesma ideia.",
    accent: "bg-coral",
  },
  {
    step: "04",
    title: "Aprovacao limpa",
    body: "Cliente comenta, aprova e pede ajuste sem transformar feedback em print perdido.",
    accent: "bg-cyan",
  },
  {
    step: "05",
    title: "Publicacao assistida",
    body: "Calendario, cadencia, responsaveis e status de cada canal com visao de gargalos.",
    accent: "bg-violet",
  },
  {
    step: "06",
    title: "Aprendizado continuo",
    body: "Performance volta para a biblioteca de insights e melhora o proximo ciclo de producao.",
    accent: "bg-ink",
  },
];

export function Features() {
  return (
    <section id="modulos" className="bg-soft py-16 sm:py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-eyebrow">Modulos da fabrica</div>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Cada peca sabe para onde precisa ir.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            A landing inteira foi pensada como o proprio produto: entradas
            claras, processamento elegante e saidas prontas para publicar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.step}
              className="group relative overflow-hidden rounded-[8px] border border-line bg-white p-6 shadow-[0_20px_70px_rgba(38,56,86,0.07)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full ${feature.accent}`}
                aria-hidden
              />
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold text-muted">
                  {feature.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-current text-line-strong transition-colors group-hover:text-blue" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold leading-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
