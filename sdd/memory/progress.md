# Progress — meu-projeto

## Status
```
Fase 0-2 (Foundation, LP, Rotas)   [x] done
Fase 3 — SEO/Polimento             [~] doing (03-5 pendente)
Fase 4 — Blog Toggle Config        [x] done
```

## Features ativas
| Feature | Branch | Status |
|---------|--------|--------|
| feat-03-seo-polimento | feat/seo-polimento | doing |

## Próximo passo
**Iniciar:** revisar/mergear PRs #1→#5 na main; depois validar 03-5 (deploy real via Actions).
**Bloqueios:** 03-5 exige push na `main`, só deve rodar após merge da cadeia de PRs.

## Handoff da última sessão
- feat-04-blog-toggle-config concluída (PR aberto): `blog.config.toml` + `BlogConfigRepository` controlam `enabled` por post; `GetAllPosts` e `getStaticPaths` de `/blog/[slug]` filtram desabilitados.
- Testado desabilitando `post-5`: sumiu de `/blog`/home, sem rota gerada. Revertido para `true`.

## Última sessão
- Implementação de feat-04-blog-toggle-config e abertura de PR.

> Histórico completo em `progress-log.md`
