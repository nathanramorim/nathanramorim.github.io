# feat/routes

**Branch:** `feat/routes`
**Fase:** 2
**Depende de:** `feat-01-landing-page`
**Status:** `todo`

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
- [ ] **02-1** Criar a página de currículo `src/pages/cv.astro` importando o layout retrô e os dados de experiências.
- [ ] **02-2** Implementar o Use Case de carregamento de histórico profissional (`GetExperienceHistory`) consumindo `experiences.json` e renderizar as experiências e formações academicas de Nathan em formato cronológico estilizado.
- [ ] **02-3** Desenvolver `src/pages/blog/index.astro` para carregar todos os artigos do blog via Content Collections do Astro, ordenando-os de forma cronológica reversa.
- [ ] **02-4** Desenvolver a rota dinâmica `src/pages/blog/[slug].astro` para renderizar o corpo de cada Markdown convertido usando o layout base de terminal.
- [ ] **02-5** Garantir que a formatação interna do Markdown (títulos, listas, callouts) utilize a mesma estilização CSS retro-moderna de `./blog/style.css` original.

## Arquivos gerados
```
src/pages/cv.astro
src/pages/blog/index.astro
src/pages/blog/[slug].astro
src/domain/usecases/GetExperienceHistory.ts
```

## Skills relevantes
(consultar `skills/index.md`)
