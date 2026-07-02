# Progress — meu-projeto

## Status
```
Fase 0 — Foundation      [x] done
Fase 1 — Landing Page    [x] done
Fase 2 — Rotas           [x] done
```

## Features ativas
| Feature | Branch | Status |
|---------|--------|--------|
| feat-03-seo-polimento | feat/seo-polimento | todo |

## Próximo passo
**Iniciar:** feat-03-seo-polimento (SEO, responsividade e deploy CI/CD).
**Bloqueios:** —

## Handoff da última sessão
- feat-02-routes concluída (branch `feat/routes`, PR aberto): `/cv` com timeline de experiências e educação, `/blog` listando posts (mais recentes primeiro) e `/blog/[slug]` renderizando o Markdown com o layout retrô.
- Slugs de posts agora vêm do título (`slugify`), não do nome do arquivo; `GetFeaturedPosts` (feat-01) ajustado para reaproveitar essa lógica.
- `npm run build` e as 3 rotas validadas com status 200 no dev server.

## Última sessão
- Implementação completa de feat-02-routes e abertura de PR para revisão.

> Histórico completo em `progress-log.md`
