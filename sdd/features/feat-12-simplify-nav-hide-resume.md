# feat/simplify-nav-hide-resume

**Branch:** `feat/simplify-nav-hide-resume`
**Fase:** 12
**Depende de:** `sdd/discovery/discovery-02-simplificacao-navegacao.md`, `criteria-02-simplificacao-navegacao.md`
**Status:** `in-progress`

## Objetivo
Simplificar a navegação principal para **Início** e **Blog** apenas,
removendo a seção "Trajetória profissional" (currículo completo) do fluxo
de rolagem da home, sem apagar nenhum dado. Decisão D1 (`spec/decisions.md`):
a rota `/cv` continua existindo, só sai do menu principal.

## Contexto
Pesquisa informal do usuário sobre a comunicação da home: público com
pegada técnica entendeu fácil, público leigo (o público-alvo real do
site, conforme `constitution.md`) teve dúvidas. Hipótese: a seção de
currículo técnico embutida na home compete por atenção com as seções que
realmente comunicam valor pro público leigo.

## Abordagem
- `src/layouts/RetroLayout.astro`: remover `<a href="/cv">Currículo</a>`
  do `.chrome-nav`.
- `src/pages/index.astro`: remover a seção `.resume-section` inteira
  (eyebrow "Currículo" + `<ResumeSection downloadMode="link" />`) do
  fluxo da home.
- Hero: remover o botão secundário "Ver currículo completo" do
  `.hero-actions` (CTA primário de WhatsApp já cobre a conversão).
- `/cv` (`src/pages/cv.astro`) não muda — continua no build, acessível
  por URL direta, com o export em PDF intacto.
- Nenhum dado em `src/data/sources/*.json` é alterado.

## Critério de conclusão
```bash
grep -n 'href="/cv"' src/layouts/RetroLayout.astro   # deve retornar vazio
grep -n "resume-section" src/pages/index.astro        # deve retornar vazio
npm run build
```

## Tarefas
- [x] **12-1** Discovery (`discovery-02`/`criteria-02`) e decisão D1
      confirmada com o usuário.
- [x] **12-2** Remover link "Currículo" do nav principal.
- [x] **12-3** Remover seção "Trajetória profissional" da home (markup +
      CSS `.resume-section` órfã + imports/usecases não mais usados em
      `index.astro`).
- [x] **12-4** Remover botão "Ver currículo completo" do hero (fica só o
      CTA primário de WhatsApp).
- [x] **12-5** `npm run build` + validação: `grep` confirmou ausência de
      "Currículo"/"resume-section"/"Ver currículo completo" em
      `dist/index.html` e presença intacta em `dist/cv/index.html`;
      validação visual local via servidor estático.
- [ ] **12-6** Commit, push, PR.
- [x] **12-7** Atualizar `sdd/features/index.md` e `sdd/memory/progress.md`.

## Arquivos gerados/alterados
```
src/layouts/RetroLayout.astro
src/pages/index.astro
sdd/discovery/discovery-02-simplificacao-navegacao.md
sdd/discovery/criteria-02-simplificacao-navegacao.md
sdd/spec/decisions.md
sdd/features/feat-12-simplify-nav-hide-resume.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
