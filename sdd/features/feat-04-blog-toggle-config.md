# feat/blog-toggle-config

**Branch:** `feat/blog-toggle-config`
**Fase:** 4
**Depende de:** `feat-02-routes`
**Status:** `done`

## Objetivo
Permitir habilitar/desabilitar posts do blog individualmente através de um arquivo de configuração TOML, possibilitando publicação incremental dos artigos sem precisar remover o conteúdo Markdown do repositório.

## Critério de conclusão
```bash
# Um post com enabled = false deve aparecer em /blog como inativo (sem link, com
# selo "em breve"), sumir dos destaques da home, e sua rota /blog/[slug] não deve
# ser gerada (404 no build estático)
npm run build
```

## Tarefas
- [x] **04-1** Adicionar dependência de parsing TOML (ex.: `smol-toml`) e criar `src/data/sources/blog.config.toml` com uma entrada por post existente, identificada pelo nome do arquivo em `src/content/blog/` (ex.: `post-0`), contendo `enabled = true/false`.
- [x] **04-2** Criar a entidade `BlogConfig` e o `BlogConfigRepository` (camada de dados) para carregar e tipar o TOML.
- [x] **04-3** Atualizar o Use Case `GetAllPosts` para filtrar os posts com `enabled = false` antes de retornar a lista (efeito em `/blog` e em `FeaturedPosts` na home).
- [x] **04-4** Atualizar `getStaticPaths` de `src/pages/blog/[slug].astro` para não gerar rota estática para posts desabilitados.
- [x] **04-5** Comentar o próprio arquivo TOML explicando o fluxo de publicação incremental (como habilitar um novo post quando estiver pronto).

## Notas de implementação
- `BlogConfigRepository` lê `blog.config.toml` via import `?raw` do Vite e faz o parse com `smol-toml`.
- `getStaticPaths` de `[slug].astro` agora usa `getCollection('blog', filter)` para nem sequer carregar posts desabilitados, e a navegação prev/next só circula entre posts habilitados.
- Testado manualmente: com `post-5.enabled = false`, o build caiu de 9 para 8 páginas, o post sumiu de `/blog` e da home, e a rota não foi gerada. Revertido para `true` antes do commit final.

### Amendment (branch `feat/blog-inactive-posts`)
- Ajuste de UX: `GetAllPosts` passou a retornar **todos** os posts (com o campo `enabled` na entidade `Post`), em vez de já filtrar os desabilitados. `/blog` agora lista todos, renderizando os desabilitados como itens não clicáveis (`.index-item-inactive`, opacidade reduzida) com selo "em breve".
- `GetFeaturedPosts` (destaques da home) continua filtrando apenas os habilitados — não expõe posts inativos na home.
- `getStaticPaths` de `/blog/[slug].astro` não mudou: posts desabilitados continuam sem rota gerada (sem acesso), apenas visíveis na listagem.

## Arquivos gerados
```
src/data/sources/blog.config.toml
src/domain/entities/BlogConfig.ts
src/data/repositories/BlogConfigRepository.ts
```

## Skills relevantes
(consultar `skills/index.md`)
