# feat/blog-post-publishing-post-3

**Branch:** `claude/publish-post-3`
**Fase:** 9
**Depende de:** `feat-07-blog-post-publishing`
**Status:** `in-progress`

## Objetivo
Ativar o post-3 ("Os quatro pilares de uma cozinha bem montada") em `blog.config.toml`, seguindo o fluxo recorrente descrito em `feat-07-blog-post-publishing.md`.

## Critério de conclusão
```bash
grep -A1 "posts.post-3" src/data/sources/blog.config.toml
npm run build  # valida que /blog/os-quatro-pilares-de-uma-cozinha-bem-montada foi gerada
```

## Tarefas
- [x] **09-1** Identificar o próximo post inativo (`post-3`, primeiro com `enabled = false`)
- [x] **09-2** Editar `blog.config.toml`: `enabled = false` → `enabled = true` para `post-3`
- [x] **09-3** Commit "publish: activate post-3"
- [x] **09-4** Validar build (rota `/blog/os-quatro-pilares-de-uma-cozinha-bem-montada` gerada)
- [ ] **09-5** Criar PR e aguardar aprovação/merge para `main` (deploy automático)

## Arquivos gerados/alterados
```
src/data/sources/blog.config.toml
sdd/features/feat-09-blog-post-publishing-post-3.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
