# Carrossel 02 — Quem é o Nathan

Carrossel de 7 slides (1080×1080) com uma ideia central: Nathan resolve
problemas com tecnologia, e nessa era de IA o que evita problema lá na
frente é estruturar antes de criar — e é nisso que ele ajuda. A capa
apresenta só a pergunta ("Quem é o Nathan?") e a resposta vai sendo
construída aos poucos: quem ele é, o contexto (a IA acelerou a criação de
sistemas), o risco de pular a estrutura, a forma como ele ajuda a evitar
esse risco, um bloco de credibilidade e o convite para conversar.

Escrito em linguagem simples para público leigo (sem termo técnico), sem
emojis e sem uso de traço (—, -) ou sublinhado (_) no texto, a pedido do
Nathan.

## Fonte do conteúdo
A ideia central ("eu resolvo problemas com tecnologia, e ajudo a
estruturar antes de criar para evitar problema") foi passada diretamente
pelo Nathan. O contexto de risco (sistema refeito do zero, manutenção
travada, custo alto de manter) reaproveita o case já publicado na home do
site (`src/pages/index.astro`, `riskyConsequences`) e no carrossel 01. As
estatísticas do slide 06 (10+ anos, 3+ anos liderando equipes, 1 empresa
fundada) vêm do `.hero-card` da home. O chip "Cristão" é um dado pessoal
informado diretamente pelo Nathan, não extraído do site.

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor (`--cyan #2563eb`, `--green
#1d4ed8`, `--red #dc2626`, `--panel`/`--panel-border`), tipografia
Montserrat (única fonte do projeto), padrão de "eyebrow" pill e cards com
`border-radius: 12px`. Foto usada: `src/assets/avatar.jpg` — a mesma foto
do site (`src/presentation/components/Avatar.astro`) e dos demais
carrosséis, embutida sem alteração. Não há logotipo em SVG no projeto — a
identidade usa o wordmark em texto "Nathan Amorim.". Nenhum emoji foi
usado em nenhum slide, e o texto evita traço e sublinhado (só vírgulas e
pontos).

## Slides
1. `01.png` — capa: só a foto do Nathan e a pergunta "Quem é o Nathan?"
2. `02.png` — a ideia central: "Eu resolvo problemas com tecnologia."
3. `03.png` — contexto: a IA ajuda a criar sistemas muito mais rápido
4. `04.png` — o risco: criar rápido sem planejamento custa caro depois
   (com as 3 consequências)
5. `05.png` — como ele ajuda: "Estruturar antes de criar", para o sistema
   crescer sem travar
6. `06.png` — sobre mim: estatísticas (10+ anos, 3+ anos liderando
   equipes, 1 empresa fundada, IA usada em projetos reais) e chips
   pessoais (Barbacena/MG, Cristão)
7. `07.png` — CTA final: "Falar sobre meu projeto" + assinatura

Não existe ainda cronograma de publicação no projeto, então os arquivos não
seguem numeração de calendário — apenas a ordem do carrossel, seguindo a
mesma convenção dos demais carrosséis.
