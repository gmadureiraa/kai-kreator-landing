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
├── globals.css        # Design tokens + tipografia + utilitários brutalist
├── layout.tsx         # Metadata, fonts (Space Grotesk + Fraunces + JetBrains Mono)
└── page.tsx           # Compõe todas as seções

public/
├── og.svg             # Open Graph 1200x630
└── favicon.svg        # Favicon SVG on-brand
```

## Design

- **Paleta:** paper `#f5f3ee`, ink `#0a0a0a`, accent (verde ácido) `#c6ff3d`, hot (pink) `#ff3366`
- **Tipografia:** Space Grotesk (sans), Fraunces (serif italic para destaques), JetBrains Mono (code/labels)
- **Mood:** editorial brutalist, inspirado no portfólio do Gabriel. Mobile-first.

## Deploy

Ainda não deployado. Gabriel conecta o Vercel manualmente:

1. `vercel link` ou importa o repo `gmadureiraa/kai-kreator-landing` na dashboard.
2. Sem env vars necessárias.
3. Sugestão de domínio: `kai.kaleidos.com.br` ou `kreator.kaleidos.com.br`.

## Seções

1. **Hero** — headline + stats + CTA + marquee
2. **Pra quem** — 3 personas (agência, creator, gestor de pauta)
3. **Features** — 6 cards (pauta, briefings, aprovações, analytics, integrações, IA)
4. **Como funciona** — 4 passos
5. **Depoimentos** — 2 placeholders (editar quando tiver real)
6. **FAQ** — 5 perguntas
7. **CTA final + footer**

CTA principal: `mailto:ola@kaleidos.com.br` (trocar por form quando fizer sentido).
