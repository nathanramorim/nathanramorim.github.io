# feat/case-saas-proprio

**Branch:** `feat/case-saas-proprio`
**Fase:** 14
**Depende de:** `sdd/discovery/discovery-04-saas-proprio.md`, `criteria-04-saas-proprio.md`, `plan-04-saas-proprio.md`
**Status:** `in-progress`

## Objetivo
Adicionar uma nova seção de captação na home, entre `.solutions-section`
("O que eu resolvo") e a seção de exemplo prático (`feat-13`),
comunicando o cenário de mercado do SaaS próprio, o risco de pular
etapas de engenharia (segurança/manutenção/escala) e os dois caminhos de
entrada (evoluir um SaaS existente / começar do zero), fechando em CTA
de WhatsApp.

## Contexto
Discovery 04: mercado migrando de SaaS de terceiros pra SaaS próprio
(flexibilidade + economia), mas sem passar pelas perguntas de engenharia
de verdade — o que vira dívida técnica que custa até 5x mais corrigir
depois de já em operação. Decisões `spec/decisions.md`:
- **D4:** case entra como nova seção na home (não em `projects.json`/`/cv`)
  — home é a página de conversão, `/cv` é currículo técnico (`feat-12`).
- **D6:** case 100% prospectivo, sem cliente/projeto real por trás.
- **D5:** texto de venda aprovado pelo usuário (rascunho em `plan-04`).

## Abordagem
Nova seção `.saas-section` em `src/pages/index.astro`, seguindo o Design
System (`eyebrow`, `.section-title` 1.5rem/800, `padding: 72px 0`), dois
blocos lado a lado no padrão visual de `.solution-card` (fundo
`var(--panel)`, borda `var(--panel-border)`, `border-radius: var(--radius)`)
para os caminhos "Já tenho um SaaS" / "Vou começar do zero". Texto exato
conforme rascunho aprovado em `plan-04-saas-proprio.md`. CTA único de
WhatsApp, mesmo padrão do resto do site.

## Critério de conclusão
```bash
grep -n "saas-section" src/pages/index.astro
npm run build
```

## Tarefas
- [x] **14-0** Discovery 04 + decisões D4/D5/D6 confirmadas.
- [x] **14-1** Criar seção `.saas-section` em `src/pages/index.astro`,
      posicionada logo após `.solutions-section`.
- [x] **14-2** Estruturar os dois blocos ("Já tenho um SaaS" / "Vou
      começar do zero") reaproveitando o padrão visual de
      `.solution-card`, sem componente novo.
- [x] **14-3** Inserir o texto de venda aprovado (título, corpo,
      blocos, CTA de WhatsApp).
- [x] **14-4** Validar responsividade (mobile/desktop) e confirmar que
      nenhuma seção existente foi removida ou alterada — layout reaproveita
      `.solutions-grid`/`.solution-card`, já responsivos.
- [x] **14-5** `npm run build` + validação do HTML gerado (`dist/index.html`)
      confirma posição e conteúdo corretos.
- [x] **14-6** Commit criado em `feat/case-saas-proprio` (branch única de
      entrega). Push/PR pendente de confirmação do usuário.
- [x] **14-7** Atualizar `sdd/features/index.md` e `sdd/memory/progress.md`.

## Arquivos gerados/alterados
```
src/pages/index.astro
sdd/discovery/discovery-04-saas-proprio.md
sdd/discovery/criteria-04-saas-proprio.md
sdd/discovery/plan-04-saas-proprio.md
sdd/spec/decisions.md
sdd/features/feat-14-case-saas-proprio.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
