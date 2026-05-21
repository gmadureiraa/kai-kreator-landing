const METRICS = [
  { value: "1.2k+", label: "pecas organizadas por mes" },
  { value: "320", label: "aprovacoes por semana" },
  { value: "07", label: "clientes ativos no fluxo" },
];

const LOGS = [
  ["09:12", "Insight anexado ao cliente DEFIVERSO"],
  ["10:04", "Roteiro derivado para Reels e Shorts"],
  ["11:38", "Design enviado para aprovacao"],
  ["14:20", "Cliente comentou no frame 03"],
  ["16:45", "Post aprovado e agendado"],
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <div className="section-eyebrow">Operacao em tempo real</div>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Menos status meeting. Mais conteudo saindo.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            O KAI deixa visivel o que entrou, o que esta sendo produzido, quem
            precisa aprovar e quais aprendizados voltam para a pauta.
          </p>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div key={metric.label} className="rounded-[8px] border border-line bg-soft p-5">
                <div className="text-4xl font-semibold text-ink">{metric.value}</div>
                <div className="mt-2 text-sm leading-5 text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel overflow-hidden">
          <div className="border-b border-line bg-white/72 px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-ink">Live desk</div>
                <div className="mt-1 text-xs font-medium text-muted">
                  fila editorial sincronizada
                </div>
              </div>
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                <span className="h-2.5 w-2.5 rounded-full bg-green" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
              </div>
            </div>
          </div>
          <div className="divide-y divide-line">
            {LOGS.map(([time, log]) => (
              <div key={log} className="flex items-center gap-4 px-5 py-4">
                <span className="font-mono text-xs font-bold text-blue">{time}</span>
                <span className="text-sm font-medium text-graphite">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
