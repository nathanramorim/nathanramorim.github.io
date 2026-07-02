# Plano — meu-projeto

## Fases

| Fase | Feature | Entrega | Critério resumido |
|------|---------|---------|-------------------|
| 0 | feat-00-foundation | Setup do Astro, TS, Clean Arch e CI/CD. | Compila e roda localmente |
| 1 | feat-01-landing-page | Landing Page retrô com terminal e posts destacados. | Renderiza as seções com dados locais |
| 2 | feat-02-routes | Rotas `/cv`, `/blog` e `/blog/[slug]` do Markdown. | Status 200 nas rotas do CV e Blog |
| 3 | feat-03-seo-polimento | Tags de SEO, responsividade fina e deploy CI/CD. | Builda e faz deploy automático via Actions |
| 4 | feat-04-blog-toggle-config | Config TOML para habilitar/desabilitar posts do blog (publicação incremental). | Post com `enabled = false` não aparece em `/blog` nem gera rota |
| 5 | feat-05-avatar-photo | Foto de avatar de volta na home e no CV, com moldura retro. | `dist/index.html` contém `<img>` do avatar |

## Dependências externas
```
astro @latest
typescript
@astrojs/sitemap
smol-toml
```
