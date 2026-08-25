# feat-16 — Blog completo + revisão de linkagem SEO + forge-sdd beta

**Branch:** `feat/blog-completo-forge-sdd-beta`
**Status:** done

## Motivação
2 dos 8 posts (`post-4`, `post-5`) estavam com `enabled = false`, deixando a
série "Harness Engineering" incompleta no ar — incluindo o post de fechamento
sobre a origem do forge-sdd. Além disso, o forge-sdd teve duas releases beta
recentes (v2.0.0-beta e v2.2.0-beta) que ainda não são mencionadas no site.

## Escopo

1. **Publicar todos os posts do blog** — `src/data/sources/blog.config.toml`:
   `post-4` e `post-5` passam de `enabled = false` para `enabled = true`.

2. **Recomendar a versão beta do forge-sdd em `post-5.md`** — reescrever o
   parágrafo final para aconselhar o leitor a experimentar a beta mais
   recente, unificando em prosa o conteúdo de:
   - v2.0.0-beta ("Forge-SDD Slim"): telemetria determinística, `doctor` lendo
     telemetria, `lessons.md`, MCPs/VCS configuráveis, `FLOW.md` único.
   - v2.2.0-beta ("Agent Rules e Branch por Feature"): regras/comandos
     compartilhados entre agentes, branch única por feature.

   Link para a página de releases do GitHub, mantendo o link já existente
   para `forge-sdd.vercel.app`. **Exceção deliberada** à decisão da feat-06
   de manter a bio do forge-sdd version-neutral — aqui o pedido é
   explicitamente recomendar a beta.

3. **Revisão de linkagem interna (SEO)** — seguindo o processo da skill
   `blog-internal-linking`:
   - `post-6.md`: o link `[forge-sdd](https://forge-sdd.vercel.app)` passa a
     ser interno para `/blog/<slug-post-5>` (post-5 agora está publicado).
   - Avaliar demais posts em busca de conexões genuínas adicionais, sem
     forçar link onde não houver argumento real.

## Fora de escopo
- Alterar `src/data/sources/projects.json` (bio do forge-sdd na home/portfólio
  permanece version-neutral, decisão da feat-06).
- Criar posts novos.

## Critério de aceite
- `npm run build` gera rotas para todos os 8 posts sem erro.
- Link interno de `post-6.md` para `post-5.md` resolve para o slug real
  (gerado por `slugify()` a partir do título de `post-5.md`).
- `post-5.md` menciona a versão beta e linka a página de releases do GitHub.
