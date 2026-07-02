# feat/landing-page

**Branch:** `feat/landing-page`
**Fase:** 1
**Depende de:** `feat-00-foundation`
**Status:** `done`

## Objetivo
Desenvolver a Landing Page principal (`src/pages/index.astro`) no tema retro-terminal, contendo o pitch de vendas profissionais, grid de projetos, competências dinâmicas e listagem de artigos em destaque do blog.

## Critério de conclusão
```bash
# A página inicial deve renderizar no navegador com todas as seções e dados populados a partir de JSON e Markdown
curl -s http://localhost:4321 | grep -i "Nathan Amorim"
```

## Tarefas
- [x] **01-1** Criar a página `src/pages/index.astro` utilizando o layout global `RetroLayout.astro`.
- [x] **01-2** Desenvolver o componente do Terminal interativo (simulação de prompt com digitação de comandos) em TypeScript na camada de apresentação (`src/presentation/components/Terminal.astro`).
- [x] **01-3** Criar a camada de domínio (`IProjectRepository`, use case `GetProjectsList`) e dados (`StaticJSONDataSource` lendo `projects.json`) para carregar os projetos.
- [x] **01-4** Implementar a renderização dinâmica do Grid de projetos de destaque no frontend a partir da entidade de domínio.
- [x] **01-5** Criar o Use Case para listar os artigos do blog destacados (`GetFeaturedPosts`) a partir das Content Collections do Astro e renderizar a lista na seção de destaques da LP.
- [x] **01-6** Implementar a seção de competências (skills) carregando dados de `skills.json` de forma limpa.
- [x] **01-7** Integrar rodapé com links e redes de contato profissionais (LinkedIn, GitHub).

## Arquivos gerados
```
src/pages/index.astro
src/presentation/components/Terminal.astro
src/presentation/components/ProjectGrid.astro
src/presentation/components/SkillsSection.astro
src/presentation/components/FeaturedPosts.astro
src/presentation/components/SiteFooter.astro
src/domain/interfaces/IProjectRepository.ts
src/domain/usecases/GetProjectsList.ts
src/domain/usecases/GetFeaturedPosts.ts
src/domain/entities/Project.ts
src/domain/entities/Post.ts
src/data/repositories/ProjectRepository.ts
src/data/sources/StaticJSONDataSource.ts
```

> Nota: os links de `FeaturedPosts` apontam para `/blog/[slug]`, rota ainda não implementada — será criada em `feat-02-routes`.

## Skills relevantes
(consultar `skills/index.md`)
