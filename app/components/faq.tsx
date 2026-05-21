const QUESTIONS = [
  {
    q: "O KAI Kreator ja esta aberto para qualquer empresa?",
    a: "Hoje ele funciona como uma ferramenta da Kaleidos e de parceiros selecionados. A conversa inicial serve para entender se a operacao combina com o fluxo atual.",
  },
  {
    q: "Ele substitui Notion, ClickUp, Drive ou Figma?",
    a: "Nao precisa. O KAI organiza a camada editorial e conversa com as ferramentas que o time ja usa para arquivo, design, tarefa e publicacao.",
  },
  {
    q: "A experiencia de aprovacao e para cliente tambem?",
    a: "Sim. O cliente pode aprovar, comentar e pedir ajustes em um link simples, sem transformar feedback em conversa espalhada.",
  },
  {
    q: "Onde entra a IA?",
    a: "A IA ajuda a gerar variacoes, estruturar briefing, adaptar tom de voz e encontrar aprendizados. Ela trabalha em cima do contexto editorial, nao como resposta solta.",
  },
  {
    q: "Quanto custa?",
    a: "O modelo depende de seats, clientes ativos e nivel de implantacao. Depois do diagnostico, a proposta vai com escopo e proximos passos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-soft py-16 sm:py-20 lg:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <div className="section-eyebrow">Perguntas frequentes</div>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            O que vale saber antes de entrar na fabrica.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-muted">
            A landing mostra a visao. A conversa mostra como isso encaixa na
            rotina real do seu time.
          </p>
        </div>

        <div className="rounded-[8px] border border-line bg-white">
          {QUESTIONS.map((item, index) => (
            <details key={item.q} className="group border-b border-line last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7">
                <span className="flex items-start gap-4">
                  <span className="pt-1 font-mono text-xs font-bold text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold leading-7 text-ink">
                    {item.q}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-lg text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-6 pl-14 text-base leading-7 text-muted sm:px-7 sm:pl-[4.5rem]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
