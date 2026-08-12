# feat/eyebrow-badge-consistency

**Branch:** `main` (fix direto, sem PR)
**Fase:** 10
**Depende de:** `feat-01-landing-page` (retema claro/azul)
**Status:** `done`

## Objetivo
Corrigir inconsistências visuais no componente "eyebrow" (badge/pill usado como
rótulo de seção em toda a home e no `/cv`) e formalizar seu padrão como parte
do design system do site, incluindo a variante para uso sobre fundo escuro.

## Problema
1. `.eyebrow` dentro de contextos com regras de texto genéricas mais
   específicas (`.hero-copy p`, `.about-text p`) perdia cor e tamanho de
   fonte por especificidade CSS — "Disponível para novos projetos" (hero) e
   "Sobre mim" renderizavam cinza/tamanho errado em vez do padrão azul/12px.
2. `.eyebrow[style*="center"]` usava `display:flex` sem `width:fit-content`,
   esticando a pill para 100% da largura da seção em vez de ficar
   centralizada e do tamanho do conteúdo.
3. `.question-banner` nunca teve `background`/`padding`/`border-radius`
   definidos no Astro (perdido na migração do HTML estático original) —
   renderizava texto preto sobre fundo transparente em vez do banner azul.
4. Não existia uma variante do eyebrow para fundos escuros (ex. `.why-card`),
   então "Por que trabalhar comigo?" usava o fundo claro padrão sobre um
   card navy, quebrando o contraste.
5. Espaçamento vertical entre seções da home era inconsistente (0, 8px,
   48px, 56px conforme a seção, com margens duplicadas vindas de grids
   internos).
6. Título "Sobre mim" (`.about-title`) usava 1.3rem enquanto os demais
   títulos de seção (`.section-title`) usam 1.5rem.

## Abordagem
- `.eyebrow` (global.css) passa a impor `font-family`, `font-size`,
  `font-weight` e `color` com `!important`, garantindo que nenhum seletor de
  parágrafo genérico de contexto (`.hero-copy p`, `.about-text p`, etc.)
  sobrescreva o badge.
- `.eyebrow[style*="center"]` passa a usar `display:flex; width:fit-content;
  margin:0 auto;` em vez de `justify-content:center`, evitando o estica­mento.
- Criada a classe utilitária **`.eyebrow-on-dark`** (global.css) como padrão
  oficial para eyebrow sobre fundo escuro: fundo translúcido branco
  (`rgba(255,255,255,.08)`), borda `rgba(255,255,255,.2)` e texto
  `#93c5fd`. Uso: `class="eyebrow eyebrow-on-dark"`.
- `.question-banner` recebeu `background: linear-gradient(135deg, var(--cyan),
  var(--green))`, `padding`, `border-radius` e texto branco; o botão
  `.banner-cta` ganhou variante outline clara para contraste sobre azul.
- Todas as seções de nível superior da home padronizadas para
  `padding: 72px 0` (removendo margens redundantes de `.solutions-grid`,
  `.process-grid`, `.tech-groups`, `.index-list`).
- `.about-title` alinhado a `1.5rem` para bater com `.section-title`.
- `<meta name="color-scheme" content="light only">` + `color-scheme:light
  only` no `:root` para impedir que o dark mode automático do navegador
  (Chrome/Edge "Auto Dark Mode", extensões tipo Dark Reader) escureça
  seletivamente seções sem background explícito.

## Padrão formalizado (ver `constitution.md`)
- Todo rótulo de seção usa `<p class="eyebrow">` (ou `<p class="eyebrow eyebrow-on-dark">`
  sobre fundo escuro) — nunca estilizar um badge de rótulo do zero.
- Nunca declarar `color`/`font-size` de texto solto num container
  (`.algo p { color: ... }`) sem checar se isso vaza para badges/pills
  filhos; usar seletor mais específico (ex. `.algo > p`) quando necessário.
- Toda seção de nível superior de uma página usa `padding: 72px 0` como
  ritmo vertical padrão, salvo necessidade explícita de exceção documentada.

## Critério de conclusão
```bash
grep -n "eyebrow-on-dark" src/styles/global.css src/pages/index.astro
grep -n "color-scheme" src/layouts/RetroLayout.astro src/styles/global.css
npm run build
```

## Tarefas
- [x] **10-1** Corrigir especificidade de `.eyebrow` com `!important` nas
      propriedades visuais centrais.
- [x] **10-2** Corrigir `.eyebrow[style*="center"]` para não esticar 100% da
      largura.
- [x] **10-3** Restaurar background/padding/border-radius de
      `.question-banner` e contraste do `.banner-cta`.
- [x] **10-4** Criar `.eyebrow-on-dark` como padrão reutilizável e aplicar em
      `.why-card`.
- [x] **10-5** Uniformizar `padding: 72px 0` em todas as seções de nível
      superior da home e remover margens duplicadas dos grids internos.
- [x] **10-6** Alinhar `.about-title` a `1.5rem`.
- [x] **10-7** Adicionar `color-scheme: light only` (meta + CSS).
- [x] **10-8** Documentar o padrão em `constitution.md`.

## Arquivos gerados/alterados
```
src/styles/global.css
src/pages/index.astro
src/layouts/RetroLayout.astro
sdd/features/feat-10-eyebrow-badge-consistency.md
sdd/features/index.md
sdd/memory/progress.md
sdd/memory/constitution.md
```

## Skills relevantes
(consultar `skills/index.md`)
