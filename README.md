# GUTAI

> *We don't mess with generic stuff.*

---

## Main Brands

Balenciaga · Chrome Hearts · Rick Owens · Enfants Riches Déprimés (ERD) · Vetements · Maison Margiela · Diesel · Acne Studios · Alexander McQueen · Ambush · Amiri · Arc'teryx · Marc Jacobs · SAINT Mxxxxx · Yohji Yamamoto

---

## 1. O Conceito Central (A Filosofia)

O GUTAI não é um e-commerce; é uma **galeria de arte viva e um clube exclusivo**. O conceito visual é o **"Brutalismo Texturizado"**. Rejeitamos o ultra-minimalismo estéril da Farfetch e o layout de planilha do StockX. O Gutai é denso, atmosférico, misterioso e pesado.

A premissa é o contraste: a frieza e o caos do código digital (animações ASCII e glitches) colidindo com a matéria-prima nobre, pesada e tátil das marcas — couro, prata oxidada, algodão pesado, alfaiataria desconstruída. O site deve parecer que você entrou num **cofre digital subterrâneo** onde a alta moda é o artefato sagrado.

**North Star:** não medimos sucesso por GMV. Medimos por **tempo de imersão na experiência** e **taxa de retorno nos drops** — sinais de que o público certo encontrou o lugar certo.

**Manifesto (Home):** três linhas de copy poética e arrogante no topo da experiência, para ancorar quem chega sem contexto. Exemplo de tom: *"Artefatos para quem entende peso. Se você sabe, você sabe."*

---

## 2. Atmosfera e Diretrizes Visuais (Look & Feel)

### A vibe "Chrome Hearts" digital

Dark Mode profundo — não `#000000` chapado, mas pretos com ruído, texturas de couro, metal escovado e prata embaçada.

### Iluminação e sombras

Iluminação dramática e direcional. Peças não iluminadas uniformemente. Spots de galeria que reagem ao movimento do mouse, criando sombras longas e profundas nas roupas.

### ASCII e Glitch

A animação ASCII não é decoração infantil; é a **matriz** do site. Em transições e antes de um Drop, a imagem editorial se desconstrói em caracteres e código bruto, antes de se recompor — a desconstrução digital do Margiela e do Owens.

**Uso com parcimônia:** reservado para momentos de alto impacto (lançamento de drop, transições entre seções principais). Nunca como wallpaper constante.

### Anti-ultra-minimalismo

Peso visual deliberado: bordas grossas, tipografia gótica ou brutalista misturada com fontes monoespaçadas (terminal), UI que parece hardware físico — botões de prata maciça, zíners pesados.

### Modo degradado (obrigatório)

Documentar e implementar o que acontece quando:

- WebGL não está disponível
- JavaScript está desativado
- Conexão é lenta

**Desktop** = experiência completa. **Mobile** = versão reduzida, mas igualmente atmosférica — nunca uma versão quebrada ou genérica. Respeitar `prefers-reduced-motion` em todas as animações.

---

## 3. Experiência de Navegação e Estrutura (UX)

Modelo híbrido: **Revista Editorial + Drops Exclusivos**.

### A Home (A Capa da Revista)

Sem grid de produtos. Homepage cinematográfica em scroll-telling: ensaios em tela cheia, vídeos slow-motion de tecidos, peças do Drop atual integradas à narrativa.

### O Drop e o Countdown

Lançamento como evento. Contagem regressiva estilizada — ASCII ou displays LED digitais antigos.

### O Labirinto (Navegação)

Sem menus padrão. Navegação oculta ou radial. **The Vault / Echoes** (Arquivo): drops antigos numa grade 3D ou ambiente abstrato, como depósito de luxo.

**Equilíbrio crítico:** atmosfera na descoberta, **clareza na transação**. O labirinto encanta; o checkout não pode ser um quebra-cabeça.

### Páginas de Produto (A Vitrine)

Três visualizações — implementadas em fases (ver secção 6):

| Modo | Descrição |
|------|-----------|
| **Editorial** | Peça em modelo, ambiente 3D abstrato/sombrio |
| **Ghost Mannequin** | Peça flutuando em 360º — foco na costura e alfaiataria |
| **Raio-X / Detalhe** | Zoom extremo na textura; som ambiente opt-in ao passar o mouse |

### Sound design

ASMR de couro e tecido pesado como **camada opt-in**, nunca auto-play. Áudio reforça imersão na PDP; quem não quer, não ouve.

### Cursor customizado

Cursor que interage com a física da página — peso, empurrão de elementos, rastro ASCII/fumaça. **Com toggle para desativar**; desativado por padrão em mobile.

---

## 4. Tom de Voz e Arquitetura de Informação

O site não vende; **apresenta**. Tom poético, levemente arrogante e rebelde. *"Se você sabe, você sabe."*

### Categorias renomeadas (nomenclatura híbrida)

Nome poético como headline + termo funcional em microcopy ou meta, para não perder quem busca o óbvio:

