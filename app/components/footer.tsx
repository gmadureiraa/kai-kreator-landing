export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="section-shell py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-white"
            >
              K
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">KAI Kreator</div>
              <div className="text-xs font-medium text-muted">by Kaleidos</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-muted">
            <a href="mailto:ola@kaleidos.com.br" className="hover:text-ink">
              ola@kaleidos.com.br
            </a>
            <a
              href="https://kaleidos.com.br"
              className="hover:text-ink"
              target="_blank"
              rel="noreferrer noopener"
            >
              kaleidos.com.br
            </a>
            <a
              href="https://x.com/ogmadureira"
              className="hover:text-ink"
              target="_blank"
              rel="noreferrer noopener"
            >
              @ogmadureira
            </a>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-line pt-5 text-xs font-medium text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; {year} Kaleidos. Content operations with taste.</div>
          <div>Sao Paulo / Remote</div>
        </div>
      </div>
    </footer>
  );
}
