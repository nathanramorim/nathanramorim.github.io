# Roadmap Preliminar 01 — Landing Page & Portfólio Retro-Cyberpunk com Astro

Este documento apresenta a divisão lógica das tarefas para implementação do novo portfólio integrado utilizando o framework **Astro** com TypeScript e Clean Architecture.

## Fase 0 — Foundation & Setup (Astro + TS + Content Collections)
### Feature: `feat-00-foundation`
* **Objetivo:** Inicializar o projeto com Astro, configurar a estrutura de arquivos e converter os conteúdos legados para Markdown/JSON.
* **Tarefas:**
  - [ ] **00-1:** Mover os arquivos legados (`index.html` da raiz e a pasta `blog/`) para um diretório temporário de backup (`/backup`).
  - [ ] **00-2:** Inicializar o projeto Astro na pasta raiz com TypeScript e dependências padrão.
  - [ ] **00-3:** Configurar a esteira de deploy automático do Astro no GitHub Pages em `.github/workflows/deploy.yml`.
  - [ ] **00-4:** Criar o layout base global `src/layouts/RetroLayout.astro` contendo os estilos retro, fontes do Google e as molduras `.chrome` e `.crt-overlay`.
  - [ ] **00-5:** Configurar as **Content Collections** do Astro em `src/content/config.ts` definindo a estrutura de posts do blog (título, data, sumário, tags, link de destaque, etc).
  - [ ] **00-6:** Converter as 6 publicações existentes de `blog/post-X.html` para arquivos Markdown (`.md`) dentro de `src/content/blog/`, mapeando seus metadados (como título e resumo) no front-matter.
  - [ ] **00-7:** Criar a base de dados do currículo e projetos em `/src/data/` em arquivos JSON estruturados.

## Fase 1 — Landing Page (LP com Artigos em Destaque)
### Feature: `feat-01-landing-page`
* **Objetivo:** Desenvolver a Landing Page principal (`src/pages/index.astro`) consumindo os dados de projetos e os artigos do blog destacados.
* **Tarefas:**
  - [ ] **01-1:** Criar `src/pages/index.astro` utilizando o `RetroLayout.astro`.
  - [ ] **01-2:** Implementar o componente do Terminal interativo simulado na LP.
  - [ ] **01-3:** Desenvolver a seção de competências (skills) e grid de projetos carregados dinamicamente a partir dos JSONs locais na camada de dados.
  - [ ] **01-4:** Fazer a query de posts de blog na coleção do Astro, filtrando os posts marcados como `featured: true` (ou mais recentes) e exibindo-os em uma seção dedicada de destaques da LP.
  - [ ] **01-5:** Adicionar botões de ação e links para as subpáginas `/cv` e `/blog`.

## Fase 2 — Páginas de Rota do Currículo (CV) e Blog Completo
### Feature: `feat-02-routes`
* **Objetivo:** Desenvolver a rota isolada do currículo reestilizado e o portal completo do blog com rotas dinâmicas.
* **Tarefas:**
  - [ ] **02-1:** Desenvolver `src/pages/cv.astro` que carrega a base de dados em JSON das experiências e formação de Nathan e as renderiza no tema retrô.
  - [ ] **02-2:** Desenvolver `src/pages/blog/index.astro` para listar cronologicamente todos os posts do blog convertidos.
  - [ ] **02-3:** Desenvolver a página de rota dinâmica `src/pages/blog/[slug].astro` que renderiza o Markdown completo de cada post de forma isolada dentro do layout retrô.

## Fase 3 — SEO, Polimento & Deploy
### Feature: `feat-03-seo-polimento`
* **Objetivo:** Garantir excelente performance, SEO e certificar que a pipeline de CI/CD está fazendo deploy correto no GitHub Pages.
* **Tarefas:**
  - [ ] **03-1:** Adicionar metadados SEO, Open Graph e Favicon retrô pixelado nos layouts do Astro.
  - [ ] **03-2:** Validar a responsividade de todas as telas (LP, CV, listagem do Blog e páginas de Artigos).
  - [ ] **03-3:** Testar o pipeline de deploy do GitHub Actions e verificar o comportamento do site em produção no GitHub Pages.
