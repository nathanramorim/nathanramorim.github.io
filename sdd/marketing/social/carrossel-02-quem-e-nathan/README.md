# Carrossel 02 — Quem é o Nathan

Carrossel de 8 slides (1080×1080) sobre o pilar de conteúdo "Quem é Nathan
Amorim e como ele pode ajudar": apresentação pessoal (nome, cargo, tempo de
experiência, localização), os 4 pilares de serviço que ele oferece, o porquê
por trás da forma de trabalhar (processo antes de tecnologia) e um convite
para conversar.

## Fonte do conteúdo
Texto e narrativa 100% reaproveitados do conteúdo já publicado na home do
site (`src/pages/index.astro`): seção hero/`.hero-card` (nome, cargo, "10+
anos", "3+ anos como Tech Lead", "1 empresa fundada", tagline "Resolvedor de
problemas, com tecnologia"), `solutions` (os 4 pilares — Sistemas e produtos
digitais, Integrações e automação, Inteligência Artificial aplicada,
Arquitetura e modernização), `.why-card` (a citação "Qual tecnologia vamos
usar?" vs. "Qual problema precisamos resolver?") e o CTA final "💬 Falar
sobre meu projeto". Nenhum fato novo sobre o Nathan foi criado — o carrossel
é uma tradução do conteúdo já existente no site para formato de post.

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor (`--cyan #2563eb`, `--green
#1d4ed8`, `--amber #d97706`, `--red #dc2626`, `--panel`/`--panel-border`),
tipografia Montserrat (única fonte do projeto), padrão de "eyebrow" pill e
cards com `border-radius: 12px`. Foto usada: `src/assets/avatar.jpg` — a
mesma foto do site (`src/presentation/components/Avatar.astro`) e do
carrossel 01, embutida sem alteração (não há logotipo em SVG no projeto — a
identidade usa o wordmark em texto "Nathan Amorim.", mesmo tratamento visual
do carrossel 01, incluindo o ponto final em cyan).

## Slides
1. `01.png` — capa: foto do Nathan de um lado, chamada "Quem é o Nathan e
   como ele pode te ajudar" do outro
2. `02.png` — quem sou eu: nome, cargo, tagline e estatísticas (10+ anos,
   3+ anos como Tech Lead, 1 empresa fundada, IA aplicada a produtos reais)
3. `03.png` — como posso ajudar 1/4: Sistemas e produtos digitais
4. `04.png` — como posso ajudar 2/4: Integrações e automação
5. `05.png` — como posso ajudar 3/4: Inteligência Artificial aplicada
6. `06.png` — como posso ajudar 4/4: Arquitetura e modernização
7. `07.png` — por que trabalhar comigo (citação processo vs. tecnologia)
8. `08.png` — CTA final: "Falar sobre meu projeto" + assinatura

Não existe ainda cronograma de publicação no projeto, então os arquivos não
seguem numeração de calendário — apenas a ordem do carrossel, seguindo a
mesma convenção do carrossel 01.
