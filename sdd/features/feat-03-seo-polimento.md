# feat/seo-polimento

**Branch:** `feat/seo-polimento`
**Fase:** 3
**Depende de:** `feat-02-routes`
**Status:** `done`

## Objetivo
Garantir o polimento visual de transições e micro-animações, adicionar tags SEO de alta qualidade e certificar que a esteira de CI/CD realiza o deploy no GitHub Pages sem falhas.

## Critério de conclusão
```bash
# Validar se o site final builda com sucesso e o arquivo sitemap.xml foi gerado
npm run build
```

## Tarefas
- [x] **03-1** Implementar tags meta de SEO em todas as páginas (título descritivo, meta descrição, tags de Open Graph e Twitter Cards).
- [x] **03-2** Otimizar o carregamento de fontes do Google de forma assíncrona para evitar FOUT (Flash of Unstyled Text).
- [x] **03-3** Testar a responsividade móvel de todas as seções (LP, CV, Blog e posts) simulando resoluções de celulares e tablets.
- [x] **03-4** Garantir a acessibilidade do site (WCAG AA para contraste de cores do terminal, tags alt em imagens e tratamento de `@media (prefers-reduced-motion)` para suspender animações de terminal piscante).
- [x] **03-5** Disparar o workflow de CI/CD do GitHub Actions fazendo push na main e auditar se o site é atualizado corretamente no domínio do GitHub Pages.

## Arquivos gerados
```
src/presentation/components/SEO.astro
public/robots.txt
```

## Notas de implementação
- **03-1:** `SEO.astro` integrado ao `RetroLayout.astro` (title, description, canonical, Open Graph, Twitter Cards) em todas as páginas. `@astrojs/sitemap` adicionado ao `astro.config.mjs`; o build gera `sitemap-index.xml` + `sitemap-0.xml` (nome padrão da integração oficial, não literalmente `sitemap.xml`) e `public/robots.txt` aponta para ele.
- **03-2:** fontes do Google migradas de `@import` (bloqueante) em `global.css` para `<link rel="preconnect">` + `<link rel="stylesheet" media="print" onload="this.media='all'">` com fallback `<noscript>` no `RetroLayout.astro`.
- **03-3:** validado com screenshots reais em viewport mobile (375×812) nas páginas `/`, `/cv` e `/blog/[slug]` via Playwright; adicionados breakpoints em `global.css` (`@media (max-width: 640px)`) para chrome-nav, hero e post-nav.
- **03-4:** adicionado skip-link ("Pular para o conteúdo"), sem imagens de conteúdo pendentes de `alt` nas páginas ativas, animações do cursor e do Terminal já respeitavam `prefers-reduced-motion` (mantido).
- **03-5:** concluído após o merge da cadeia de PRs (#1-#6) na `main`. Foram corrigidos dois problemas de infraestrutura no processo: (1) `withastro/action` usava Node 20 por padrão, incompatível com o requisito `>=22.12.0` do Astro 7 — corrigido fixando `node-version: '22.12.0'`; (2) o Pages do repositório ainda estava configurado como `build_type: legacy` (Deploy from a branch), conflitando com o deploy via Actions — corrigido via `gh api -X PUT .../pages -f build_type=workflow`. Deploy disparado manualmente e confirmado no ar em https://nathanramorim.github.io/.

## Skills relevantes
(consultar `skills/index.md`)
