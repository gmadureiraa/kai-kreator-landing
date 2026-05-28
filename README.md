# KAI Kreator — Landing

Landing page standalone do **KAI Kreator**, ferramenta editorial da Kaleidos.

## Stack
- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (config via `@theme` em `app/globals.css`)
- TypeScript
- Bun como package manager

## Rodar

```bash
bun install
bun run dev
# http://localhost:3000
```

Build:

```bash
bun run build
```

## Estrutura

```
app/
├── components/        # Seções da landing (Hero, Features, Flow, FAQ, etc.)
├── globals.css        # Design tokens (CSS vars + @theme Tailwind v4) + utilitários
├── layout.tsx         # Metadata, JSON-LD, fontes system
└── page.tsx           # Compõe todas as seções

public/
├── assets/content-factory.webp # Hero (1400x747, ~63KB — servido via next/image)
├── assets/og.jpg               # Open Graph / Twitter card (1200x630, ~129KB)
└── favicon.svg                 # Favicon SVG on-brand
```

## Design

- **Paleta:** paper `#ffffff`, ink `#111318`, blue `#1677ff`, cyan `#1fc7d4`, green `#9adf4b`, coral `#ff7a66`
- **Tipografia:** system sans (SF Pro / Inter) + mono (SF Mono / JetBrains Mono)
- **Mood:** editorial premium "content operating system", glassmorphism leve. Mobile-first.

## SEO

- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`
- JSON-LD `SoftwareApplication` + `Organization` no `layout.tsx`

## Analytics

PostHog ("Kaleidos Group", project token `phc_…`) com proxy `/ingest` pra
escapar de adblock. Setup:

- `instrumentation-client.ts` — init padrão Kaleidos (`site: "kreator"`).
- `app/components/posthog-page-view.tsx` — `$pageview` em cada navegação.
- `app/components/cta-tracker.tsx` — delegate global, captura `cta_click`
  pra todo elemento com `data-cta="<id>"` + opcional `data-cta-location`.
- Rewrites em `next.config.ts` mandam `/ingest/*` pro PostHog US.
- Env var: `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (já provisionada na Vercel
  prod). Local: copiar pra `.env.local`.

CTAs taggados: `hero_primary_demo`, `hero_secondary_watch_flow`,
`cta_final_primary_demo`, `cta_final_secondary_email`, `nav_contact`.

## Deploy

Projeto Vercel: `kai-kreator` (prj_YGINVk5h7lC569IDUA7vIW2EdCNq).
Prod: https://kai-kreator.vercel.app (alias `kreator.kaleidos.com.br`
aguarda DNS Hostinger).

1. `git push` dispara deploy automático.
2. Ou `vercel --prod` da raiz.

## Seções

1. **Hero** — headline + stats + CTA + marquee
2. **Pra quem** — 3 personas (agência, creator, gestor de pauta)
3. **Features** — 6 cards (pauta, briefings, aprovações, analytics, integrações, IA)
4. **Como funciona** — 4 passos
5. **Depoimentos** — 2 placeholders (editar quando tiver real)
6. **FAQ** — 5 perguntas
7. **CTA final + footer**

CTA principal: `mailto:ola@kaleidos.com.br` (trocar por form quando fizer sentido).
