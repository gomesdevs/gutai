# GUTAI — Roadmap Detalhado do MVP (Fase 1)

> **Objetivo:** provar a tese do GUTAI com uma experiência emocional completa — home cinematográfica, 1 drop curado, PDP editorial e checkout funcional — sem feature creep das Fases 2 e 3.

**Referência:** [README](../README.md) · **Stack atual:** Next.js 16 · React 19 · Tailwind CSS 4 · Lenis · GSAP · R3F/Three.js · Stripe.js

---

## Sumário

1. [Escopo e limites](#1-escopo-e-limites)
2. [Critérios de sucesso](#2-critérios-de-sucesso)
3. [Arquitetura proposta](#3-arquitetura-proposta)
4. [Roadmap por marcos](#4-roadmap-por-marcos)
5. [Detalhamento por área](#5-detalhamento-por-área)
6. [Conteúdo e dados do drop](#6-conteúdo-e-dados-do-drop)
7. [Performance e acessibilidade](#7-performance-e-acessibilidade)
8. [Fora do MVP (explícito)](#8-fora-do-mvp-explícito)
9. [Estado atual vs. pendente](#9-estado-atual-vs-pendente)
10. [Checklist de entrega final](#10-checklist-de-entrega-final)

---

## 1. Escopo e limites

### Dentro do MVP

| Área | Entrega |
|------|---------|
| **Home** | Scroll-telling cinematográfico + manifesto + seção do drop ativo |
| **Drop** | 1 drop com 5–10 peças (dados estáticos ou CMS leve) |
| **Catálogo do drop** | Listagem editorial do drop — não grid de supermercado |
| **PDP** | Modo **Editorial** apenas (imagens/vídeo + copy poético + specs) |
| **Carrinho** | Drawer ou página dark, clara, sem pop-ups promocionais |
| **Checkout** | Stripe Checkout ou Payment Element com skin custom |
| **Design system** | Tokens, tipografia gótica + mono, componentes base |
| **Navegação** | Menu oculto/radial mínimo — sem The Vault 3D |
| **Mobile** | Versão reduzida mas atmosférica |
| **Modo degradado** | Fallbacks documentados e funcionais |

### Fora do MVP (Fases 2 e 3)

Ghost Mannequin 360º · The Vault / Echoes · Countdown funcional com ASCII · Cursor customizado · Transições ASCII/Glitch · ASMR opt-in · Membership completo · Ambientes 3D de transição · Raio-X/Detalhe na PDP

---

## 2. Critérios de sucesso

### North Star (MVP)

| Métrica | Meta inicial (portfólio) | Como medir |
|---------|--------------------------|------------|
| Tempo na home | > 45s mediana | Vercel Analytics / Plausible |
| Scroll depth home | > 60% dos visitantes chegam à seção do drop | Event tracking |
| PDP → carrinho | Fluxo completo sem abandono por confusão | Testes manuais + analytics |
| Checkout concluído | Pagamento teste Stripe funcional | Stripe test mode |

### Definition of Done (global)

- [ ] Build de produção sem erros (`npm run build`)
- [ ] Lighthouse Performance ≥ 75 (mobile) / ≥ 85 (desktop) na home e PDP
- [ ] `prefers-reduced-motion` respeitado em todas as animações
- [ ] Fluxo completo: home → produto → carrinho → checkout → confirmação
- [ ] Copy poético + nomenclatura híbrida em todas as superfícies de produto
- [ ] Zero pop-ups de desconto, zero UI genérica de e-commerce

---

## 3. Arquitetura proposta

### Estrutura de pastas (alvo)

```
src/
├── app/
│   ├── layout.tsx              # Root layout + providers (Lenis, fonts)
│   ├── page.tsx                # Home scroll-telling
│   ├── drop/
│   │   └── [slug]/
│   │       └── page.tsx        # Listagem editorial do drop
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx        # PDP Editorial
│   ├── cart/
│   │   └── page.tsx            # Carrinho (ou drawer global)
│   ├── checkout/
│   │   ├── page.tsx            # Checkout
│   │   └── success/
│   │       └── page.tsx        # Confirmação pós-pagamento
│   └── api/
│       └── checkout/
│           └── route.ts        # Stripe session / intent
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Menu oculto/radial
│   │   ├── Footer.tsx
│   │   └── SmoothScroll.tsx    # Lenis wrapper
│   ├── home/
│   │   ├── HeroManifesto.tsx
│   │   ├── EditorialSection.tsx
│   │   ├── DropPreview.tsx
│   │   └── ScrollProgress.tsx
│   ├── product/
│   │   ├── ProductCard.tsx     # Card editorial (não grid genérico)
│   │   ├── ProductGallery.tsx  # Modo editorial
│   │   ├── ProductSpecs.tsx    # Ficha técnica / laboratório
│   │   └── AddToCart.tsx
│   ├── cart/
│   │   ├── CartDrawer.tsx
│   │   └── CartSummary.tsx
│   └── ui/
│       ├── Button.tsx          # Hardware / prata maciça
│       ├── Badge.tsx
│       └── NoiseOverlay.tsx
├── lib/
│   ├── constants.ts            # ✅ já existe
│   ├── utils.ts
│   ├── stripe.ts
│   └── products.ts             # Dados do drop (estáticos no MVP)
├── hooks/
│   ├── useCart.ts
│   ├── useReducedMotion.ts
│   └── useScrollProgress.ts
├── styles/
│   └── tokens.css              # Cores, ruído, sombras
└── types/
    └── index.ts                # ✅ já existe
```

### Stack por responsabilidade

| Necessidade | Lib | Notas MVP |
|-------------|-----|-----------|
| Framework | Next.js 16 App Router | SSG para produtos; API route para Stripe |
| Estilo | Tailwind CSS 4 | Tokens dark + texturas via CSS |
| Scroll luxuoso | Lenis | Desativar se `prefers-reduced-motion` |
| Animações | GSAP + ScrollTrigger | Parallax leve na home; sem overload |
| 3D (mínimo) | R3F + drei | **Opcional no MVP:** spotlight reativo na hero ou PDP — não Vault 3D |
| Pagamentos | `@stripe/stripe-js` + Stripe API | Test mode; Payment Element skinned |
| Estado carrinho | React Context ou Zustand | Persistência em `localStorage` |
| Dados | JSON/TS estático em `lib/products.ts` | Sem CMS no MVP |

---

## 4. Roadmap por marcos

Estimativa total: **6–8 semanas** (solo, part-time) ou **3–4 semanas** (full-time).

```
Marco 0 ──► Marco 1 ──► Marco 2 ──► Marco 3 ──► Marco 4 ──► Marco 5
Foundation   Home         Drop + PDP    Cart         Checkout     Polish
(3–5 dias)   (1–1.5 sem)  (1–1.5 sem)   (3–5 dias)   (3–5 dias)   (3–5 dias)
```

---

### Marco 0 — Foundation (3–5 dias)

**Objetivo:** design system e infraestrutura base antes de construir páginas.

#### Tarefas

- [ ] **M0.1** Definir design tokens em `globals.css` / `tokens.css`
  - Pretos com ruído (`#0a0a0a`, `#141010`, `#1a1a1a`)
  - Prata/cromo (`#c0c0c0`, `#8a8a8a`)
  - Bordas grossas, sombras direcionais
  - Variáveis `--font-gothic` e `--font-mono` (carregar fontes no `layout.tsx`)
- [ ] **M0.2** Componentes UI base: `Button`, `Badge`, `NoiseOverlay`
- [ ] **M0.3** Provider Lenis em `SmoothScroll.tsx` com kill switch para reduced motion
- [ ] **M0.4** Hook `useReducedMotion`
- [ ] **M0.5** Navigation oculta (hamburger brutalista ou radial simples) + Footer extraído
- [ ] **M0.6** Popular `lib/products.ts` com schema alinhado a `types/index.ts`

#### Entregável

Layout root funcional, tokens aplicados, navegação mínima, 5–10 produtos mock no código.

#### Critério de aceite

- Página placeholder usa tokens e fontes corretas
- Lenis funciona no desktop; scroll nativo no reduced motion
- Navegação abre/fecha com animação sutil

---

### Marco 1 — Home cinematográfica (1–1.5 semanas)

**Objetivo:** a home como capa de revista — manifesto + narrativa scroll-telling + preview do drop.

#### Seções da home (ordem de scroll)

1. **Hero / Manifesto** — tela cheia, copy poético, scroll indicator  
   *(parcialmente implementado em `src/app/page.tsx`)*
2. **Editorial strip** — 1–2 imagens/vídeos full-bleed com parallax GSAP
3. **Narrativa do drop** — título do drop, descrição, data, CTA "Entrar no Cofre"
4. **Peças em destaque** — 2–3 produtos featured integrados à narrativa (não grid 4×N)
5. **Marcas** — strip horizontal ou lista tipográfica (não grid de cards vazios)
6. **Footer**

#### Tarefas

- [ ] **M1.1** Extrair `HeroManifesto.tsx` do `page.tsx` atual
- [ ] **M1.2** Implementar `EditorialSection` com vídeo ou imagem otimizada (`next/image`, `next/video` se disponível)
- [ ] **M1.3** GSAP ScrollTrigger: fade/slide entre seções; parallax leve em imagens
- [ ] **M1.4** `DropPreview` com link para `/drop/[slug]`
- [ ] **M1.5** Substituir grid de marcas vazio por tipografia ou logos tipográficos
- [ ] **M1.6** Countdown **estático/placeholder** (visual LED — funcionalidade real fica Fase 2)
- [ ] **M1.7** Scroll progress indicator discreto (barra ou contador mono)
- [ ] **M1.8** Versão mobile: seções empilhadas, animações reduzidas, vídeo substituído por imagem

#### Entregável

Home deployável que conta uma história do drop sem listar catálogo completo.

#### Critério de aceite

- Usuário entende o conceito GUTAI em < 10s (manifesto visível)
- Scroll fluido com Lenis (desktop)
- CTA claro leva ao drop
- Sem grid de supermercado

---

### Marco 2 — Drop + PDP Editorial (1–1.5 semanas)

**Objetivo:** navegar o drop e ver cada peça como vitrine editorial.

#### Página do Drop — `/drop/[slug]`

- Header editorial: nome do drop, descrição poética, data
- Listagem assimétrica: cards grandes alternados (magazine layout)
- Filtro por categoria híbrida opcional (tabs: Skins, Shells, etc.)
- Cada card: imagem editorial, nome poético, marca, preço visível

#### PDP — `/product/[slug]`

| Bloco | Conteúdo |
|-------|----------|
| Galeria | Imagens editorial full-width; swipe no mobile |
| Título | Nome poético + microcopy funcional |
| Preço | Claro, sem ambiguidade |
| Descrição | Copy poético / ficha de laboratório |
| Specs | Materiais, peso, origem, construção |
| CTA | "Adicionar ao Cofre" / "Acquire" — botão hardware |
| Meta | Marca, drop, categoria híbrida |

#### Tarefas

- [ ] **M2.1** Rota dinâmica `/drop/[slug]` com dados de `lib/products.ts`
- [ ] **M2.2** `ProductCard` editorial (layout assimétrico)
- [ ] **M2.3** Rota `/product/[slug]` com `generateStaticParams`
- [ ] **M2.4** `ProductGallery` — carrossel ou stack vertical editorial
- [ ] **M2.5** `ProductSpecs` — tabela mono estilo ficha técnica
- [ ] **M2.6** Seletor de tamanho (se aplicável) — UI clara
- [ ] **M2.7** Metadata SEO por produto (`title`, `description`, OG image)
- [ ] **M2.8** Breadcrumb mínimo ou link "← Drop COFRE DIGITAL" (não breadcrumb genérico)

#### Entregável

5–10 produtos navegáveis com PDP memorável.

#### Critério de aceite

- Layout PDP não parece Shopify
- Preço e CTA visíveis above the fold (mobile)
- Imagens com lazy load e placeholders blur
- Copy usa nomenclatura híbrida

---

### Marco 3 — Carrinho (3–5 dias)

**Objetivo:** adicionar peças e revisar pedido mantendo atmosfera dark.

#### Decisão de UX

| Opção | Recomendação MVP |
|-------|------------------|
| Drawer lateral | ✅ Preferível — mantém contexto |
| Página dedicada `/cart` | ✅ Complementar para mobile |

#### Tarefas

- [ ] **M3.1** Context/hook `useCart` com persistência `localStorage`
- [ ] **M3.2** `CartDrawer` — slide-in dark, bordas grossas
- [ ] **M3.3** Item: thumbnail, nome, tamanho, preço, remover
- [ ] **M3.4** Subtotal claro; sem campos de cupom/desconto
- [ ] **M3.5** CTA "Proceed to Checkout" sempre visível
- [ ] **M3.6** Estado vazio poético ("O cofre está vazio.")
- [ ] **M3.7** Badge no ícone do carrinho na navegação

#### Entregável

Fluxo adicionar → revisar carrinho funcional.

#### Critério de aceite

- Carrinho persiste após refresh
- Quantidade fixa em 1 por peça (luxo — sem stepper agressivo) ou stepper minimal
- Zero pop-ups promocionais

---

### Marco 4 — Checkout Stripe (3–5 dias)

**Objetivo:** pagamento real em test mode com UI custom dark.

#### Abordagem recomendada (MVP)

**Stripe Checkout Session** (hosted, skinned via branding) **ou** **Payment Element** embedado em página custom.

| Abordagem | Prós | Contras |
|-----------|------|---------|
| Checkout Session | Rápido, PCI compliant, menos código | Menos controle visual |
| Payment Element | UI 100% custom no site | Mais código, mais testes |

**Recomendação MVP:** começar com **Checkout Session**; migrar para Payment Element se o visual hosted não passar no critério estético.

#### Tarefas

- [ ] **M4.1** Conta Stripe + produtos/prices em test mode
- [ ] **M4.2** API route `POST /api/checkout` — cria session a partir do carrinho
- [ ] **M4.3** Página `/checkout` — resumo do pedido + redirect ou embed
- [ ] **M4.4** Página `/checkout/success` — confirmação poética + número do pedido
- [ ] **M4.5** Página `/checkout/cancel` — retorno elegante ao carrinho
- [ ] **M4.6** Variáveis de ambiente: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] **M4.7** Webhook básico (opcional MVP): `checkout.session.completed` → log/email

#### Fluxo

```
Carrinho → POST /api/checkout → Stripe → /checkout/success
```

#### Entregável

Pagamento teste concluído com cartão `4242 4242 4242 4242`.

#### Critério de aceite

- Preço final visível antes do redirect
- Fluxo de 3 cliques máximo do carrinho ao pagamento
- Página de sucesso mantém tom GUTAI
- **Clareza na transação** — sem mistério na hora de pagar

---

### Marco 5 — Polish, performance e deploy (3–5 dias)

**Objetivo:** fechar lacunas, otimizar, documentar modos degradados, deploy.

#### Tarefas

- [ ] **M5.1** Audit Lighthouse (home, drop, PDP, checkout)
- [ ] **M5.2** Otimizar imagens: WebP/AVIF, sizes corretos, priority na hero
- [ ] **M5.3** Fallback sem JS: conteúdo legível, CTAs como links normais
- [ ] **M5.4** Fallback sem WebGL: nenhuma dependência crítica de 3D no MVP
- [ ] **M5.5** `loading.tsx` e `error.tsx` por rota — estética dark
- [ ] **M5.6** Favicon e OG images custom
- [ ] **M5.7** Deploy Vercel + env vars Stripe
- [ ] **M5.8** Documentar modos degradados em `docs/degraded-mode.md` (opcional)
- [ ] **M5.9** Passagem final de copy em todas as páginas
- [ ] **M5.10** Teste E2E manual do fluxo completo (desktop + mobile)

#### Entregável

MVP em produção, performático, coerente com o briefing.

---

## 5. Detalhamento por área

### 5.1 Design system (tokens mínimos)

```css
/* Referência — implementar em globals.css */
--color-void: #0a0a0a;
--color-surface: #141010;
--color-border: #1a1a1a;
--color-silver: #c0c0c0;
--color-muted: #8a8a8a;
--color-text: #e8e8e8;

--shadow-spot: 0 0 80px rgba(192, 192, 192, 0.08);
--border-heavy: 2px solid var(--color-border);

--font-gothic: /* UnifrakturMaguntia, Cinzel, ou similar */;
--font-mono: var(--font-geist-mono);
```

### 5.2 Navegação (MVP)

Estado atual: inexistente como componente.

**MVP mínimo:**

- Ícone fixo (canto superior) abre overlay dark
- Links: Home · Drop Ativo · (Carrinho)
- Sem The Vault, sem membership, sem busca

### 5.3 Animações permitidas no MVP

| Animação | Onde | Lib |
|----------|------|-----|
| Scroll suave | Global | Lenis |
| Fade/slide seções | Home | GSAP ScrollTrigger |
| Parallax leve | Imagens editoriais | GSAP |
| Hover borda/sombra | Cards, botões | CSS |
| Pulse scroll indicator | Hero | CSS |

**Não no MVP:** ASCII glitch, cursor custom, ASMR, 3D Vault.

### 5.4 Copy — templates

**Manifesto (home):**
> Artefatos para quem entende peso.  
> Se você sabe, você sabe.

**CTA produto:**
> Adicionar ao Cofre

**Carrinho vazio:**
> O cofre está vazio. O peso espera.

**Checkout success:**
> Artefato secured. Welcome to the club.

---

## 6. Conteúdo e dados do drop

### Drop MVP sugerido

| Campo | Valor exemplo |
|-------|---------------|
| `id` | `cofre-digital-01` |
| `name` | COFRE DIGITAL |
| `slug` | `cofre-digital-01` |
| `launchDate` | Data definida pelo autor |
| `description` | Copy poético do drop |
| `products` | 5–10 peças |

### Mix de categorias (5–10 peças)

| Categoria híbrida | Qtd sugerida |
|-------------------|--------------|
| Skins / Upper Layers | 2 |
| Shells / Armor | 2 |
| Lower Constructs | 1–2 |
| Groundwear / Artifacts | 1–2 |
| Hardware / Relics | 1 |

### Campos obrigatórios por produto

```typescript
{
  id: string;
  slug: string;
  name: string;              // poético: "Deconstructed Shell / Type IV"
  functionalName: string;    // "Oversized Jacket"
  brand: string;
  category: keyof typeof HYBRID_CATEGORIES;
  drop: string;
  price: number;             // centavos ou euros — consistente
  description: string;       // parágrafo poético
  materials: string[];
  weight: string;            // ex: "840gsm"
  sizes: string[];           // ex: ["S", "M", "L"]
  images: [{ src, alt, type: 'editorial' }];
  featured: boolean;
}
```

### Assets necessários

- [ ] 1 vídeo ou imagem hero (home) — min. 1920×1080
- [ ] 2–3 imagens editoriais por produto (ou 1 alta qualidade no MVP mínimo)
- [ ] 1 OG image por drop + default site

---

## 7. Performance e acessibilidade

### Budgets

| Métrica | Mobile | Desktop |
|---------|--------|---------|
| LCP | < 2.5s | < 2.0s |
| CLS | < 0.1 | < 0.1 |
| INP | < 200ms | < 100ms |
| JS inicial (home) | < 200kb gzip | < 300kb gzip |

### Regras

- `next/image` para todas as imagens
- Vídeo hero: muted, loop, poster image, não autoplay com som
- Lenis desligado em `prefers-reduced-motion: reduce`
- Focus visible em todos os interativos
- Contraste mínimo WCAG AA para preço e CTAs
- `lang="pt-BR"` ou `lang="en"` — definir e manter consistente no `layout.tsx`

---

## 8. Fora do MVP (explícito)

Lista para consulta quando surgir tentação de expandir escopo:

- [ ] Ghost Mannequin 360º
- [ ] The Vault / Echoes (arquivo 3D)
- [ ] Countdown funcional com lógica real
- [ ] Transições ASCII / Glitch
- [ ] Cursor customizado
- [ ] ASMR opt-in
- [ ] Membership / login / tiers
- [ ] CMS (Sanity, Contentful)
- [ ] Busca e filtros avançados
- [ ] Multi-drop / multi-idioma
- [ ] Emails transacionais branded (pode ser stripe default no MVP)
- [ ] Admin panel

---

## 9. Estado atual vs. pendente

### Já implementado

| Item | Arquivo |
|------|---------|
| Scaffold Next.js 16 + Tailwind 4 | `package.json`, `src/app/` |
| Hero + manifesto (estático) | `src/app/page.tsx` |
| Seções brands + drop (placeholder) | `src/app/page.tsx` |
| Tipos Product, Drop, Cart | `src/types/index.ts` |
| Marcas + categorias híbridas | `src/lib/constants.ts` |
| Deps: Lenis, GSAP, R3F, Stripe | `package.json` |

### Pendente (todo o MVP funcional)

| Marco | Status |
|-------|--------|
| M0 Foundation | 🔲 Não iniciado |
| M1 Home cinematográfica | 🟡 Parcial (estrutura estática) |
| M2 Drop + PDP | 🔲 Não iniciado |
| M3 Carrinho | 🔲 Não iniciado |
| M4 Checkout | 🔲 Não iniciado |
| M5 Polish + deploy | 🔲 Não iniciado |

---

## 10. Checklist de entrega final

### Experiência

- [ ] Home scroll-telling com manifesto e narrativa do drop
- [ ] 1 drop com 5–10 peças navegáveis
- [ ] PDP editorial com copy poético e specs
- [ ] Carrinho dark funcional
- [ ] Checkout Stripe test mode
- [ ] Navegação oculta mínima
- [ ] Mobile atmosférico (não quebrado)

### Técnico

- [ ] `npm run build` limpo
- [ ] Env vars documentadas (`.env.example`)
- [ ] Lighthouse dentro dos budgets
- [ ] Reduced motion respeitado
- [ ] Fallback sem JS testado

### Conteúdo

- [ ] Copy revisado em PT ou EN (consistente)
- [ ] Nomenclatura híbrida aplicada
- [ ] Imagens reais ou placeholders de alta qualidade (não cards vazios)

### Deploy

- [ ] Vercel (ou equivalente) em produção
- [ ] Domínio configurado (opcional)
- [ ] Stripe webhooks em staging (opcional)

---

## Próximos passos imediatos

1. **Decidir modelo de negócio MVP:** portfólio (sem pagamento real) vs. curadoria (Stripe live)
2. **Escolher fonte gótica** e integrar no `layout.tsx`
3. **Criar `lib/products.ts`** com 5 peças mock completas
4. **Iniciar Marco 0** — tokens + componentes base + Lenis provider

---

*Documento v1 — alinhado ao briefing v2 do [README](../README.md). Atualizar conforme marcos forem concluídos.*
