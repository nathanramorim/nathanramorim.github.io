# Progress — nathan-amorim (site pessoal)

## Status
```
Fase 0-13 (Foundation → Practical Example Section)   [x] done — no ar em produção
Fase 14 (Case SaaS Próprio)                          [ ] in-progress
Fase 15 (Portfólio de Projetos)                      [ ] in-progress
```

## Features ativas
| Feature | Branch | Status | PR |
|---------|--------|--------|-----|
| feat-14-case-saas-proprio | feat/case-saas-proprio | in-progress | — |
| feat-15-portfolio-projetos | feat/portfolio-projetos | in-progress | — |

## Próximo passo
**Aguardando:** commit, push e PR da `feat/case-saas-proprio`.
**Aguardando:** aplicar o patch da `feat/portfolio-projetos` (gerado numa
sessão sem terminal na máquina), revisar e fazer commit/push/PR. Trocar os
3 cards ilustrados (Hub de Agentes, Agenda Isô, Gestor de Aluguéis) por
screenshot real quando der.
**Bloqueios:** —

## Handoff da última sessão
- Discovery 04: mercado migrando de SaaS de terceiros pra SaaS próprio,
  sem considerar segurança/manutenção/escala — corrigir depois de já em
  operação custa até 5x mais.
- Decisões D4/D6: nova seção na home (não em `/cv`), case 100%
  prospectivo (sem cliente real).
- `feat-14-case-saas-proprio`: nova seção `.saas-section` inserida entre
  "O que eu resolvo" e "Um exemplo prático", com os dois caminhos
  (evoluir SaaS existente / começar do zero) e CTA de WhatsApp. Build
  validado localmente, falta commit/push/PR.
- `feat-15-portfolio-projetos`: página `/projetos` nova, 6 projetos no
  formato problema/solução/resultado, com link no nav. Build e checagem
  visual (desktop + mobile) validados via Playwright. Falta o Nathan
  aplicar o patch, revisar e fazer commit/push/PR.

## Última sessão
- Discovery 04 (case SaaS próprio) + `/split-features` (plan-04,
  feat-14) + implementação da seção na home.
- `/nova-feature` portfolio-projetos: criação da página `/projetos` com
  os 6 principais projetos do Nathan (feat-15).

> Histórico completo em `progress-log.md`
