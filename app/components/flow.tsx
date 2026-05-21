"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const INPUTS = [
  {
    label: "Insight",
    detail: "sinal capturado",
    color: "#1677ff",
    startX: -270,
    startY: -170,
    rotate: -10,
    start: 0.02,
  },
  {
    label: "Briefing",
    detail: "contexto + voz",
    color: "#9adf4b",
    startX: 260,
    startY: -185,
    rotate: 8,
    start: 0.08,
  },
  {
    label: "Roteiro",
    detail: "estrutura narrativa",
    color: "#ff7a66",
    startX: -250,
    startY: 20,
    rotate: 7,
    start: 0.14,
  },
  {
    label: "Design",
    detail: "visual system",
    color: "#1fc7d4",
    startX: 270,
    startY: 40,
    rotate: -7,
    start: 0.19,
  },
  {
    label: "Aprovacao",
    detail: "feedback limpo",
    color: "#8d7dff",
    startX: -215,
    startY: 195,
    rotate: -5,
    start: 0.24,
  },
  {
    label: "Metricas",
    detail: "aprendizado",
    color: "#111318",
    startX: 225,
    startY: 190,
    rotate: 6,
    start: 0.3,
  },
];

const OUTPUTS = [
  {
    title: "Post aprovado",
    meta: "pronto para sair",
    color: "#9adf4b",
    endX: -205,
    endY: -125,
    rotate: -5,
    start: 0.56,
  },
  {
    title: "Roteiro vertical",
    meta: "video + legenda",
    color: "#1677ff",
    endX: 210,
    endY: -120,
    rotate: 5,
    start: 0.62,
  },
  {
    title: "Carrossel",
    meta: "7 telas derivadas",
    color: "#ff7a66",
    endX: -198,
    endY: 128,
    rotate: 4,
    start: 0.69,
  },
  {
    title: "Relatorio",
    meta: "insight para pauta",
    color: "#1fc7d4",
    endX: 205,
    endY: 135,
    rotate: -4,
    start: 0.75,
  },
];

