# Carrossel 02 — Quem é o Nathan

Carrossel de 8 slides (1080×1080) sobre o pilar de conteúdo "Quem é Nathan
Amorim e o que ele faz", escrito em linguagem simples para público leigo
(sem termo técnico) e sem uso de emojis. A capa apresenta só a pergunta
("Quem é o Nathan?") e a resposta vai sendo construída aos poucos, slide a
slide: primeiro quem ele é, depois o que ele faz na prática (4 partes), o
porquê da forma de trabalhar, e por fim o convite para conversar.

## Fonte do conteúdo
Texto e narrativa reaproveitados do conteúdo já publicado na home do site
(`src/pages/index.astro`): seção hero/`.hero-card` (nome, "10+ anos", "3+
anos como Tech Lead", "1 empresa fundada"), `solutions` (os 4 pilares —
Sistemas e produtos digitais, Integrações e automação, Inteligência
Artificial aplicada, Arquitetura e modernização, aqui reescritos em
linguagem simples/sem jargão a pedido do Nathan, mas sem inventar serviço
novo) e `.why-card` (a citação "Qual tecnologia vamos usar?" vs. "Qual
problema precisamos resolver?"). O chip "Cristão" no slide 02 é um dado
pessoal informado diretamente pelo Nathan, não extraído do site.

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor (`--cyan #2563eb`, `--green
#1d4ed8`, `--amber #d97706`, `--red #dc2626`, `--panel`/`--panel-border`),
tipografia Montserrat (única fonte do projeto), padrão de "eyebrow" pill e
cards com `border-radius: 12px`. Foto usada: `src/assets/avatar.jpg` — a
mesma foto do site (`src/presentation/components/Avatar.astro`) e dos
demais carrosséis, embutida sem alteração (não há logotipo em SVG no
projeto — a identidade usa o wordmark em texto "Nathan Amorim.", mesmo
tratamento visual dos carrosséis anteriores, incluindo o ponto final em
cyan). A pedido explícito do Nathan, nenhum emoji foi usado em nenhum
slide — os ícones dos 4 "o que eu faço" usam números (1-4) em vez de
pictogramas, e os textos de eyebrow/tag/botão são só texto.

## Slides
1. `01.png` — capa: só a foto do Nathan e a pergunta "Quem é o Nathan?",
   sem resposta ainda (a resposta é construída nos slides seguintes)
2. `02.png` — quem sou eu: nome, explicação simples do que faz há mais de
   10 anos, estatísticas (10+ anos, 3+ anos liderando equipes, 1 empresa
   fundada, IA usada em projetos reais) e chips pessoais (Barbacena/MG,
   Cristão)
3. `03.png` — o que eu faço 1/4: "Eu construo sistemas para empresas"
4. `04.png` — o que eu faço 2/4: "Eu conecto os programas que você já usa"
5. `05.png` — o que eu faço 3/4: "Eu uso inteligência artificial pra
   ajudar no dia a dia"
6. `06.png` — o que eu faço 4/4: "Eu organizo sistemas que já existem"
7. `07.png` — por que eu trabalho assim (citação processo vs. tecnologia)
8. `08.png` — CTA final: "Falar sobre meu projeto" + assinatura

Não existe ainda cronograma de publicação no projeto, então os arquivos não
seguem numeração de calendário — apenas a ordem do carrossel, seguindo a
mesma convenção dos demais carrosséis.
