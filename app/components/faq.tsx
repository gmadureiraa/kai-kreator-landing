const QUESTIONS = [
  {
    q: "O KAI Kreator e um produto SaaS aberto?",
    a: "Ainda nao. Hoje ele e uma ferramenta usada internamente pela Kaleidos e por um grupo pequeno de parceiros convidados. Se fizer sentido pra voce, fala com a gente que abrimos acesso manualmente.",
  },
  {
    q: "Preciso trocar todas as minhas ferramentas?",
    a: "Nao. O KAI se integra com o que voce ja usa (ClickUp, Notion, Drive, Figma, redes sociais). Ele resolve a camada editorial, deixando as outras ferramentas em funcoes mais especificas.",
  },
  {
    q: "Quem entra nas aprovacoes? Posso convidar o cliente?",
    a: "Sim. Aprovacao e via link publico ou convite direto. O cliente nao precisa de conta pra aprovar, comentar e pedir ajuste. Tudo fica registrado, datado e versionado.",
  },
  {
    q: "A IA que voces falam e um wrapper de ChatGPT?",
    a: "Nao. Cada cliente tem um brain proprio com tom de voz, pilares, referencias e historico do que ja foi publicado. As sugestoes saem treinadas nesse material, nao sao respostas genericas.",
  },
  {
    q: "Quanto custa?",
    a: "Cobramos por seat + cliente ativo. O valor depende do tamanho da operacao. Manda um email e a gente manda proposta em ate um dia util.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
            / 05 &middot; Perguntas que chegam
          </div>
          <h2 className="headline-kern mt-5 font-black text-5xl md:text-7xl">
            O que a <br />
            <span className="serif-italic font-normal">gente</span> ja
            <br />
            respondeu.
          </h2>
          <p className="mt-8 text-base text-muted max-w-sm">
            Se a sua pergunta nao estiver aqui, manda por email. A gente
            responde pessoalmente, nao tem bot.
          </p>
        </div>

        <div className="md:col-span-8">
          <div className="border-t border-ink">
            {QUESTIONS.map((item, i) => (
              <details
                key={i}
                className="group border-b border-ink py-6 md:py-7"
              >
                <summary className="list-none cursor-pointer flex items-start justify-between gap-6">
                  <span className="flex items-start gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted pt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="headline-kern text-2xl md:text-4xl font-black max-w-[30ch]">
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-2 font-mono text-xl transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-5 md:pl-14 text-base md:text-lg leading-relaxed text-ink/80 max-w-[60ch]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
