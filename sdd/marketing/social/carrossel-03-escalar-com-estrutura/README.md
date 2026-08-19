# Carrossel 03 — Escalar com estrutura

Carrossel de 8 slides (1080×1080) sobre um único pilar de conteúdo: como
escalar e estruturar um sistema próprio direito desde o início, para que ele
cresça bem com a ajuda de IA em vez de travar ou ficar caro de manter depois.
Diferente dos carrosséis 01 e 02, este usa **composição centralizada em
todos os slides** — foto, título e blocos de conteúdo empilhados
verticalmente no centro do canvas, em vez da composição lado a lado usada
na capa dos carrosséis anteriores. Essa é uma decisão explícita de layout
para este pilar, mantida de forma consistente entre os 8 slides.

## Fonte do conteúdo
Texto e narrativa 100% reaproveitados do que já está publicado na home do
site (`src/pages/index.astro`): a copy do hero ("Sua empresa quer ter o
próprio sistema? Faça isso sem pagar caro depois." e o parágrafo que a
acompanha), os arrays `riskyFlow`/`riskyConsequences` e `healthyFlow` da
seção `.flow-section`, o `question-banner` ("Desenvolvimento de software não
deveria começar por 'qual tecnologia vamos usar?'...") e o CTA final "💬
Falar sobre meu projeto". Mesmo case do carrossel 01, mas resumido em torno
de um ângulo mais direto/pessoal — nenhum fato novo foi criado.

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor (`--cyan #2563eb`, `--green
#1d4ed8`, `--amber #d97706`, `--red #dc2626`, `--panel`/`--panel-border`),
tipografia Montserrat (única fonte do projeto, embutida via `@font-face`
com os arquivos woff2 reais, não aproximada), padrão de "eyebrow" pill e
cards com `border-radius: 12px`. Foto usada: `src/assets/avatar.jpg`, a
mesma foto do site e dos carrosséis 01 e 02, embutida sem alteração (não há
logotipo em SVG no projeto — a identidade usa o wordmark em texto "Nathan
Amorim.", mesmo tratamento visual dos carrosséis anteriores, incluindo o
ponto final em cyan).

## Layout: composição centralizada
Wordmark e contador de página no topo e bolinhas de progresso no rodapé
seguem a mesma posição/estilo dos carrosséis 01 e 02 (chrome consistente
entre carrosséis). A diferença fica no conteúdo de cada slide: em vez de
dividir a capa em foto de um lado e texto do outro, aqui a foto (slide 1) e
a assinatura (slide 8) ficam centralizadas e empilhadas verticalmente acima
do texto, e todo título/corpo/painel é centralizado horizontalmente. Para
evitar espaço morto no canvas 1080×1080 com esse layout centralizado, cada
slide usa ícones grandes, painéis e cards com padding generoso para ocupar
a altura disponível com informação.

## Slides
1. `01.png` — capa: foto centralizada + título "Sua empresa quer ter o
   próprio sistema? Faça isso sem pagar caro depois."
2. `02.png` — o que está mudando: mensalidade de terceiro → sistema
   próprio, mais fácil hoje com IA ajudando a construir
3. `03.png` — o porém: só funciona se começar pensando em quem vai cuidar
   do sistema amanhã
4. `04.png` — o caminho de risco: fluxo IA → software próprio → crescimento
   → problema, e as 3 consequências
5. `05.png` — destaque forte: "5x mais caro" consertar depois
6. `06.png` — o caminho certo: fluxo consultoria → estrutura → construção
   → evolução sem travar
7. `07.png` — a pergunta certa: "tecnologia" vs. "processo que o software
   vai sustentar"
8. `08.png` — CTA final: "💬 Falar sobre meu projeto" + assinatura

Não existe ainda cronograma de publicação no projeto, então os arquivos não
seguem numeração de calendário — apenas a ordem do carrossel, seguindo a
mesma convenção dos carrosséis 01 e 02.
