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
├── assets/content-factory.png  # Open Graph + hero (1717x916)
└── favicon.svg                 # Favicon SVG on-brand
```

## Design

- **Paleta:** paper `#ffffff`, ink `#111318`, blue `#1677ff`, cyan `#1fc7d4`, green `#9adf4b`, coral `#ff7a66`
- **Tipografia:** system sans (SF Pro / Inter) + mono (SF Mono / JetBrains Mono)
- **Mood:** editorial premium "content operating system", glassmorphism leve. Mobile-first.

## SEO

- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`
- JSON-LD `SoftwareApplication` + `Organization` no `layout.tsx`

## Deploy

⚠️ **Ainda não deployado.** Não existe projeto Vercel `kai-kreator`.
O domínio `kai.kaleidos.com.br` já é usado pelo app KAI (projeto `kai-app`),
então `metadataBase` (hoje aponta pra esse domínio) precisa ser revisto antes de subir.

1. `vercel link` (cria projeto novo) ou importa `gmadureiraa/kai-kreator-landing` na dashboard.
2. Sem env vars necessárias.
3. Definir domínio: sugestão `kreator.kaleidos.com.br` (evita conflito com o app KAI).
   Atualizar `siteUrl` em `layout.tsx`, `robots.ts` e `sitemap.ts` para o domínio final.

## Seções

1. **Hero** — headline + stats + CTA + marquee
2. **Pra quem** — 3 personas (agência, creator, gestor de pauta)
3. **Features** — 6 cards (pauta, briefings, aprovações, analytics, integrações, IA)
4. **Como funciona** — 4 passos
5. **Depoimentos** — 2 placeholders (editar quando tiver real)
6. **FAQ** — 5 perguntas
7. **CTA final + footer**

CTA principal: `mailto:ola@kaleidos.com.br` (trocar por form quando fizer sentido).
