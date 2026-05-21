# AUDIT — KAI Kreator Landing

- **URL produção:** https://kai.kaleidos.com.br (provável, validada via curl)
- **Stack:** Next.js 16.2.4 (App Router + Turbopack) · React 19.2.4 · Tailwind v4 · TypeScript 5
- **Package manager:** Bun
- **Data audit:** 2026-04-21

---

## 1. Build

- `bun run build` → exit 0. Compilou em **1.44s** (Turbopack), TypeScript 1.39s, 4 páginas estáticas em 194ms.
- Rotas geradas:
  - `○ /` (static prerender)
  - `○ /_not-found` (static)
- Apenas 2 rotas — landing pura de 1 página.
- **Zero warnings no build.** ✓
- Lint configurado: `"lint": "eslint"` no `package.json`, `eslint-config-next` instalado.

## 2. Deploy

- **Não linked ao Vercel CLI localmente** (`vercel env ls production` → "Your codebase isn't linked to a project").
- `curl -I https://kai.kaleidos.com.br` → HTTP/2 200, servido via **Cloudflare** (`cf-ray: 9eff212e7f540110-GRU`, `server: cloudflare`) com proxy pra Vercel por trás (`x-deployment-id`, `__dpl` cookie = Vercel).
- Headers: `cache-control: no-cache, must-revalidate, max-age=0`, HSTS 1 ano. `x-content-type-options: nosniff` e `Referrer-Policy: strict-origin-when-cross-origin` vindo do edge.
- Cloudflare injeta bot management cookies (`__cf_bm`) — proteção extra. ✓

## 3. Integrações

- **Nenhuma.** Landing pura, 100% estática, sem DB, sem form, sem API routes, sem auth.
- Apenas Google Fonts (Space Grotesk, Fraunces, JetBrains Mono) via `next/font` com `display: swap`. ✓
- Sem analytics (nem GA, nem Umami, nem Plausible). **Gap**: não dá pra medir conversão da landing.

## 4. Env Vars (production)

- Projeto **não linkado ao Vercel CLI localmente**.
- Nenhum arquivo `.env*` no projeto (não há necessidade — landing estática).
- Sem secrets a gerenciar. ✓

## 5. SEO

- Metadata excelente em `layout.tsx`:
  - `metadataBase`, title (default + template), description, applicationName, authors, 8 keywords, OG completo (image 1200x630 `/og.svg`), Twitter summary_large_image com `creator: @madureira`.
  - `robots: { index, follow, googleBot: { "max-image-preview": "large" } }`. ✓
  - `category: "technology"`.
- `lang="pt-BR"` + `hideSearch=false`. ✓
- **Gaps:**
  - Sem `app/sitemap.ts`.
  - Sem `app/robots.ts`.
  - OG é SVG (mesmo problema do Kaleidos Pay — Slack/WhatsApp podem não renderizar).
  - Canonical URL no metadata aponta `kai-kreator.kaleidos.com.br` (linha 24 do layout) mas o domínio real é `kai.kaleidos.com.br`. **Discrepância**: `metadataBase: new URL("https://kai-kreator.kaleidos.com.br")` vs URL real `kai.kaleidos.com.br`. Vai gerar OG URLs erradas.
  - Sem JSON-LD (Organization, SoftwareApplication).

## 6. Performance

- Build 1.44s (Turbopack) — ótimo.
- Rota `/` 100% static (prerender). ✓
- Next/font para 3 famílias — muitas famílias pode inflar. Verificar se todas 3 (Space Grotesk, Fraunces, JetBrains Mono) são usadas ou se `JetBrains_Mono` está morta no código.
- CSS custom em `globals.css` com design tokens brutalist (ink, paper, accent) via CSS vars + `@theme inline` do Tailwind v4.
- Sem imagens grandes em `/public` (apenas SVGs pequenos).
- Cloudflare na frente = compressão Brotli + HTTP/3 automático.
- Landing deveria ter FCP < 1s facilmente com essa stack.

## 7. Acessibilidade

