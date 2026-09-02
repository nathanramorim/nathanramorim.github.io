# Progress — nathan-amorim (site pessoal)

## Status
```
Fase 0-13 (Foundation → Practical Example Section)   [x] done — no ar em produção
Fase 14 (Case SaaS Próprio)                          [x] done — publicado no ar
Fase 15 (Portfólio de Projetos)                      [x] done — publicado no ar
```

## Features ativas
Nenhuma no momento (`feat-17-post-embeddings-fundamentos` implementada,
aguardando merge da branch `feat/post-embeddings-fundamentos`).

## Próximo passo
**Melhoria futura:** Trocar os 3 cards ilustrados na página `/projetos` (Hub de Agentes, Agenda Isô, Gestor de Aluguéis) por screenshot real quando disponíveis.
**Bloqueios:** —

## Handoff da última sessão
- `feat-17-post-embeddings-fundamentos`: post-8 criado (embeddings/RAG),
  sem em-dash no corpo, com link interno genuíno pro post-5 (forge-sdd).
  Campo `cover` adicionado ao schema da collection `blog` e wired em
  `[slug].astro` → `RetroLayout` → `SEO.astro` (og:image/twitter:image).
  Imagem de capa gerada em `public/blog/post-8-cover.svg`, estilo retro do
  site. Build local e preview no browser verificados com sucesso.
  Falta abrir PR e mergear em `main`.

## Última sessão
- Liberados todos os posts do blog e revisada a linkagem interna SEO por assunto.

> Histórico completo em `progress-log.md`
