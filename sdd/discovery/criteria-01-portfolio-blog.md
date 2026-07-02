# Critérios e Definições Técnicas 01 — Landing Page & Portfólio

Este documento detalha as decisões técnicas, requisitos não funcionais, critérios de aceitação e diagramas arquiteturais para a unificação do portfólio no estilo retro-cyberpunk usando **Astro**.

## 1. Diretrizes de Design & Estilo
* **Tema Visual:** Retro-terminal CRT (idêntico ao `./blog/style.css`).
* **Cores Base:** 
  * Background: `#0a0b0d`
  * Painéis: `#0d0f14`
  * Texto Principal: `#e7efe9` (tom verde acinzentado esmaecido)
  * Destaques / Ações: `#7ffcff` (cyan) e `#4ade80` (green)
  * Avisos: `#f5c451` (amber)
* **Tipografia:** 
  * Cabeçalhos pixelados: `'Press Start 2P'`
  * Textos de console/metadados: `'JetBrains Mono'`
  * Corpo de texto: `'Inter'`
* **Efeitos Visuais:**
  * Overlay CRT de scanlines (`crt-overlay` repetindo linear-gradient).
  * Cursor piscante animado (`.cursor`).
  * Efeito glow sutil nos títulos em cyan.
  * Janelas com moldura estilo cabeçalho de console (`.chrome` com os botões coloridos red/yellow/green).

## 2. Clean Architecture & Astro (TypeScript)
O Astro gerencia a renderização de componentes com excelente suporte para separação de preocupações (Clean Architecture).

```
   ┌──────────────────────────────────────────────────────────┐
   │                  PRESENTATION LAYER (UI)                 │
   │   - Layouts comuns (RetroLayout.astro)                   │
   │   - Páginas (pages/index.astro, pages/cv.astro, etc)     │
   │   - Componentes UI (Terminal.astro, Chrome.astro)        │
   │   - CSS Estilos e Efeitos Retro                          │
   └────────────────────────────┬─────────────────────────────┘
                                │ Usa
                                ▼
   ┌──────────────────────────────────────────────────────────┐
   │                       DOMAIN LAYER                       │
   │   - Entities (interfaces/Project.ts, interfaces/Post.ts) │
   │   - Use Cases (GetFeaturedPosts.ts, GetProjects.ts)      │
   └────────────────────────────┬─────────────────────────────┘
                                │ Usa
                                ▼
   ┌──────────────────────────────────────────────────────────┐
   │                        DATA LAYER                        │
   │   - Content Collections (Astro content/blog/*.md)        │
   │   - JSON Data Sources (projects.json, experiences.json)  │
   └──────────────────────────────────────────────────────────┘
```

### Divisão de Responsabilidades no Astro:
1. **Presentation (Apresentação):**
   * Arquivos `.astro` que representam a casca visual e componentes HTML. Eles recebem dados limpos e se encarregam da renderização final.
   * Arquivos CSS globais e locais gerenciados pelo ecossistema do Vite embutido no Astro.
2. **Domain (Domínio):**
   * Arquivos TypeScript puros contendo interfaces (`IProject`, `IBlogPost`) e lógica de filtragem (ex: ordenar projetos por relevância ou separar os posts mais recentes para destaque na LP).
3. **Data (Dados):**
   * Configuração das **Content Collections** do Astro para ler e validar os arquivos Markdown (`.md`) de posts de blog.
   * Arquivos JSON estruturados para carregar as experiências do currículo e dados dos projetos do portfólio.

## 3. Roteamento & Feature de Artigos em Destaque na LP
O roteamento no Astro é baseado em arquivos físicos sob `src/pages/`. Isso dá autonomia total de rotas mantendo a unificação visual:
* `/` (`index.astro`): Landing Page. Busca dados de projetos no JSON e consulta a coleção de posts do blog usando as APIs do Astro para filtrar e expor os posts destacados (com metadado `featured: true` no front-matter).
* `/cv` (`cv.astro`): Currículo do Nathan. Carrega a lista de experiências profissionais e educacionais a partir de JSONs na camada de dados e renderiza de forma estilizada.
* `/blog` (`blog/index.astro`): Lista cronológica de todos os artigos do blog.
* `/blog/[slug]` (`blog/[slug].astro`): Rota dinâmica que lê cada arquivo Markdown em `src/content/blog/` e renderiza o artigo mantendo a moldura de terminal e CRT.

## 4. Estratégia de Deploy no GitHub Pages
Como o Astro gera arquivos 100% estáticos compilados (HTML/CSS/JS otimizados), o deploy continua transparente no GitHub Pages via GitHub Actions:

1. **Localmente:** O desenvolvimento é feito na pasta de código fonte (`/src`). `npm run build` compila tudo para a pasta `/dist`.
2. **GitHub Actions:** Um workflow em `.github/workflows/deploy.yml` compila o Astro automaticamente em cada push na `main` e faz o deploy do diretório `/dist` no GitHub Pages.

## 5. Critérios de Aceitação (DoD)
- [ ] A raiz `/` renderiza a Landing Page no tema retro-terminal, exibindo o pitch, habilidades, showcase de projetos e uma seção com os posts em destaque do blog.
- [ ] A rota `/cv` renderiza o currículo completo de Nathan no estilo retro-terminal.
- [ ] A rota `/blog` exibe todos os posts, e a rota `/blog/[slug]` renderiza cada artigo de forma isolada a partir de arquivos Markdown.
- [ ] Todos os layouts compartilham o mesmo layout base (`RetroLayout.astro`) contendo o efeito de scanlines CRT, fontes adequadas e a moldura do terminal `.chrome`.
- [ ] O projeto é 100% responsivo e otimizado para carregamento de fontes e SEO.
