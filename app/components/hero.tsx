const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20conhecer%20o%20KAI%20Kreator&body=Oi%20Kaleidos%2C%20quero%20ver%20o%20KAI%20Kreator%20por%20dentro.";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-14 md:pt-24 pb-12 md:pb-20">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted">
          <span className="inline-block w-2.5 h-2.5 bg-accent border border-ink" aria-hidden />
          <span className="text-ink">Kaleidos.Labs</span>
          <span aria-hidden>/</span>
          <span>Editorial OS</span>
          <span aria-hidden>/</span>
          <span>v2.0</span>
        </div>

        {/* Headline */}
        <h1 className="headline-kern mt-8 md:mt-12 font-black text-[13vw] md:text-[clamp(64px,9vw,168px)]">
          Gestao <span className="serif-italic font-normal text-ink">editorial</span>
          <br />
          <span className="inline-block">feita por</span>{" "}
          <span className="u-accent">quem publica</span>
          <br />
          todo{" "}
          <span className="serif-italic font-normal">santo</span> dia.
        </h1>

        {/* Sub + CTA row */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-7">
            <p className="text-lg md:text-2xl max-w-[52ch] leading-snug">
              KAI Kreator e a plataforma que a{" "}
              <strong className="font-bold">Kaleidos</strong> usa pra tocar pauta,
              briefing, aprovacao e analytics de dezenas de clientes. Sem
              planilha esquisita, sem grupo de WhatsApp perdido, sem deadline
              furado.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_HREF}
                className="group inline-flex items-center gap-3 h-12 md:h-14 px-5 md:px-7 bg-ink text-paper font-mono text-xs md:text-sm uppercase tracking-[0.2em] border border-ink hover:bg-accent hover:text-accent-ink transition-colors"
              >
                Entrar em contato
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="#fluxo"
                className="inline-flex items-center gap-3 h-12 md:h-14 px-5 md:px-7 bg-transparent text-ink font-mono text-xs md:text-sm uppercase tracking-[0.2em] border border-ink hover:bg-ink hover:text-paper transition-colors"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          {/* Stat block */}
          <div className="md:col-span-5 border border-ink bg-paper-soft">
            <div className="grid grid-cols-2 divide-x divide-ink border-b border-ink">
              <div className="p-5 md:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Posts / mes
                </div>
                <div className="headline-kern mt-2 text-5xl md:text-6xl font-black">
                  1.2k+
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Clientes ativos
                </div>
                <div className="headline-kern mt-2 text-5xl md:text-6xl font-black">
                  07
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-ink">
              <div className="p-5 md:p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Aprovacoes / semana
                </div>
                <div className="headline-kern mt-2 text-5xl md:text-6xl font-black">
                  320
                </div>
              </div>
              <div className="p-5 md:p-6 bg-accent text-accent-ink">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Planilhas abertas
                </div>
                <div className="headline-kern mt-2 text-5xl md:text-6xl font-black">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="border-t border-ink bg-ink text-paper overflow-hidden">
        <div className="marquee-track py-3 md:py-4 font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, track) => (
            <div key={track} className="flex items-center gap-10 pr-10">
              {[
                "Pauta editorial",
                "\u2716",
                "Briefings",
                "\u2716",
                "Aprovacoes",
                "\u2716",
                "Analytics",
                "\u2716",
                "Integracoes",
                "\u2716",
                "Content ops",
                "\u2716",
                "Kaleidos OS",
                "\u2716",
              ].map((item, i) => (
                <span key={`${track}-${i}`} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
