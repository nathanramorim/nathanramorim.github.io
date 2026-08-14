# Critérios e Definições Técnicas 02 — Simplificação da navegação

## 1. Escopo técnico
Referência: `discovery-02-simplificacao-navegacao.md`.

Mudanças em `src/layouts/RetroLayout.astro` e `src/pages/index.astro`:

1. **Nav principal** (`.chrome-nav`): remover o link `<a href="/cv">Currículo</a>`,
   mantendo `Início`, `Blog` e o CTA `Vamos conversar`.
2. **Home** (`src/pages/index.astro`): remover a seção `.resume-section`
   ("Trajetória profissional" + `<ResumeSection downloadMode="link" />`) do
   fluxo de rolagem principal.
3. **Hero**: o botão secundário "Ver currículo completo" (`href="/cv"`) no
   hero precisa de novo destino ou remoção — como o CTA primário já é
   WhatsApp, a opção mais simples é remover o botão secundário e deixar só
   "Falar sobre meu projeto", ou trocá-lo por algo como "Ver como eu
   trabalho" apontando pra âncora de uma seção que já existe na home.

## 2. Decisão em aberto (D1 em `spec/decisions.md`)
A rota `/cv` (`src/pages/cv.astro`) continua existindo no build?
- **Opção A — manter a rota, só tirar do nav.** `/cv` continua acessível
  por URL direta (útil se alguém pedir currículo formal/PDF
  explicitamente), só não é mais promovida na navegação. Menor risco,
  reversível, não quebra links externos que já apontem pra `/cv`.
- **Opção B — remover a rota do build.** `/cv` deixa de existir
  (404). Mais alinhado com "deixar somente blog e home", mas quebra
  qualquer link externo/PDF já compartilhado apontando pra `/cv`, e perde
  o export de PDF do currículo (`ResumeSection` com `downloadMode="print"`).

Recomendação: Opção A. Resolve o problema de comunicação (currículo não
compete mais por atenção na home) sem custo de quebrar links já
compartilhados. Pendente confirmação do usuário antes de implementar.

## 3. Impacto em componentes existentes
- `ResumeSection.astro`, `CertificationsList.astro`, `LanguagesList.astro`,
  `ExperienceTimeline.astro`, `EducationList.astro`, `SkillsSection.astro`:
  nenhuma mudança — continuam usados por `/cv` (Opção A) ou removidos de
  uso ativo mas mantidos no código (Opção B, sem exclusão de arquivo neste
  momento).
- `src/data/sources/*.json` (experiences, education, certifications,
  languages, skills, projects): sem alteração. Nenhum dado é apagado.

## 4. Critérios de aceitação (DoD)
- [ ] Nav principal (`RetroLayout.astro`) mostra só Início, Blog e CTA.
- [ ] Home não renderiza mais `.resume-section` / "Trajetória profissional".
- [ ] Botão "Ver currículo completo" do hero removido ou reapontado.
- [ ] `npm run build` passa sem erros.
- [ ] Decisão sobre `/cv` (manter ou remover) registrada em
      `spec/decisions.md` antes do commit.
- [ ] Validação visual local antes do push (mesma prática de todas as
      features anteriores do projeto).

## 5. Fora de escopo
- Reescrever o conteúdo de `/cv` em si (caso Opção A).
- Qualquer alteração nos dados de currículo (`src/data/sources/*.json`).
- Nova pesquisa de validação com usuários — fica para uma iteração futura.
