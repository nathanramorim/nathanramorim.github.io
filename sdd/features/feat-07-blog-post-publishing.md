# feat/blog-post-publishing

**Branch:** `claude/blog-post-publishing-pxi4y4`
**Fase:** 7
**Depende de:** `feat-04-blog-toggle-config`
**Status:** `todo`

## Objetivo
Ativar o próximo post do blog pronto para publicação editando manualmente `blog.config.toml`, criando uma PR e fazendo merge para deploy automático via GitHub Pages.

## Critério de conclusão
```bash
# 1. Editar blog.config.toml e mudar enabled = false para true
# 2. Criar e subir PR
# 3. Aprovar PR no GitHub
# 4. Fazer merge e observar deploy automático
npm run build  # valida que a nova rota foi gerada
```

## Tarefas
- [ ] **07-1** Identificar o próximo post inativo em `src/data/sources/blog.config.toml` (primeiro com `enabled = false`)

- [ ] **07-2** Editar `blog.config.toml`: mudar `enabled = false` para `enabled = true` para esse post

- [ ] **07-3** Fazer commit com mensagem descritiva (ex.: "publish: activate post-X")

- [ ] **07-4** Criar PR descrevendo qual post está sendo publicado

- [ ] **07-5** Aprovar PR e fazer merge para `main` (GitHub Actions dispara deploy automático)

- [ ] **07-6** Confirmar que a rota `/blog/[slug]` foi gerada no build e o site está no ar

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
