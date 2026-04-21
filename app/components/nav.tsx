import Link from "next/link";

const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20conhecer%20o%20KAI%20Kreator";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur border-b border-ink/90">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            aria-hidden
            className="grid place-items-center w-7 h-7 border border-ink bg-ink text-paper font-mono text-[11px] font-bold tracking-tight group-hover:bg-accent group-hover:text-accent-ink transition-colors"
          >
            K
          </span>
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em]">
            KAI Kreator
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          <a href="#pra-quem" className="hover:text-hot">
            Pra quem
          </a>
          <a href="#features" className="hover:text-hot">
            Features
          </a>
          <a href="#fluxo" className="hover:text-hot">
            Fluxo
          </a>
          <a href="#faq" className="hover:text-hot">
            FAQ
          </a>
        </nav>

        <a
          href={CONTACT_HREF}
          className="inline-flex items-center gap-2 h-9 md:h-10 px-3 md:px-4 bg-ink text-paper font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] border border-ink hover:bg-accent hover:text-accent-ink transition-colors"
        >
          Entrar em contato
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </header>
  );
}
