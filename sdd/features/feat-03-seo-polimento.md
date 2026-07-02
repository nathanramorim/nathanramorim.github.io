# feat/seo-polimento

**Branch:** `feat/seo-polimento`
**Fase:** 3
**Depende de:** `feat-02-routes`
**Status:** `todo`

## Objetivo
Garantir o polimento visual de transições e micro-animações, adicionar tags SEO de alta qualidade e certificar que a esteira de CI/CD realiza o deploy no GitHub Pages sem falhas.

## Critério de conclusão
```bash
# Validar se o site final builda com sucesso e o arquivo sitemap.xml foi gerado
npm run build
```

## Tarefas
- [ ] **03-1** Implementar tags meta de SEO em todas as páginas (título descritivo, meta descrição, tags de Open Graph e Twitter Cards).
- [ ] **03-2** Otimizar o carregamento de fontes do Google de forma assíncrona para evitar FOUT (Flash of Unstyled Text).
- [ ] **03-3** Testar a responsividade móvel de todas as seções (LP, CV, Blog e posts) simulando resoluções de celulares e tablets.
- [ ] **03-4** Garantir a acessibilidade do site (WCAG AA para contraste de cores do terminal, tags alt em imagens e tratamento de `@media (prefers-reduced-motion)` para suspender animações de terminal piscante).
- [ ] **03-5** Disparar o workflow de CI/CD do GitHub Actions fazendo push na main e auditar se o site é atualizado corretamente no domínio do GitHub Pages.

## Arquivos gerados
```
src/presentation/components/SEO.astro
```

## Skills relevantes
(consultar `skills/index.md`)
