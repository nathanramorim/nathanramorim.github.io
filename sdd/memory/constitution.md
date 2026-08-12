# Constituição — nathan-amorim (site pessoal)

## Missão
Site pessoal (portfólio + currículo + blog) de Nathan Amorim: comunica "o
que ele resolve" para empresários e negócios locais, não um portfólio
técnico para desenvolvedores.

## Stack
| Camada | Escolha | Motivo |
|--------|---------|--------|
| Framework | Astro (output static) | Site estático, deploy simples em GitHub Pages |
| Linguagem | TypeScript | Tipagem em entidades/usecases (Clean Architecture) |
| Estilo | CSS puro com variáveis (`src/styles/global.css`) + `<style>` scoped por página/componente | Sem framework CSS; tema claro/azul + Montserrat |
| Hospedagem | GitHub Pages | `.github/workflows/deploy.yml`, deploy automático a cada push em `main` |
| Config | `src/data/sources/*.json` + `blog.config.toml` | Conteúdo (experiências, skills, certificações, posts) fora do código |
| Secrets | nenhum (site 100% estático, sem backend) | — |

## Decisões resolvidas
| Decisão | Resolução |
|---------|-----------|
| Tema visual | Claro, fundo branco, azul (`--cyan:#2563eb`) como cor primária, Montserrat como única família tipográfica |
| Estrutura de conteúdo | Página única (home) com todas as seções, incluindo currículo completo, em vez de espalhar por várias páginas — `/cv` existe à parte só para impressão/PDF, reaproveitando o mesmo componente `ResumeSection` |
| Contato principal | WhatsApp (`wa.me/553198953514`) via CTA no hero, banner, footer e bolha flutuante — não formulário |

## Design System (padrões obrigatórios)

### Eyebrow (badge de rótulo de seção)
- Todo rótulo de seção é `<p class="eyebrow">texto</p>`. Nunca estilizar um
  badge do zero — sempre reutilizar essa classe.
- Sobre fundo escuro (ex. cards com `background: var(--text)`), adicionar
  `eyebrow-on-dark`: `<p class="eyebrow eyebrow-on-dark">texto</p>`.
- Para centralizar um eyebrow dentro de uma seção, usar
  `style="text-align: center;"` no próprio elemento — o CSS global já trata
  isso via `.eyebrow[style*="center"]` (não esticar a pill; ela deve ficar
  do tamanho do conteúdo, centralizada).
- `.eyebrow` define `color`/`font-size`/`font-weight` com `!important` de
  propósito: containers costumam ter regras genéricas tipo `.algo p { color:
  ...; font-size: ...; }` que vazam por especificidade para qualquer `<p>`
  filho, incluindo o eyebrow. Ao criar uma nova seção com texto solto em
  `<p>`, prefira seletor `.algo > p` (filho direto) em vez de `.algo p`
  quando o container também tiver um `.eyebrow` dentro.

### Ritmo vertical
- Toda seção de nível superior de uma página usa `padding: 72px 0`. Não usar
  margens ad-hoc em grids/listas internos para espaçamento externo — quem
  controla o espaço entre seções é sempre o `padding` da própria `<section>`.

### Títulos de seção
- `.section-title` (1.5rem / peso 800) é o tamanho padrão de todo `<h2>` de
  seção. Títulos que fogem desse padrão (ex. layouts em duas colunas) devem
  manter o mesmo `font-size`/`font-weight`, ajustando só alinhamento.

### Dark mode do navegador
- O site é light-only por design. `color-scheme: light only` está declarado
  via `<meta>` (`RetroLayout.astro`) e CSS (`:root` em `global.css`) para
  evitar que o dark mode automático do navegador (Chrome/Edge "Auto Dark
  Mode", extensões como Dark Reader) escureça seletivamente seções sem
  background explícito. Não remover essa declaração.

## Regras (máx. 10)
1. Nunca sobrescrever badges/pills (`.eyebrow`, `.chip`, `.hashtag`) com
   estilos ad-hoc — seguir o Design System acima.
2. Toda seção de nível superior usa `padding: 72px 0` (ver Design System).
3. Antes de declarar `.algo p { ... }`, verificar se `.algo` contém um
   `.eyebrow` ou outro badge que vazaria a regra.
4. `color-scheme: light only` não pode ser removido sem decisão explícita
   de suportar dark mode.
5. Conteúdo do currículo (experiências, formação, skills, certificações,
   idiomas) vive só em `src/data/sources/*.json` — nunca hardcoded em
   componente ou página.
6. Todo texto do site evita travessão (`—`/`–`); usar `·` como separador,
   conforme já padronizado em datas e headers.
7. Mudanças visuais relevantes (novo padrão de componente, nova cor, etc.)
   devem ser registradas aqui, não só no código.