| Poético | Funcional (microcopy) |
|---------|------------------------|
| Skins / Upper Layers | T-shirts, Hoodies |
| Lower Constructs | Trousers, Shorts |
| Shells / Armor | Jackets, Outerwear |
| Groundwear / Artifacts | Sneakers, Boots |
| Hardware / Relics | Accessories, Silver |
| The Vault / Echoes | Archive, Past Drops |

### Copywriting

Descrições como poemas ou fichas técnicas de laboratório. Foco em desconstrução, peso do tecido, origem da prata, rebeldia da modelagem.

### O Clube (membership explícito)

Se é clube, definir o que o membro ganha:

- Acesso antecipado a drops
- Entrada exclusiva em The Vault / Echoes
- *(Outros benefícios a definir conforme o modelo de negócio)*

---

## 5. Engenharia e Tecnologia (O "Peso" do Site)

Público com hardware de ponta — o site não tem medo de ser pesado, **desde que a experiência seja fluida**.

| Tecnologia | Uso |
|------------|-----|
| **WebGL + Three.js** | Texturas de metal/couro, Vault 3D, shaders GLSL |
| **CSS + vídeo** | Home e editorial onde Three.js seria overkill |
| **Lenis / Locomotive Scroll** | Scroll com inércia luxuosa; respeitar `prefers-reduced-motion` |
| **Micro-interações** | Cursor, spots de luz, transições ASCII |
| **Checkout custom** | Skin dark sobre **Stripe Elements** (ou equivalente) — atmosfera até o pagamento, UX de transação óbvia |

### Performance como promessa

Luxo não justifica lag. Mobile recebe assets otimizados e efeitos reduzidos, não uma experiência inferior em qualidade perceptiva.

---

## 6. Roadmap de Execução (Fases)

Escopo brutalmente disciplinado. Não tentar tudo de uma vez.

### Fase 1 — MVP Emocional

Prova a tese. Portfólio de nível excepcional.

- Home scroll-telling cinematográfica + manifesto
- 1 drop (5–10 peças, fictício ou real)
- PDP modo **Editorial** apenas
- Checkout mínimo funcional (dark, claro, Stripe)
- Nomenclatura híbrida + copy poético

### Fase 2 — Profundidade

- Ghost Mannequin 360º na PDP
- The Vault / Echoes (grade 3D ou ambiente abstrato)
- Countdown estilizado nos drops
- Membership / clube (benefícios definidos)

### Fase 3 — Assinatura

- Transições ASCII/Glitch em drops e seções-chave
- Cursor customizado com toggle
- Raio-X / Detalhe + ASMR opt-in na PDP
- Ambientes 3D completos de transição

---

## 7. Modelo de Negócio (Decisão antecipada)

Definir cedo — muda radicalmente o escopo:

| Modelo | Implicações |
|--------|-------------|
| **Curadoria real** | Revenda/vintage; exige autenticação, proveniência, logística, suporte |
| **Portfólio / experimento** | Vitrine sem transação; foco em direção de arte e engenharia front-end |
| **Drops digitais** | Lookbooks, membership, conteúdo exclusivo |

**Nota sobre marcas:** listar Balenciaga, Chrome Hearts etc. implica revenda autorizada ou peças de arquivo/vintage com autenticação documentada. Para portfólio, ok; para negócio comercial, é requisito operacional, não estético.

---

## 8. O Que o GUTAI Odeia (A Linha Tênue)

- **Grid de supermercado** — nada de 4 colunas iguais com fundo branco
- **Pop-up de desconto** — o Gutai não pede atenção, exige respeito
- **Interface Shopify/WooCommerce genérica** — checkout e carrinho desenhados do zero, atmosfera escura até o pagamento
- **Experiência quebrada em mobile** — reduzida sim, inferior não
- **Áudio auto-play** — som só com consentimento explícito
- **Mistério na hora de pagar** — preço, CTA e fluxo de checkout sempre claros

---

## 9. Posicionamento no Mercado

```
Farfetch / SSENSE  →  catálogo infinito, minimalismo clínico
StockX             →  utilitário, preço primeiro
GUTAI              →  editorial + evento + clube + anti-utilitário
```

Não compete com Farfetch em breadth. Compete em **experiência e curadoria** — mais próximo de Alyx, ERD, early Balenciaga (Demna), dealers Chrome Hearts.

---

## 10. Veredito Interno (Critério de Sucesso)

| Dimensão | Meta |
|----------|------|
| Conceito | Statement piece, não "mais um e-commerce" |
| Execução Fase 1 | Home + 1 drop + 1 PDP + checkout = portfólio referência |
| Disciplina | Cada pixel justifica a escolha; fases antes de feature creep |
| Luxo inclusivo | Modo degradado, reduced motion, mobile atmosférico |

---

*Briefing v2 — incorpora escopo por fases, equilíbrio descoberta/transação, nomenclatura híbrida, clube explícito, performance mobile e decisões de negócio antecipadas.*