const PHASES = [
  {
    at: 0,
    label: "01 / entrada",
    title: "Tudo comeca disperso.",
    body: "Ideias, referencias e pedidos chegam de varios lugares. O KAI transforma esse material em materia-prima utilizavel.",
  },
  {
    at: 0.28,
    label: "02 / montagem",
    title: "As pecas encontram o centro.",
    body: "Briefing, roteiro, visual e aprovacao passam pelo mesmo nucleo editorial, com contexto preservado.",
  },
  {
    at: 0.56,
    label: "03 / producao",
    title: "A fabrica trabalha em camadas.",
    body: "Cada formato nasce conectado ao objetivo original, sem perder decisao, dono ou proxima acao.",
  },
  {
    at: 0.78,
    label: "04 / saida",
    title: "Conteudo sai pronto para circular.",
    body: "Publicacao, aprovacao e performance fecham o ciclo e voltam como aprendizado para a proxima pauta.",
  },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function easeOut(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInOut(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

export function Flow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section) {
      return;
    }

    if (reduceMotion.matches) {
      const reducedFrame = window.requestAnimationFrame(() => setProgress(0.86));
      return () => window.cancelAnimationFrame(reducedFrame);
    }

    let frame = 0;
    let latest = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = clamp(-rect.top / scrollable);

      if (Math.abs(nextProgress - latest) > 0.002) {
        latest = nextProgress;
        setProgress(nextProgress);
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const phase = useMemo(() => {
    return PHASES.reduce((current, item) => {
      return progress >= item.at ? item : current;
    }, PHASES[0]);
  }, [progress]);

  const progressPercent = Math.round(progress * 100);
  const beamProgress = easeOut(clamp((progress - 0.18) / 0.72));

  return (
    <section id="fabrica" ref={sectionRef} className="relative h-[360vh] bg-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-14 sm:py-20">
        <div className="section-shell grid w-full gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">
          <div className="relative z-10 max-w-xl">
            <div className="section-eyebrow">Scroll para montar</div>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink sm:mt-5 sm:text-5xl lg:text-6xl">
              A fabrica de conteudo acontecendo diante dos olhos.
            </h2>

            <div className="mt-5 glass-panel p-4 sm:mt-8 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold uppercase text-blue">
                  {phase.label}
                </span>
                <span className="font-mono text-xs font-bold text-muted">
                  {progressPercent}%
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-ink sm:mt-4 sm:text-2xl">
                {phase.title}
              </h3>
              <p className="mt-3 hidden text-base leading-7 text-muted sm:block">
                {phase.body}
              </p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,var(--blue),var(--cyan),var(--green),var(--coral))]"
                  style={{ width: `${Math.max(progressPercent, 4)}%` }}
                />
              </div>
            </div>
          </div>

          <div
            className="factory-grid relative min-h-[340px] overflow-hidden rounded-[8px] border border-line bg-white shadow-[0_32px_110px_rgba(24,38,62,0.12)] sm:min-h-[590px]"
            aria-label="Animacao de pecas de conteudo se juntando em um nucleo editorial"
          >
            <div
              className="absolute left-1/2 top-1/2 h-px origin-left bg-[linear-gradient(90deg,rgba(22,119,255,0.65),rgba(31,199,212,0.2),transparent)]"
              style={{
                width: `${160 + beamProgress * 310}px`,
                transform: "translateY(-50%) rotate(-24deg)",
                opacity: 0.25 + beamProgress * 0.35,
              }}
            />
            <div
              className="absolute right-1/2 top-1/2 h-px origin-right bg-[linear-gradient(270deg,rgba(154,223,75,0.7),rgba(255,122,102,0.22),transparent)]"
              style={{
                width: `${140 + beamProgress * 280}px`,
                transform: "translateY(-50%) rotate(22deg)",
                opacity: 0.24 + beamProgress * 0.36,
              }}
            />

            <div
              className="factory-core-glow absolute left-1/2 top-1/2 grid h-44 w-44 place-items-center rounded-full border border-line-strong shadow-[0_24px_80px_rgba(22,119,255,0.16)]"
              style={{
                transform: `translate(-50%, -50%) scale(${0.94 + beamProgress * 0.08})`,
              }}
            >
              <div className="orbit-spin absolute h-56 w-56 rounded-full border border-dashed border-blue/30" />
              <div className="orbit-spin absolute h-36 w-36 rounded-full border border-line-strong [animation-direction:reverse]" />
              <div className="pulse-soft h-20 w-20 rounded-full bg-[radial-gradient(circle,var(--blue),var(--cyan)_48%,rgba(255,255,255,0.6)_49%)] shadow-[0_0_42px_rgba(31,199,212,0.45)]" />
              <div className="absolute bottom-8 font-mono text-[10px] font-bold uppercase text-muted">
                KAI core
              </div>
            </div>

            <div
              className="scan-line pointer-events-none absolute left-[14%] right-[14%] top-1/2 h-28 rounded-full bg-[linear-gradient(180deg,transparent,rgba(22,119,255,0.12),transparent)] blur-sm"
              aria-hidden
            />

            {INPUTS.map((item) => {
              const join = easeInOut(clamp((progress - item.start) / 0.42));
              const exit = easeOut(clamp((progress - 0.55) / 0.18));
              const x = item.startX * (1 - join);
              const y = item.startY * (1 - join);
              const rotate = item.rotate * (1 - join);
              const scale = 0.9 + join * 0.12 - exit * 0.2;
              const opacity = clamp(1 - exit);

              return (
                <div
                  key={item.label}
                  className="absolute left-1/2 top-1/2 w-[164px] rounded-[8px] border bg-white/82 p-4 shadow-[0_18px_48px_rgba(27,41,66,0.13)] backdrop-blur-xl"
                  style={{
                    borderColor: `${item.color}55`,
                    opacity,
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-muted">{item.detail}</div>
                </div>
              );
            })}

            {OUTPUTS.map((item) => {
              const reveal = easeOut(clamp((progress - item.start) / 0.2));
              const x = item.endX * reveal;
              const y = item.endY * reveal;
              const scale = 0.76 + reveal * 0.24;

              return (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2 w-[178px] rounded-[8px] border bg-white p-4 shadow-[0_20px_58px_rgba(23,37,62,0.14)]"
                  style={{
                    borderColor: `${item.color}66`,
                    opacity: reveal,
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${item.rotate * reveal}deg) scale(${scale})`,
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-ink">{item.title}</span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-line">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${64 + reveal * 28}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                  <div className="mt-3 text-xs font-medium text-muted">{item.meta}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
