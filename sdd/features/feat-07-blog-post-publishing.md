# feat/blog-post-publishing

**Branch:** `claude/blog-post-publishing-pxi4y4`
**Fase:** 7
**Depende de:** `feat-04-blog-toggle-config`
**Status:** `done`

## Objetivo
Ativar o próximo post do blog pronto para publicação editando manualmente `blog.config.toml`, criando uma PR e fazendo merge para deploy automático via GitHub Pages.

Este é um fluxo recorrente (uma iteração por post); esta instância cobriu a ativação do **post-2**, mergeada via PR #11. Iterações seguintes ganham seu próprio arquivo (ex.: `feat-09-blog-post-publishing-post-3.md`).

## Critério de conclusão
```bash
# 1. Editar blog.config.toml e mudar enabled = false para true
# 2. Criar e subir PR
# 3. Aprovar PR no GitHub
# 4. Fazer merge e observar deploy automático
npm run build  # valida que a nova rota foi gerada
```

## Tarefas
- [x] **07-1** Identificar o próximo post inativo em `src/data/sources/blog.config.toml` (primeiro com `enabled = false`)

- [x] **07-2** Editar `blog.config.toml`: mudar `enabled = false` para `enabled = true` para esse post

- [x] **07-3** Fazer commit com mensagem descritiva (ex.: "publish: activate post-X")

- [x] **07-4** Criar PR descrevendo qual post está sendo publicado

- [x] **07-5** Aprovar PR e fazer merge para `main` (GitHub Actions dispara deploy automático)

- [x] **07-6** Confirmar que a rota `/blog/[slug]` foi gerada no build e o site está no ar

## Notas de implementação
- Posts com `enabled = false` aparecem em `/blog` como "em breve" mas sem rota gerada
- Deploy automático funciona via GitHub Pages: todo merge em `main` gera novo deployment
- O workflow está descrito em `blog.config.toml` como comentário (vide feat-04)

## Arquivos a modificar
```
src/data/sources/blog.config.toml
```

## Skills relevantes
(consultar `skills/index.md`)
