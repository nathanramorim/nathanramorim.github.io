# feat/blog-toggle-config

**Branch:** `feat/blog-toggle-config`
**Fase:** 4
**Depende de:** `feat-02-routes`
**Status:** `todo`

## Objetivo
Permitir habilitar/desabilitar posts do blog individualmente através de um arquivo de configuração TOML, possibilitando publicação incremental dos artigos sem precisar remover o conteúdo Markdown do repositório.

## Critério de conclusão
```bash
# Um post com enabled = false não deve aparecer em /blog nem nos destaques da home,
# e sua rota /blog/[slug] não deve ser gerada (404 no build estático)
npm run build
```

## Tarefas
- [ ] **04-1** Adicionar dependência de parsing TOML (ex.: `smol-toml`) e criar `src/data/sources/blog.config.toml` com uma entrada por post existente, identificada pelo nome do arquivo em `src/content/blog/` (ex.: `post-0`), contendo `enabled = true/false`.
- [ ] **04-2** Criar a entidade `BlogConfig` e o `BlogConfigRepository` (camada de dados) para carregar e tipar o TOML.
- [ ] **04-3** Atualizar o Use Case `GetAllPosts` para filtrar os posts com `enabled = false` antes de retornar a lista (efeito em `/blog` e em `FeaturedPosts` na home).
- [ ] **04-4** Atualizar `getStaticPaths` de `src/pages/blog/[slug].astro` para não gerar rota estática para posts desabilitados.
- [ ] **04-5** Comentar o próprio arquivo TOML explicando o fluxo de publicação incremental (como habilitar um novo post quando estiver pronto).

## Arquivos gerados
```
src/data/sources/blog.config.toml
src/domain/entities/BlogConfig.ts
src/data/repositories/BlogConfigRepository.ts
```

## Skills relevantes
(consultar `skills/index.md`)
