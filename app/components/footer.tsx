export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid place-items-center w-8 h-8 border border-ink bg-ink text-paper font-mono text-xs font-bold"
            >
              K
            </span>
            <div className="font-mono text-xs uppercase tracking-[0.22em]">
              KAI Kreator <span className="text-muted">/ by Kaleidos</span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-5 md:gap-8 font-mono text-[11px] uppercase tracking-[0.22em]">
            <a
              href="mailto:ola@kaleidos.com.br"
              className="hover:text-hot"
            >
              ola@kaleidos.com.br
            </a>
            <a
              href="https://kaleidos.com.br"
              className="hover:text-hot"
              target="_blank"
              rel="noreferrer noopener"
            >
              kaleidos.com.br
            </a>
            <a
              href="https://twitter.com/madureira"
              className="hover:text-hot"
              target="_blank"
              rel="noreferrer noopener"
            >
              @madureira
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-ink/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <div>
            &copy; {year} Kaleidos. Feito no fim de semana &mdash; como a
            maioria das coisas boas.
          </div>
          <div>Sao Paulo / Remote</div>
        </div>
      </div>
    </footer>
  );
}
