# Progress — nathan-amorim (site pessoal)

## Status
```
Fase 0-10 (Foundation → Eyebrow Badge Consistency)   [x] done — no ar em produção
Fase 11 (Blog Post: Cross Session Messaging)         [ ] in-progress
```

## Features ativas
| Feature | Branch | Status | PR |
|---------|--------|--------|-----|
| feat-11-blog-post-cross-session-messaging | feat/blog-post-cross-session-messaging | in-progress | — |

## Próximo passo
**Aguardando:** validar post-6 localmente (rota + botão de PDF), ativar em `blog.config.toml` e publicar.
**Bloqueios:** —

## Handoff da última sessão
- Site inteiro retematizado de retro-terminal (dark) para tema claro/azul
  com Montserrat, mensagem focada em "o que eu resolvo" em vez de stack
  técnica (feat direto em `main`, sem branch dedicada — ver commits
  `654526d`..`f4c10f6`..atual).
- Home passou a incluir a seção completa de currículo (case, experiência,
  skills, sidebar com números/contato/formação/idiomas/certificações),
  reaproveitada também em `/cv` via componente `ResumeSection`.
- `feat-10-eyebrow-badge-consistency`: corrigidos bugs reais de CSS
  (eyebrow perdendo cor/tamanho por especificidade, pill esticando 100% da
  largura, `.question-banner` sem background, falta de variante para fundo
  escuro, espaçamento entre seções inconsistente). Padrão `.eyebrow` /
  `.eyebrow-on-dark` e ritmo `padding: 72px 0` documentados na
  `constitution.md`.
- Deploy via GitHub Pages funciona automaticamente a cada merge/push em
  `main`.

## Última sessão
- `feat-10-eyebrow-badge-consistency`: consistência do badge eyebrow,
  contraste sobre fundo escuro, espaçamento entre seções e `color-scheme`
  para evitar dark mode automático do navegador.

> Histórico completo em `progress-log.md`
