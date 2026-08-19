# Decisões — nathan-amorim (site pessoal)

## Resolvidas

| # | Decisão | Resolução | Motivo |
|---|---------|-----------|--------|
| D1 | Rota `/cv` continua existindo, só sem link no nav principal (Opção A) | Confirmado pelo usuário | Não quebra links já compartilhados nem o export de PDF; menor risco |
| D2 | Exemplo prático da `feat-13` passou a ser um case real anonimizado (sem nome de cliente/empresa) | Usuário trouxe o case depois da primeira versão hipotética ir ao ar na PR #17 | Case real: gestão manual (Excel/Word/agenda de papel) + comunicação via WhatsApp, resolvido com plataforma central de documentos/contratos/pendências com encaminhamento unilateral pro WhatsApp |
| D3 | Conteúdo do cenário: reescrito a partir do case real fornecido pelo usuário, mantendo linguagem sem jargão técnico | Usuário descreveu o case em texto livre | Substitui a primeira versão sugerida pelo Claude (cenário hipotético de loja/pedido) |
| D4 | Case "seu próprio SaaS" entra como nova seção na **home** (`index.astro`), não em `projects.json`/`/cv` | Confirmado pelo usuário | Home é a página de conversão/captação; `/cv` é currículo técnico (ver `feat-12`) |
| D6 | Case é 100% prospectivo — sem cliente/projeto real por trás | Confirmado pelo usuário | Comunica o cenário de mercado e a oferta de assessoria, sem case fechado com resultado medido |

## Abertas

| # | Questão |
|---|---------|
| D5 | Texto final de venda da seção (título, corpo, os dois caminhos — evoluir/começar do zero, CTA) — rascunho em `plan-04-saas-proprio.md`, pendente aprovação final do usuário antes do commit |
