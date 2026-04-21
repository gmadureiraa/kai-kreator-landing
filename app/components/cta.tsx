const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20conhecer%20o%20KAI%20Kreator&body=Oi%20Kaleidos%2C%20quero%20ver%20o%20KAI%20Kreator%20por%20dentro.";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-36 relative">
        <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-paper/60">
          / 06 &middot; Chegou aqui
        </div>
        <h2 className="headline-kern mt-6 font-black text-[13vw] md:text-[clamp(72px,10vw,192px)] leading-[0.9]">
          Para de{" "}
          <span className="serif-italic font-normal">terceirizar</span>
          <br />
          o caos.{" "}
          <span className="u-accent text-ink">Conversa</span> com
          <br />a gente.
        </h2>

        <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4 md:gap-6">
          <a
            href={CONTACT_HREF}
            className="group inline-flex items-center gap-3 h-14 md:h-16 px-6 md:px-8 bg-accent text-accent-ink font-mono text-xs md:text-sm uppercase tracking-[0.22em] border border-accent hover:bg-paper hover:border-paper transition-colors"
          >
            Entrar em contato
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
          <div className="font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-paper/60">
            Resposta em ate um dia util
          </div>
        </div>
      </div>
    </section>
  );
}
