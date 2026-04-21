const FEATURES = [
  {
    code: "F.01",
    title: "Pauta editorial viva",
    body: "Calendario semanal + mensal por cliente, por canal, por formato. Arrasta, filtra, reagenda. Todo mundo ve o mesmo. Sem export manual pra PDF nunca mais.",
    spec: "Multi-canal",
  },
  {
    code: "F.02",
    title: "Briefings que nao se perdem",
    body: "Cada post tem briefing com referencias, tom de voz, CTA, objetivo. Links pra arquivo, figma, canva, drive. Se o cliente mudou o rumo, o historico fica.",
    spec: "Versionado",
  },
  {
    code: "F.03",
    title: "Aprovacoes sem WhatsApp",
    body: "Cliente recebe link publico, aprova, pede ajuste, comenta frame por frame. Voce ve quem engasgou no fluxo antes de virar crise.",
    spec: "Link publico",
  },
  {
    code: "F.04",
    title: "Analytics que interessa",
    body: "Metricas por conta, por canal, por serie. Dashboards que respondem: o que performou? onde estamos bottleneckando? qual cliente precisa de atencao?",
    spec: "Dashboards",
  },
  {
    code: "F.05",
    title: "Integracoes reais",
    body: "Conecta ClickUp, Notion, Google Drive, Figma e as APIs das redes sociais. Deixa o KAI no centro, as ferramentas que voce ja usa nos satelites.",
    spec: "API first",
  },
  {
    code: "F.06",
    title: "IA que ajuda de verdade",
    body: "Copys, variacoes, reescrita por tom de voz, sugestoes de hook. Treinada nos materiais do seu cliente. Nao e wrapper de ChatGPT, e camada editorial.",
    spec: "Brain por cliente",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-ink bg-bone">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
              / 02 &middot; O que tem dentro
            </div>
            <h2 className="headline-kern mt-5 font-black text-5xl md:text-7xl lg:text-8xl">
              Seis pecas, <span className="serif-italic font-normal">um fluxo.</span>
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-muted">
            Tudo feito pra responder a pergunta mais chata do dia: &ldquo;e o
            post das quatro, saiu?&rdquo;
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink">
          {FEATURES.map((f) => (
            <article
              key={f.code}
              className="group relative p-6 md:p-8 flex flex-col gap-5 border-r border-b border-ink bg-paper hover:bg-ink hover:text-paper transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted group-hover:text-paper/60">
                  {f.code}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] border border-current px-2 py-1">
                  {f.spec}
                </span>
              </div>
              <h3 className="headline-kern text-3xl md:text-4xl font-black">
                {f.title}
              </h3>
              <p className="text-base leading-relaxed opacity-80">{f.body}</p>
              <div className="mt-auto pt-6 border-t border-current/20 font-mono text-[11px] uppercase tracking-[0.22em] flex items-center justify-between">
                <span>Saiba mais</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
