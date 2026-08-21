# Story 01 — Cuidados ao construir seu próprio SaaS

Imagem única para Story do Instagram (1080×1920), chamando atenção para o
post do blog "O detalhe que a maioria das empresas ignora ao construir o
próprio SaaS" (`src/content/blog/post-7.md`). Tom convincente, vocabulário
simples para público leigo (donos de negócio, não técnicos), sem emojis,
sem traço (—, -) nem sublinhado (_) no texto.

## Fonte do conteúdo
Mesma ideia central do post-7 e do carrossel 03: a IA facilitou construir
o próprio sistema, mas sem cuidado com estrutura o problema aparece depois
(manutenção trava, sistema fica grande demais pra entender, conserto custa
até 5x mais — fato já usado no case da home, `riskyConsequences` em
`src/pages/index.astro`, e no carrossel 01/03). Nenhum fato novo foi
inventado.

## Identidade visual
Mesmos tokens de `src/styles/global.css` (`--cyan #2563eb`, `--red
#dc2626`, `--panel-border`), tipografia Montserrat, wordmark em texto
"Nathan Amorim.", foto `src/assets/avatar.jpg` (mesma foto do site e dos
carrosséis). Layout respeita as zonas seguras de story do Instagram: ~150px
livres no topo (onde o Instagram sobrepõe o avatar/usuário) e uma faixa
inferior maior reservada, com uma caixa tracejada marcando visualmente
onde posicionar o link sticker de verdade — a caixa é só uma referência de
posicionamento, não é um sticker real do Instagram.

## Uso
1. Publicar `01.png` como Story.
2. Adicionar o sticker de link nativo do Instagram apontando pro post,
   posicionando-o sobre a área tracejada "espaço reservado pro link do
   story" (a caixa não aparece funcional, é só guia de layout — pode
   cobrir ou remover visualmente depois de posicionar o sticker real).
