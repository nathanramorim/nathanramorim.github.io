# feat/blog-post-publishing

**Branch:** `claude/blog-post-publishing-pxi4y4`
**Fase:** 7
**Depende de:** `feat-04-blog-toggle-config`
**Status:** `todo`

## Objetivo
Implementar um fluxo simplificado para ativar o próximo post do blog pronto para publicação, sem precisar editar manualmente o arquivo `blog.config.toml`. Permitir validação automática antes de ativar e gerar confirmação visual da mudança.

## Critério de conclusão
```bash
# Executar comando para ativar o próximo post
npm run blog:publish-next

# Verificar que o post foi ativado em blog.config.toml
cat src/data/sources/blog.config.toml

# Build deve gerar a nova rota estática para o post
npm run build
```

## Tarefas
- [ ] **07-1** Criar script `scripts/blog-publish-next.ts` que:
  - Lê `blog.config.toml` e identifica o primeiro post com `enabled = false` (ordenado por slug)
  - Valida que há pelo menos um post inativo
  - Ativa apenas esse post (muda `enabled = true`)
  - Exibe confirmação com o slug do post ativado
  - Retorna exit code 0 (sucesso) ou 1 (erro/nenhum post para ativar)

- [ ] **07-2** Adicionar comando npm em `package.json`:
  ```json
  "blog:publish-next": "tsx scripts/blog-publish-next.ts"
  ```

- [ ] **07-3** Testar manualmente:
  - Executar `npm run blog:publish-next` com um post inativo
  - Verificar que o TOML foi atualizado
  - Executar build e confirmar que a rota foi gerada
  - Executar novamente e confirmar mensagem "nenhum post inativo para ativar"

- [ ] **07-4** Opcional: Adicionar `--dry-run` e `--list` flags ao script:
  - `--list`: listar todos os posts com seu status (enabled/disabled)
  - `--dry-run`: simular a ativação sem modificar o arquivo

## Notas de implementação
- Script deve usar a mesma lógica de parse TOML que `BlogConfigRepository`
- Posts "em breve" são aqueles com `enabled = false` em ordem de slug
- Considerar usar `smol-toml` ou `bun:toml` para manter consistência
- Operação deve ser **idempotente**: rodar novamente ativa o próximo, não o mesmo

## Arquivos a criar/modificar
```
scripts/blog-publish-next.ts (novo)
package.json (atualizar scripts)
```

## Skills relevantes
(consultar `skills/index.md`)
