# feat/avatar-photo

**Branch:** `feat/avatar-photo`
**Fase:** 5
**Depende de:** `feat-01-landing-page`
**Status:** `todo`

## Objetivo
Voltar a exibir a foto de avatar de Nathan Amorim (hoje preservada em `backup/photo.jpeg`, usada no currículo legado) no novo site, com um tratamento visual que combine com o tema retro-terminal.

## Critério de conclusão
```bash
# A home deve conter uma tag <img> referenciando o avatar, servida com sucesso
npm run build
grep -o '<img[^>]*avatar[^>]*>' dist/index.html
```

## Tarefas
- [ ] **05-1** Mover a foto de `backup/photo.jpeg` para `src/assets/avatar.jpg`, para ser processada pela otimização de imagens do Astro (`astro:assets`).
- [ ] **05-2** Criar o componente `src/presentation/components/Avatar.astro` usando `<Image>` de `astro:assets`, com moldura retro (borda, glow sutil) consistente com as variáveis de `global.css`, e `alt` descritivo para acessibilidade.
- [ ] **05-3** Integrar o `Avatar` no hero da home (`src/pages/index.astro`), ao lado da apresentação (`whoami`).
- [ ] **05-4** Integrar o `Avatar` também no hero do currículo (`src/pages/cv.astro`).
- [ ] **05-5** Validar responsividade em mobile (avatar não deve quebrar o layout do hero) e rodar `npm run build`/`npm run dev` para conferir o resultado.

## Arquivos gerados
```
src/assets/avatar.jpg
src/presentation/components/Avatar.astro
```

## Skills relevantes
(consultar `skills/index.md`)
