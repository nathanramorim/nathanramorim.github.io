# Critérios e Definições Técnicas 03 — Exemplo prático na home

## 1. Escopo técnico
Referência: `discovery-03-comunicacao-publico-leigo.md`.

Adicionar uma seção nova em `src/pages/index.astro`, entre a seção
"O que eu resolvo" (`.solutions-section`) e "Minha forma de trabalhar"
(`.process-section`), seguindo o Design System já documentado na
`constitution.md`:
- Eyebrow badge (`<p class="eyebrow" style="text-align: center;">`).
- `<h2 class="section-title">` no mesmo 1.5rem/peso 800.
- Seção de nível superior com `padding: 72px 0` (nenhuma margem ad-hoc
  interna pra espaçamento externo).
- Sem inventar componente novo de card — reaproveitar o padrão visual já
  usado em `.solution-card` (fundo `var(--panel)`, borda
  `var(--panel-border)`, `border-radius: var(--radius)`) para o bloco
  "antes/depois", possivelmente em duas colunas (Antes | Depois) ou um
  formato "Situação → O que fiz → Resultado" em 3 blocos.

## 2. Conteúdo — texto, não layout
Esta feature é primariamente sobre **texto**, não sobre estrutura nova.
Regras de escrita pro exemplo prático (evitar reintroduzir o mesmo ruído
que motivou esta discovery):
- Zero jargão técnico (nada de "sistema", "automação", "integração",
  "API" no corpo do exemplo — esses termos continuam existindo nas
  seções abstratas acima, não aqui).
- Frases curtas, sujeito-verbo-objeto direto, sem terminologia de
  negócio abstrata ("otimizar processos", "transformar digitalmente").
- Cenário reconhecível por quem nunca contratou desenvolvimento: "perdia
  pedido no caderno", "cliente esperava resposta no WhatsApp e ninguém
  via", "duas planilhas com o mesmo dado, sempre desatualizadas" — esse
  tipo de concretude.
- Manter o tom já estabelecido do site (direto, sem emoji em excesso,
  primeira pessoa quando fizer sentido).

## 3. Pendências (bloqueia implementação)
- **D2 (`spec/decisions.md`):** o exemplo prático é baseado em cliente
  real anonimizado ou é um cenário hipotético? Se for cliente real,
  precisa do usuário aprovar o que pode ser publicado (nome nunca,
  ramo/segmento talvez).
- **D3:** o usuário precisa fornecer o conteúdo bruto do exemplo (a
  situação real ou o cenário que quer usar) — este documento não inventa
  case nem estatística de resultado. Sem isso, `/nova-feature` não tem
  spec de conteúdo pra implementar.

## 4. Critérios de aceitação (DoD)
- [ ] Nova seção existe entre "O que eu resolvo" e "Como trabalho", sem
      alterar as seções existentes.
- [ ] Segue o Design System (`eyebrow`, `.section-title`, ritmo de 72px).
- [ ] Texto do exemplo aprovado pelo usuário antes do commit (D2/D3
      resolvidas).
- [ ] `npm run build` passa sem erros.
- [ ] Validação visual local antes do push.
- [ ] Nenhuma seção existente (corporativa/técnica) foi removida ou
      diluída — só adicionada uma ponte pro público leigo.

## 5. Fora de escopo
- Reescrever "O que eu resolvo", "Como trabalho" ou "Sobre mim" — essas
  seções continuam servindo o público corporativo como estão.
- Pesquisa formal de usabilidade — feedback continua sendo informal,
  como já vem sendo (`discovery-02`).
- Múltiplos exemplos/carrossel — começar com um exemplo só, avaliar
  depois se precisa de mais.
