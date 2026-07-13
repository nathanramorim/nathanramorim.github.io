# feat/cv-pdf-export

**Branch:** `claude/resume-pdf-export-86hi8l`
**Fase:** 8
**Depende de:** `feat-02-routes`
**Status:** `done`

## Objetivo
Permitir que o visitante baixe o currículo (`/cv`) em PDF a partir do navegador, com um documento formal e profissional — sem a estética retrô/terminal do site — mantendo todas as informações de experiência, formação e competências.

## Abordagem
Site é estático (GitHub Pages, sem backend), então a exportação usa a função nativa de impressão do navegador (`window.print()`) acionada por um botão na página `/cv`, combinada com um stylesheet dedicado a `@media print` que:
- Oculta chrome retrô (barra de janela, scanlines, prompts `$ cat ...`, cursor piscando, botão de download).
- Aplica tipografia e paleta formais (preto sobre branco, sem glow/neon).
- Adiciona cabeçalho com contato (e-mail, LinkedIn, GitHub) e títulos de seção limpos ("Experiência Profissional", "Formação Acadêmica", "Competências Técnicas").
- Evita quebra de página no meio de cada cargo/formação (`break-inside: avoid`).

## Critério de conclusão
```bash
grep -n "cv-download-pdf" src/pages/cv.astro
grep -n "@media print" src/styles/global.css
npm run build
```

## Tarefas
- [x] **08-1** Adicionar botão "Baixar currículo em PDF" em `src/pages/cv.astro` que chama `window.print()`.
- [x] **08-2** Criar cabeçalho de contato e headings visíveis somente na impressão (`.print-only`).
- [x] **08-3** Criar stylesheet `@media print` global (`src/styles/global.css`) desligando a estética retrô/terminal.
- [x] **08-4** Ajustar estilos scoped de `ExperienceTimeline`, `EducationList`, `SkillsSection` e `Avatar` para impressão formal.
- [x] **08-5** Validar visualmente tela normal e modo impressão (Playwright) e `npm run build`.

## Arquivos gerados/alterados
```
src/pages/cv.astro
src/styles/global.css
src/presentation/components/ExperienceTimeline.astro
src/presentation/components/EducationList.astro
src/presentation/components/SkillsSection.astro
src/presentation/components/Avatar.astro
sdd/features/feat-08-cv-pdf-export.md
sdd/features/index.md
sdd/memory/progress.md
```

## Skills relevantes
(consultar `skills/index.md`)