- `lang="pt-BR"` ✓, `antialiased`, smooth fonts.
- **Zero matches de `alt=`** em componentes (nenhuma tag `<img>` ou `next/image` com alt detectada). Se tiver ícones via SVG inline, precisa `aria-hidden` ou `role="img"+aria-label`.
- shadcn/ui não instalado, mas componentes são custom (Nav, Hero, Personas, Features, Flow, Testimonials, Faq, Cta, Footer) — precisa audit manual de semântica (h1/h2/h3 hierarchy, nav landmarks, button vs link).
- Sem `prefers-reduced-motion` check no CSS (Flow component pode ter animações).
- Accent color `#c6ff3d` sobre `#0a0a0a` (accent sobre ink): contraste > 15:1, excelente.
- Accent sobre `#f5f3ee` (paper): contraste ~1.6:1, **FALHA WCAG AA** — se o accent for usado como texto em fundo paper, fica ilegível.

## 8. Segurança

- **Nada crítico** — landing estática sem formulários, sem API, sem auth.
- Headers de segurança herdados do Cloudflare (HSTS, Referrer-Policy, nosniff). ✓
- **Gap:** Sem `headers()` no `next.config.ts` — CSP, X-Frame-Options explícitos ficariam mais robustos.
- Sem CSP: risco só em caso de injeção indevida de script (baixo, pois não há conteúdo dinâmico).
- Sem rate limit / WAF explícito (Cloudflare ajuda).

## 9. UX

- Componentes bem divididos: Nav, Hero, Personas, Features, Flow, Testimonials, Faq, Cta, Footer — estrutura conversão clássica.
- Tipografia brutalist (Fraunces para títulos, Space Grotesk para corpo, JetBrains Mono provável para code/badges). Diferenciado.
- Paleta editorial (paper/ink + accent lima `#c6ff3d` + hot pink `#ff3366`) — personalidade forte. ✓
- `::selection` custom (bg accent, text ink). ✓
- **Gap de conversão:** nenhum form, nenhum CTA para captura de email/leads. Só há `<Cta>` (provavelmente externo/WhatsApp). Com landing estática 100%, não há como medir leads.
- Footer separado do `<main>` — boa estrutura semântica.
- Scrollo fluido via `html, body` reset.

## 10. Docs

- `README.md` default do Next.js (não customizado, presumivelmente).
- `CLAUDE.md` → `@AGENTS.md`. `AGENTS.md` é o boilerplate genérico do Next 16 ("leia docs do node_modules").
- Sem CHANGELOG, sem CONTRIBUTING.
- `components/` dentro de `app/` (App Router pattern) — ok.

---

## Prioridades

### P0 (bloqueante — fazer nas próximas 24h)
1. **Corrigir `metadataBase` no `layout.tsx`.** Está apontando para `kai-kreator.kaleidos.com.br` (linha 24), mas domínio real é `kai.kaleidos.com.br`. Todas as URLs OG/Twitter vão vazar o domínio errado pra crawlers e redes sociais.

### P1 (alto — próximos 7 dias)
2. Link o projeto local ao Vercel (`vercel link`) — sem isso, CI/CD manual e não dá pra auditar envs.
3. Adicionar analytics (Umami/Plausible/GA4) — sem medição é impossível iterar conversão.
4. Adicionar `app/sitemap.ts` + `app/robots.ts`.
5. Trocar OG `.svg` por PNG estático 1200x630.
6. Adicionar CTA de captura de email (waitlist KAI) — hoje a landing não captura nada.

### P2 (médio — próximo mês)
7. Auditar uso do accent `#c6ff3d` — se usado como cor de texto em fundo paper, tem falha de contraste WCAG AA.
8. `headers()` no `next.config.ts` para CSP + X-Frame-Options + Permissions-Policy explícitos.
9. JSON-LD SoftwareApplication + Organization.
10. Checar se todas as 3 fontes Google estão sendo usadas — se JetBrains Mono estiver dead, remover cuts ~40KB de network.
11. Adicionar screenshot/demo real do produto KAI (atualmente landing fala de editorial sem mostrar o app real).

---

## Top 5 Recomendações

1. **Corrigir `metadataBase`** (kai-kreator → kai) — bug de 1 caractere, impacto SEO/social direto.
2. **Instalar analytics** (Umami simples, 2min). Sem isso a landing é cega.
3. **Adicionar form de waitlist/contato** — a landing descreve o produto mas não captura nenhum lead. A virtude de ser 100% static deixa de ser virtude se não há conversão.
4. **Sitemap + robots + OG PNG** — trio obrigatório de higiene SEO.
5. **Linkar ao Vercel CLI** e ativar deploy previews + CI para cada branch. Projeto pequeno, mas processo vale pra todos os landings da Kaleidos.
