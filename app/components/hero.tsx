import Image from "next/image";

const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20conhecer%20o%20KAI%20Kreator&body=Oi%20Kaleidos%2C%20quero%20ver%20o%20KAI%20Kreator%20por%20dentro.";

const SIGNALS = ["ideia", "briefing", "copy", "visual", "aprovacao", "analytics"];

export function Hero() {
  return (
    <section className="hero-fade relative min-h-[70svh] overflow-hidden bg-white sm:min-h-[74svh] lg:min-h-[76svh]">
      <div className="absolute inset-x-0 bottom-[-3%] top-[36%] sm:top-[28%] lg:top-[18%]">
        <Image
          src="/assets/content-factory.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom opacity-95"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,rgba(255,255,255,0.9)_28%,rgba(255,255,255,0.18)_66%,#fff_100%)]" />

      <div className="section-shell relative z-10 pt-9 sm:pt-12 lg:pt-16">
        <div className="max-w-4xl">
          <div className="section-eyebrow">Kaleidos content operating system</div>
          <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
            KAI Kreator
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-graphite sm:text-2xl sm:leading-9">
            A fabrica editorial que transforma ideias soltas em conteudo
            publicado, aprovado e mensurado sem perder o pulso criativo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={CONTACT_HREF} className="button-primary">
              Ver a fabrica
              <span aria-hidden>&rarr;</span>
            </a>
            <a href="#fabrica" className="button-secondary">
              Assistir o fluxo
              <span aria-hidden>&darr;</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex max-w-3xl flex-wrap gap-2 pb-10 sm:pb-12">
          {SIGNALS.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-line bg-white/76 px-3 py-1.5 text-xs font-semibold uppercase text-muted shadow-[0_10px_28px_rgba(30,45,70,0.07)] backdrop-blur-xl"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
