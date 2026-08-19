# Roadmap Preliminar 04 — Case "seu próprio SaaS, feito com engenharia de verdade"

Referência: `discovery-04-saas-proprio.md`, `criteria-04-saas-proprio.md`.
Decisões fechadas: D4 (nova seção na home) e D6 (case 100% prospectivo) —
ver `spec/decisions.md`. D5 (texto final) segue como **rascunho** abaixo,
pendente aprovação do usuário antes do commit.

## Fase única — Nova seção na home
### Feature: `feat-14-case-saas-proprio`
* **Objetivo:** Adicionar uma nova seção de captação na home, entre
  `.solutions-section` ("O que eu resolvo") e a seção de exemplo prático
  (`feat-13`), comunicando o cenário de mercado do SaaS próprio, o risco
  de pular etapas de engenharia e os dois caminhos de entrada (evoluir /
  começar do zero), fechando em CTA de WhatsApp.
* **Tarefas:**
  - [ ] **14-1:** Criar nova seção `.saas-section` em `src/pages/index.astro`,
    seguindo o Design System (`eyebrow`, `<h2 class="section-title">`,
    `padding: 72px 0`), posicionada logo após `.solutions-section`.
  - [ ] **14-2:** Estruturar dois blocos lado a lado ("Já tenho um SaaS" /
    "Vou começar do zero"), reaproveitando o padrão visual de
    `.solution-card` (fundo `var(--panel)`, borda `var(--panel-border)`,
    `border-radius: var(--radius)`) — sem componente novo.
  - [ ] **14-3:** Inserir o texto de venda (rascunho abaixo) — título,
    corpo do risco/oferta, os dois caminhos, CTA único de WhatsApp.
  - [ ] **14-4:** Validar responsividade (mobile/desktop) e que nenhuma
    seção existente foi removida ou alterada.
  - [ ] **14-5:** `npm run build` + validação visual local antes do push.

## Rascunho de copy (D5 — pendente aprovação final)

> **Eyebrow:** Um novo jeito de ter software
> **Título (h2):** Sua empresa quer o próprio SaaS? Faça isso sem pagar 5x mais depois
>
> Cada vez mais empresas estão trocando assinatura de sistema de terceiro
> por ter o próprio sistema — faz sentido: fica do jeito que a empresa
> precisa, e sem mensalidade pra sempre.
>
> O problema é que a maioria começa esse projeto olhando só pra tela e
> pra funcionalidade, sem pensar em segurança, em quem vai manter esse
> sistema no ano que vem, ou no que acontece quando o número de clientes
> triplicar. Isso não aparece no início — aparece depois, com o sistema
> já rodando e depender dele. E consertar depois que já está em uso
> custa, em média, até **5 vezes mais** do que teria custado fazer certo
> desde o começo.
>
> **Bloco 1 — Já tenho um sistema:** Seu SaaS já existe mas você sente
> que ele não aguenta crescer, ou que qualquer mudança quebra outra
> coisa? Eu entro pra dar o próximo passo com segurança.
>
> **Bloco 2 — Vou começar do zero:** Você decidiu construir o seu SaaS e
> quer começar com a base certa, sem pagar a conta de 5x lá na frente.
>
> **CTA:** Fale comigo no WhatsApp (mesmo botão/link já usado no resto
> do site)

## Fora de escopo desta fase
- Página dedicada de case study com métricas — ver "Fora de escopo" em
  `criteria-04-saas-proprio.md`.
- Alterar `/cv.astro` ou `projects.json`.
