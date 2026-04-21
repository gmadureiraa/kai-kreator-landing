const STEPS = [
  {
    step: "01",
    title: "Configurar o cliente",
    body: "Sobe briefing, tom de voz, pilares de conteudo, publico e referencias. O KAI aprende o jeitao da conta antes de produzir uma linha.",
    tone: "ink",
  },
  {
    step: "02",
    title: "Montar a pauta",
    body: "Define cadencia, formatos, canais. Puxa ideias da biblioteca, arrasta pro calendario. Em minutos voce tem um mes na linha.",
    tone: "paper",
  },
  {
    step: "03",
    title: "Produzir e aprovar",
    body: "Copy + roteiro + visual no mesmo card. Cliente entra no link de aprovacao, deixa feedback. Tudo fica versionado, tudo fica datado.",
    tone: "accent",
  },
  {
    step: "04",
    title: "Publicar e medir",
    body: "Integra com as APIs das redes, agenda, publica, coleta metricas. O que performou volta pra biblioteca de insights. Loop fechado.",
    tone: "hot",
  },
];

const toneClasses: Record<string, string> = {
  ink: "bg-ink text-paper",
  paper: "bg-paper text-ink",
  accent: "bg-accent text-accent-ink",
  hot: "bg-hot text-paper",
};

export function Flow() {
  return (
    <section id="fluxo" className="border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
              / 03 &middot; Como funciona
            </div>
            <h2 className="headline-kern mt-5 font-black text-5xl md:text-7xl lg:text-8xl">
              Quatro passos. <br />
              <span className="serif-italic font-normal">Zero</span> fricao.
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-muted">
            A gente desenhou o fluxo imaginando o pior dia do seu mes. Pra
            quando tudo estiver acontecendo ao mesmo tempo, ele continuar de
            pe.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink border border-ink">
          {STEPS.map((s) => (
            <article
              key={s.step}
              className={`relative p-6 md:p-10 flex flex-col gap-5 min-h-[280px] ${toneClasses[s.tone]}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">
                  Passo
                </span>
                <span className="headline-kern text-6xl md:text-7xl font-black opacity-90">
                  {s.step}
                </span>
              </div>
              <h3 className="headline-kern text-3xl md:text-4xl font-black max-w-[18ch]">
                {s.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-[42ch]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
