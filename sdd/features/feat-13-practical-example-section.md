# feat/practical-example-section

**Branch:** `feat/practical-example-section`
**Fase:** 13
**Depende de:** `sdd/discovery/discovery-03-comunicacao-publico-leigo.md`, `criteria-03-comunicacao-publico-leigo.md`
**Status:** `in-progress`

## Objetivo
Adicionar uma seção de exemplo prático concreto na home, entre "O que eu
resolvo" e "Minha forma de trabalhar", pra dar ancoragem ao público leigo
sem alterar nem diluir as seções que já comunicam bem pro público
corporativo.

## Contexto
Discovery 03: feedback indica que a comunicação atual funciona pro mundo
corporativo mas ainda tem ruído pra quem não tem repertório técnico
nenhum. Decisões D2/D3 (`spec/decisions.md`): exemplo é cenário
hipotético (não cliente real), conteúdo sugerido pelo Claude com base no
perfil de trabalho já documentado (WhatsApp, ERPs, automação, IA).

## Abordagem
Nova seção `.example-section` em `src/pages/index.astro`, seguindo o
Design System (`eyebrow`, `.section-title` 1.5rem/800, `padding: 72px 0`,
cards no padrão visual de `.solution-card`). Formato "Situação → O que
fiz → Resultado" em 3 blocos, texto sem jargão técnico (nada de
"sistema", "automação", "integração" no corpo do exemplo — ver
`criteria-03` seção 2).

Cenário escolhido: loja pequena que recebia pedido por WhatsApp,
anotava em caderno e depois copiava pra planilha à mão — perdia pedido e
descobria só quando o cliente reclamava. Cobre o padrão de trabalho real
do usuário (integração com WhatsApp) sem citar cliente nenhum.

## Critério de conclusão
```bash
grep -n "example-section" src/pages/index.astro
npm run build
```

## Tarefas
- [x] **13-1** Discovery 03 + decisões D2/D3 confirmadas.
- [x] **13-2** Escrever e inserir a seção "Situação → O que fiz →
      Resultado" entre `.solutions-section` e `.process-section`.
- [x] **13-3** `npm run build` + validação visual local (texto extraído
      confirma posição e conteúdo corretos).
- [ ] **13-4** Commit, push, PR.
- [x] **13-5** Atualizar `sdd/features/index.md` e `sdd/memory/progress.md`.

## Arquivos gerados/alterados
```
src/pages/index.astro
sdd/discovery/discovery-03-comunicacao-publico-leigo.md
sdd/discovery/criteria-03-comunicacao-publico-leigo.md
sdd/spec/decisions.md
sdd/features/feat-13-practical-example-section.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
