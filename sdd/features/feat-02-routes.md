# feat/routes

**Branch:** `feat/routes`
**Fase:** 2
**Depende de:** `feat-01-landing-page`
**Status:** `done`

## Objetivo
Criar as rotas isoladas para exibição do currículo retrô (`/cv`), do portal de artigos do blog (`/blog`) e das páginas individuais dinâmicas dos posts (`/blog/[slug]`) lendo o conteúdo em Markdown.

## Critério de conclusão
```bash
# Validar se as três novas rotas retornam status 200 no servidor local do Astro
curl -I http://localhost:4321/cv
curl -I http://localhost:4321/blog
curl -I http://localhost:4321/blog/vocesabeoqueeharness
```

## Tarefas
- [x] **02-1** Criar a página de currículo `src/pages/cv.astro` importando o layout retrô e os dados de experiências.
- [x] **02-2** Implementar o Use Case de carregamento de histórico profissional (`GetExperienceHistory`) consumindo `experiences.json` (e `education.json`, extraído nesta feature) e renderizar as experiências e formações acadêmicas de Nathan em formato cronológico estilizado.
- [x] **02-3** Desenvolver `src/pages/blog/index.astro` para carregar todos os artigos do blog via Content Collections do Astro, ordenando-os de forma cronológica reversa.
- [x] **02-4** Desenvolver a rota dinâmica `src/pages/blog/[slug].astro` para renderizar o corpo de cada Markdown convertido usando o layout base de terminal.
- [x] **02-5** Garantir que a formatação interna do Markdown (títulos, listas, callouts) utilize a mesma estilização CSS retro-moderna de `./blog/style.css` original.

## Arquivos gerados
```
src/pages/cv.astro
src/pages/blog/index.astro
src/pages/blog/[slug].astro
src/domain/usecases/GetExperienceHistory.ts
src/domain/usecases/GetAllPosts.ts
src/domain/utils/slugify.ts
src/domain/entities/Experience.ts
src/domain/entities/Education.ts
src/data/sources/education.json
src/presentation/components/ExperienceTimeline.astro
src/presentation/components/EducationList.astro
```

> Notas:
> - Slugs dos posts agora são gerados a partir do título (`slugify`), ex.: `/blog/voce-sabe-o-que-e-harness-engineering`, em vez do nome do arquivo (`post-0`). `GetFeaturedPosts` (feat-01) foi ajustado para reutilizar essa lógica via `GetAllPosts`.
> - `GetFeaturedPosts` passou a ordenar por posts mais recentes primeiro (antes pegava os 3 mais antigos), alinhando com a intenção de "destaque".
> - Educação extraída para `src/data/sources/education.json` (não prevista em feat-00, necessária para a task 02-2).

## Skills relevantes
(consultar `skills/index.md`)
