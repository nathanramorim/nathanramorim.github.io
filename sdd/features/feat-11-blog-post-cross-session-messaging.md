# feat/blog-post-cross-session-messaging

**Branch:** `feat/blog-post-cross-session-messaging`
**Fase:** 11
**Depende de:** `feat-07-blog-post-publishing` (fluxo de publicação incremental do blog)
**Status:** `in-progress`

## Objetivo
Publicar um novo post no blog ("Já usei sessão cruzada do Claude Code sem
querer"), seguindo a estrutura de conteúdo já existente em
`src/content/blog/*.md` — sem criar nova arquitetura — com um CTA de
download de PDF (guia complementar) e uma assinatura padrão ao final de
todo post.

## Contexto
Pedido do usuário: post sobre a descoberta do recurso de cross-session
messaging do Claude Code (`ListAgents`/`SendMessage`), com exemplo prático
(duas sessões trabalhando na mesma base sem se comunicar), explicação de
como funciona e como o usuário controla o comportamento
(`crossSessionInbound`), fechando com CTA para baixar um guia em PDF.

## Abordagem
- Segue o padrão existente 100%: arquivo `src/content/blog/post-6.md` com
  o mesmo frontmatter (`title`, `eyebrow`, `order`, `summary`, `hashtags`)
  usado pelos posts 0-5, validado pelo schema em `src/content.config.ts`.
- Diferente dos posts 0-5 (série "Harness Engineering", eyebrow `post N de
  5`), este é um post avulso — eyebrow livre (`"descoberta · claude
  code"`), não numerado como parte da série.
- Publicação incremental via `src/data/sources/blog.config.toml`
  (`[posts.post-6] enabled = false` até validação local, depois `true`),
  mesmo fluxo do `feat-07`.
- CTA de PDF: arquivo não foi anexado à conversa (sem binário
  disponível), então o botão aponta para o link do Google Drive fornecido
  pelo usuário, em formato de download direto
  (`drive.google.com/uc?export=download&id=...`) em vez do link de
  visualização, `target="_blank"`.
- Assinatura "Nathan Amorim · nathanramorim.github.io": como nenhum post
  existente tinha esse elemento ainda, adicionada ao template compartilhado
  `src/pages/blog/[slug].astro` (não só no post novo), para virar padrão de
  todos os posts a partir de agora — coerente com a regra da constitution
  de registrar mudanças de padrão visual.
- Novas classes utilitárias em `global.css` (`.article ul/li`,
  `.article-cta`, `.post-signature`) reaproveitáveis por qualquer post
  futuro que precise de lista, botão de CTA ou assinatura.

## Critério de conclusão
```bash
grep -n "post-6" src/data/sources/blog.config.toml
npm run build
# validar visualmente: rota /blog/ja-usei-sessao-cruzada-do-claude-code-sem-querer
# validar clique no botão de download do PDF
```

## Tarefas
- [x] **11-1** Adicionar classes reutilizáveis (`.article-cta`,
      `.post-signature`, `.article ul/li`) em `global.css`.
- [x] **11-2** Adicionar assinatura padrão ao template
      `src/pages/blog/[slug].astro`.
- [x] **11-3** Criar `src/content/blog/post-6.md` com o conteúdo definido.
- [x] **11-4** Registrar `post-6` em `blog.config.toml`.
- [x] **11-5** Rodar local (`npm run build` + servidor estático), validar
      rota `/blog/ja-usei-sessao-cruzada-do-claude-code-sem-querer` e o link
      de download do PDF (`curl -I` confirmou
      `content-disposition: attachment; filename="sessaocruzadaguia.pdf"`).
- [x] **11-6** Ativar `post-6` (`enabled = true`), build final.
- [x] **11-7** Atualizar `sdd/features/index.md` e `sdd/memory/progress.md`.
- [x] **11-8** Linkar `post-6` aos posts relacionados da série Harness
      Engineering (`post-0`, `post-5`) com âncora contextual dentro do
      texto — validado via `grep` no HTML gerado.
- [x] **11-9** Criar skill `.claude/skills/blog-internal-linking/SKILL.md`
      para aplicar essa análise automaticamente em posts futuros; registrar
      em `sdd/skills/index.md` e `constitution.md`.

## Arquivos gerados/alterados
```
src/content/blog/post-6.md
src/pages/blog/[slug].astro
src/styles/global.css
src/data/sources/blog.config.toml
sdd/features/feat-11-blog-post-cross-session-messaging.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
