# Carrossel 04 — SAST com SonarQube + Claude

Carrossel de 8 slides (1080×1080) sobre um único pilar de conteúdo: como
gerar um relatório de segurança (SAST) do próprio código conectando o
SonarQube ao Claude, em linguagem simples para público leigo (sem virar
aula de segurança). Segue a mesma **composição centralizada** do carrossel
03 (wordmark e contador no topo, eyebrow pill logo abaixo, conteúdo
empilhado e centralizado no meio, bolinhas de progresso no rodapé) e
introduz, dentro desse mesmo padrão, um elemento de "ícone grande em
círculo" acima do título nos slides de conceito/passo — recurso já usado
no carrossel 03 (ex.: o ícone da barreira no slide do "caminho de risco")
e replicado aqui para preencher o canvas sem espaço morto.

## Fonte do conteúdo
Roteiro passado diretamente para este carrossel (não extraído de página do
site): a ideia de que todo código tem, sem querer, "portas destrancadas"
(falhas de segurança invisíveis a olho nu), a existência do SAST como
categoria de ferramenta, o SonarQube como ferramenta concreta (gratuita,
com painel na nuvem), o passo a passo de gerar uma chave de API no Sonar e
conectá-la ao Claude, o prompt literal usado para pedir o mapeamento em
markdown, o formato esperado do relatório (separado por gravidade) e o
fechamento orientando a transformar o relatório em tarefas priorizadas
(nem toda vulnerabilidade é urgente). Nenhum dado novo sobre o Nathan foi
introduzido; o CTA final replica o mesmo texto e padrão visual já usados
nos carrosséis 01 e 03 ("💬 Falar sobre meu projeto" + domínio
`nathanamorim.github.io`).

## Identidade visual
Extraída diretamente do design system em produção do site
(`src/styles/global.css`): tokens de cor exatos (`--bg #ffffff`, `--panel
#f6f8fb`, `--panel-border #e4e9f0`, `--panel-border-strong #bfd3f5`,
`--text #0f172a`, `--text-dim #5b6675`, `--cyan #2563eb`, `--green
#1d4ed8`, `--amber #d97706`, `--red #dc2626`, `--radius 12px`), tipografia
Montserrat (única fonte do projeto — `--pixel`/`--mono`/`--body` no CSS do
site apontam todos para ela; aqui embutida via `@font-face` com o arquivo
variável `.woff2` real baixado do Google Fonts e codificado em base64, não
uma fonte "parecida"), padrão de "eyebrow" pill (fundo `#eff4ff`, borda
`--panel-border-strong`, texto `--cyan`, uppercase, `font-weight:800`,
`letter-spacing:1.2px`, `border-radius:999px`) e cards com
`border-radius:12px`. Foto usada: `src/assets/avatar.jpg`, a mesma foto
dos carrosséis anteriores, embutida sem alteração. Não há logotipo em SVG
no projeto — a identidade usa o wordmark em texto "Nathan Amorim.", com o
ponto final em cyan, mesmo tratamento dos carrosséis 01/02/03.

## Método de geração
Cada slide foi montado como HTML+CSS local (tokens de cor/tipografia
copiados literalmente do `global.css`, sem aproximação), renderizado com
Chromium via Playwright em viewport 1080×1080 (`deviceScaleFactor: 1`) e
conferido visualmente slide a slide antes de aceitar o resultado. Em uma
primeira rodada, o emoji usado para representar a "ferramenta" (pretendia
ser 🩻 raio-x) foi digitado com o código Unicode errado e renderizou como
🧟 (zumbi) — o erro só foi percebido ao reler as imagens geradas, por isso
foi trocado por 🔬 (microscópio, com suporte confirmado na fonte de emoji
do ambiente) tanto no eyebrow do slide 03 quanto no diagrama do slide 05.
Também foi adicionado um "ícone grande em círculo" acima do título nos
slides de conceito (02, 03, 04, 05, 06, 07), pois a primeira renderização
tinha espaço morto perceptível acima/abaixo do conteúdo centralizado —
esse elemento é o mesmo recurso visual já usado no carrossel 03 para
preencher o canvas com informação em vez de vazio.

## Slides
1. `01.png` — capa/gancho: foto centralizada + "Todo código escreve, sem
   querer, algumas portas destrancadas."
2. `02.png` — o problema: falhas invisíveis (senha esquecida, trecho
   copiado, configuração aberta) e a definição de SAST
3. `03.png` — a ferramenta: SonarQube como "raio-x do projeto", gratuito e
   com painel na nuvem
4. `04.png` — passo 1 de 4: gerar a chave de API no Sonar (Minha Conta ›
   Segurança › Gerar Token), com a analogia do "crachá de visitante"
5. `05.png` — passo 2 de 4: colar a chave nas configurações do Claude,
   ligando Sonar (sabe onde estão os problemas) e Claude (explica em
   português claro)
6. `06.png` — passo 3 de 4: o prompt exato em destaque de bloco de
   citação ("Mapeie as vulnerabilidades e inconsistências encontradas
   para o projeto \<nome do projeto\> em markdown.")
7. `07.png` — passo 4 de 4: o resultado é um relatório em markdown,
   separado por gravidade (alta/média/baixa), pronto para mostrar ao time
8. `08.png` — fechamento: recap numerado dos 4 passos, aviso para
   priorizar antes de virar tarefas, CTA "💬 Falar sobre meu projeto" +
   domínio + assinatura, no mesmo padrão dos carrosséis anteriores

Não existe ainda cronograma de publicação no projeto, então os arquivos
não seguem numeração de calendário — apenas a ordem do carrossel, seguindo
a mesma convenção dos carrosséis 01, 02 e 03.
