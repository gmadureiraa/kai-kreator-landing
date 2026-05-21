import Link from "next/link";

const CONTACT_HREF =
  "mailto:ola@kaleidos.com.br?subject=Quero%20conhecer%20o%20KAI%20Kreator";

const LINKS = [
  { href: "#fabrica", label: "Fabrica" },
  { href: "#modulos", label: "Modulos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/78 backdrop-blur-2xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(17,19,24,0.18)] transition-transform group-hover:scale-105"
          >
            K
          </span>
          <span className="text-sm font-semibold text-ink">KAI Kreator</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CONTACT_HREF} className="button-secondary h-10 min-h-10 px-4 text-sm">
          Ver por dentro
          <span aria-hidden>&#8599;</span>
        </a>
      </div>
    </header>
  );
}
