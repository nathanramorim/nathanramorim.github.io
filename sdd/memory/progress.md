# Progress — meu-projeto

## Status
```
Fase 0-2 (Foundation, LP, Rotas)   [x] done
Fase 3 — SEO/Polimento             [~] doing (03-5 pendente)
Fase 4 — Blog Toggle Config        [ ] todo
```

## Features ativas
| Feature | Branch | Status |
|---------|--------|--------|
| feat-03-seo-polimento | feat/seo-polimento | doing |
| feat-04-blog-toggle-config | feat/blog-toggle-config | todo |

## Próximo passo
**Iniciar:** feat-04-blog-toggle-config (config TOML para habilitar/desabilitar posts).
**Bloqueios:** 03-5 exige push na `main`, só deve rodar após merge da cadeia de PRs (#1→#4).

## Handoff da última sessão
- Branch `feat/blog-toggle-config` criada a partir de `feat/seo-polimento`; spec em `feat-04-blog-toggle-config.md`.
- Objetivo: TOML (`blog.config.toml`) com `enabled` por post, filtrando `GetAllPosts` e `getStaticPaths` de `/blog/[slug]`.

## Última sessão
- Spec de feat-04-blog-toggle-config criada (sem implementação ainda).

> Histórico completo em `progress-log.md`
