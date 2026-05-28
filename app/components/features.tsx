import Image from "next/image";

const FEATURES = [
  {
    step: "01",
    title: "Radar de ideias",
    body: "Captura sinais, referencias e temas recorrentes para alimentar a pauta antes da reuniao comecar.",
    accent: "bg-blue",
    image: "/assets/generated/feat1-radar.webp",
    imageAlt: "Ilustracao isometrica de um radar editorial captando sinais soltos",
  },
  {
    step: "02",
    title: "Briefing vivo",
    body: "Tom de voz, objetivo, contexto, assets e historico de decisao no mesmo lugar que a equipe produz.",
    accent: "bg-green",
    image: "/assets/generated/feat2-briefing.webp",
    imageAlt: "Documento central com contexto, voz e historico orbitando ao redor",
  },
  {
    step: "03",
    title: "Linha criativa",
    body: "Copy, roteiro, design e formatos derivados conectados como pecas de uma mesma ideia.",
    accent: "bg-coral",
    image: "/assets/generated/feat3-linha.webp",
    imageAlt: "Fita criativa conectando copy, imagem e video derivados da mesma ideia",
  },
  {
    step: "04",
    title: "Aprovacao limpa",
    body: "Cliente comenta, aprova e pede ajuste sem transformar feedback em print perdido.",
    accent: "bg-cyan",
    image: "/assets/generated/feat4-aprovacao.webp",
    imageAlt: "Selo de aprovacao flutuando sobre uma linha de comentario calma",
  },
  {
    step: "05",
    title: "Publicacao assistida",
    body: "Calendario, cadencia, responsaveis e status de cada canal com visao de gargalos.",
    accent: "bg-violet",
    image: "/assets/generated/feat5-publicacao.webp",
    imageAlt: "Calendario editorial com cadencia, canais e status visiveis",
  },
  {
    step: "06",
    title: "Aprendizado continuo",
    body: "Performance volta para a biblioteca de insights e melhora o proximo ciclo de producao.",
    accent: "bg-ink",
    image: "/assets/generated/feat6-aprendizado.webp",
    imageAlt: "Loop continuo de metricas voltando para a biblioteca de insights",
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
              className="group relative flex flex-col overflow-hidden rounded-[8px] border border-line bg-white shadow-[0_20px_70px_rgba(38,56,86,0.07)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute left-0 top-0 z-10 h-1 w-full ${feature.accent}`}
                aria-hidden
              />
              <div className="relative aspect-square w-full overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f9fbff_100%)]">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-muted">
                    {feature.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-current text-line-strong transition-colors group-hover:text-blue" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
