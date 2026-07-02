# feat/foundation

**Branch:** `feat/foundation`
**Fase:** 0
**Depende de:** —
**Status:** `done`

## Objetivo
Configurar a fundação do projeto inicializando o Astro com TypeScript, estruturando as pastas de Clean Architecture e criando o workflow de CI/CD para deploy no GitHub Pages.

## Critério de conclusão
```bash
# O projeto deve rodar localmente no dev server do Astro e buildar sem erros
npm run dev -- --open
npm run build
```

## Tarefas
- [x] **00-1** Criar pasta `/backup` e mover o currículo estático `index.html` e a pasta `blog/` para preservar os conteúdos legados.
- [x] **00-2** Inicializar o projeto Astro na raiz configurando TypeScript e as dependências necessárias no `package.json`.
- [x] **00-3** Criar a estrutura de diretórios para Clean Architecture em `/src` (data, domain, presentation).
- [x] **00-4** Extrair as regras visuais de terminal de `blog/style.css` para um CSS global e criar o layout base `src/layouts/RetroLayout.astro` (com moldura chrome e scanlines).
- [x] **00-5** Configurar as Content Collections em `src/content.config.ts` para os posts do blog e converter os 6 posts legados para arquivos Markdown (`.md`) em `src/content/blog/`.
- [x] **00-6** Extrair os dados estáticos do currículo (experiências, habilidades) do index legado para arquivos JSON estruturados sob `src/data/sources/`.
- [x] **00-7** Criar a pipeline de deploy em `.github/workflows/deploy.yml` para compilar e implantar a pasta `/dist` no GitHub Pages.

> Nota: Astro 7 exige a nova Content Layer API — o config foi criado em `src/content.config.ts` (não `src/content/config.ts`) com `loader: glob(...)`.

## Arquivos gerados
```
package.json
astro.config.mjs
tsconfig.json
src/content/config.ts
src/layouts/RetroLayout.astro
src/content/blog/post-0.md
src/content/blog/post-1.md
src/content/blog/post-2.md
src/content/blog/post-3.md
src/content/blog/post-4.md
src/content/blog/post-5.md
src/data/sources/experiences.json
src/data/sources/projects.json
.github/workflows/deploy.yml
```

## Skills relevantes
(consultar `skills/index.md`)
