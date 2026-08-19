# Critérios e Definições Técnicas 04 — Case "seu próprio SaaS"

## 1. Escopo técnico
Referência: `discovery-04-saas-proprio.md`.

Duas opções de arquitetura de informação para hospedar o case, seguindo
a "Separação de Conteúdo" (`constitution.md`, Regra de Ouro 1 — todo
conteúdo editável em `src/data/sources/*.json`):

- **Opção A — nova entrada em `src/data/sources/projects.json`**: reusa
  `IProjectRepository`/`GetProjectsList`/`ProjectRepository.ts` já
  existentes, aparece em `/cv.astro` junto do `forge-sdd`. Menor esforço,
  mas o componente que renderiza `Project` em `/cv.astro` foi desenhado
  para projeto técnico entregue, não para peça de venda/captação — pode
  exigir ajuste de campos (`highlights`, `compatibility`, `tags` não
  fazem sentido pra este case).
- **Opção B — nova seção na home (`index.astro`)**: mais alinhado ao
  objetivo de captação (a home é a página de conversão, `/cv` é currículo
  técnico — ver `feat-12`, que já removeu currículo da home pra não
  competir por atenção). Precisa de nova seção seguindo o Design System
  (`eyebrow`, `.section-title`, ritmo `padding: 72px 0`), reusando padrão
  visual de `.solution-card` para os dois caminhos (evoluir / começar do
  zero), sem inventar componente novo.

Recomendação técnica: **Opção B**. A Opção A reaproveita código, mas
força um `Project` genérico a carregar uma peça de venda — descolamento
de responsabilidade do modelo (`Project` = "projeto que entreguei"; este
case é "problema que eu resolvo/capto", mais próximo da seção
`.solutions-section` já existente). Decisão final registrada como D4 em
`spec/decisions.md` — pendente aprovação do usuário.

## 2. Conteúdo — texto, não layout
Como nas discoveries 02/03, esta feature é primariamente **texto** em
linguagem não técnica de venda, não estrutura nova de componente:
- Nomear o risco em dinheiro/tempo ("até 5x mais caro depois"), não em
  jargão técnico (nada de "dívida técnica", "débito arquitetural",
  "escalabilidade horizontal" no corpo do texto voltado ao leigo — esses
  termos, se aparecerem, ficam em um nível secundário/expandível, não na
  primeira leitura).
- Cobrir os dois caminhos de entrada como escolha explícita pro leitor:
  "já tenho um SaaS e quero evoluir" vs. "vou começar do zero" — cada um
  com CTA próprio ou CTA único que aceita os dois (a decidir com D5).
- Terminar em CTA de WhatsApp, mesmo padrão do restante do site
  (`constitution.md`, "Canais diretos de contato via WhatsApp").
- Manter tom direto já estabelecido, sem virar peça agressiva de vendas
  (sem gatilho de escassez/urgência artificial — não é o tom do site).

## 3. Pendências (bloqueia implementação)
- **D4 (`spec/decisions.md`):** local do case — Opção A (`projects.json`
  → `/cv`) ou Opção B (nova seção na home). Recomendação técnica é B.
- **D5:** o usuário precisa fornecer o texto de venda em si (título,
  corpo, os dois caminhos, CTA) — este documento não escreve copy de
  venda, só a estrutura/critério. Sem isso, `/nova-feature` não tem spec
  de conteúdo pra implementar.
- **D6:** este case é 100% prospectivo (captação) ou existe algum
  cliente/projeto real anonimizado que pode ilustrar um dos dois
  caminhos (evoluir/começar do zero)? Afeta se o case usa exemplo
  concreto (como a seção "Um exemplo prático" da `feat-13`) ou fica
  só no nível de proposta.

## 4. Critérios de aceitação (DoD)
- [ ] Decisão de local (D4) registrada em `spec/decisions.md` antes de
      abrir a feature.
- [ ] Novo case cobre os dois caminhos de entrada (evoluir SaaS existente
      / começar do zero) com CTA de WhatsApp.
- [ ] Linguagem não técnica na primeira leitura (jargão, se existir, fica
      em camada secundária).
- [ ] Segue o Design System (`eyebrow`, `.section-title`, ritmo de 72px
      se for seção nova na home; ou schema de `Project` se for Opção A).
- [ ] Texto final de venda aprovado pelo usuário antes do commit (D5).
- [ ] Nenhuma seção/case existente foi removido ou diluído — só
      adicionado.
- [ ] `npm run build` passa sem erros.
- [ ] Validação visual local antes do push.

## 5. Fora de escopo
- Página dedicada de case study longo (antes/depois com métricas
  detalhadas) — este case é captação, não relatório de projeto fechado.
- Formulário de captação dedicado ou CRM — CTA continua sendo WhatsApp,
  como todo o resto do site.
- Reescrever `.solutions-section` ou `/cv` existentes.
