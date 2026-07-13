# Progress — meu-projeto

## Status
```
Fase 0-6 (Foundation → Atualização Forge SDD Bio)   [x] done — no ar em produção
```

## Features ativas
| Feature | Branch | Status | PR |
|---------|--------|--------|-----|
| feat-07-blog-post-publishing | claude/blog-post-publishing-pxi4y4 | in-progress | #11 |
| feat-08-cv-pdf-export | claude/resume-pdf-export-86hi8l | done | — |

## Próximo passo
**Aguardando:** aprovação e merge da PR #11 (post-2 activation) e da PR de `feat-08-cv-pdf-export`.
**Bloqueios:** —

## Handoff da última sessão
- Exportação de currículo em PDF: botão em `/cv` aciona `window.print()`; stylesheet `@media print` formaliza o layout (sem estética retrô), com cabeçalho de contato e headings de seção próprios para impressão.
- PR `feat/blog-inactive-posts` mergeado (posts desabilitados visíveis em `/blog` como "em breve"; favicon arcade).
- Deploy travou: GitHub Pages ficou com o deployment do commit `43fb6e2c9` marcado como `cancelled` (por causa de um timeout anterior) e recusou recriar um novo deployment para o mesmo SHA em `workflow_dispatch` repetidos ("Deployment cancelled" instantâneo). Solução: um novo commit em `main` (este) gera um SHA novo e destrava o próximo deploy automático.

## Última sessão
- Implementação de `feat-08-cv-pdf-export`: botão de download de currículo em PDF na página `/cv` via impressão do navegador com layout formal dedicado.

> Histórico completo em `progress-log.md`
