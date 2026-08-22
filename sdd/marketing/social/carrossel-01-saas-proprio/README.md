# Carrossel 01 — SaaS próprio

Carrossel de 8 slides (1080×1080) sobre o crescimento do mercado de
"SaaS próprio": empresas trocando assinatura de sistema de terceiro por
construir o próprio sistema (motivadas por flexibilidade/economia,
facilitadas por IA), o risco de pular etapas de engenharia
(segurança/manutenção/escala) e o prejuízo de até 5x no custo de corrigir
depois que o sistema já está em produção.

## Fonte do conteúdo
Texto e narrativa 100% reaproveitados do case já publicado na home do
site (`src/pages/index.astro`, seção hero + `.flow-section`), originado em
`sdd/discovery/discovery-04-saas-proprio.md` e `sdd/features/feat-14-case-saas-proprio.md`.
Nenhum discurso novo foi criado — o carrossel é uma tradução do mesmo
case para formato de post.

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor (`--cyan #2563eb`, `--green
#1d4ed8`, `--amber #d97706`, `--red #dc2626`, `--panel`/`--panel-border`),
tipografia Montserrat, padrão de "eyebrow" pill e cards com
`border-radius: 12px`. Foto usada: `src/assets/avatar.jpg` (não há
logotipo em SVG no projeto — a identidade usa o wordmark em texto
"Nathan Amorim.").

## Slides
1. `01.png` — capa / gancho
2. `02.png` — contexto: mercado mudando
3. `03.png` — o porém: só funciona se começar certo
4. `04.png` — diagrama do caminho de risco
5. `05.png` — as 3 consequências
6. `06.png` — destaque "5x mais caro"
7. `07.png` — diagrama do caminho saudável
8. `08.png` — CTA (WhatsApp) + os dois caminhos de entrada

Não existe ainda cronograma de publicação no projeto, então os arquivos
não seguem numeração de calendário — apenas a ordem do carrossel.

## Legenda
`legenda.md` — texto pronto pra publicar junto com o carrossel, com CTA
"link na bio" (em vez do link direto do WhatsApp, já que Instagram/LinkedIn
não permitem link clicável na legenda).
