# feat/portfolio-projetos

**Branch:** `feat/portfolio-projetos`
**Fase:** 15
**Depende de:** —
**Status:** `in-progress`

## Objetivo
Criar a página `/projetos`, um portfólio com os principais projetos já desenvolvidos (Trem de Links, Gestor de Aluguéis, Hub de Agentes, Agenda Isô, Harttur e Salles, Forge SDD), cada um no formato problema → o que eu fiz → resultado, com imagem de capa, e link acessível a partir do menu do site.

## Critério de conclusão
```bash
# A página /projetos deve renderizar com os 6 projetos e suas imagens de capa
npm run build && grep -o "Trem de Links\|Gestor de Aluguéis\|Hub de Agentes\|Agenda Isô\|Harttur e Salles\|Forge SDD" dist/projetos/index.html | sort -u | wc -l
# esperado: 6
```

## Tarefas
- [x] **15-1** Criar entidade de domínio `PortfolioProject`, interface `IPortfolioProjectRepository` e use case `GetPortfolioProjects`, seguindo o mesmo padrão de `Project`/`IProjectRepository`/`GetProjectsList` já usado no site.
- [x] **15-2** Criar `PortfolioProjectRepository` lendo de `src/data/sources/portfolio-projects.json` via `StaticJSONDataSource`, mantendo o conteúdo fora do código (Regra de Ouro do `constitution.md`).
- [x] **15-3** Escrever o conteúdo dos 6 projetos no formato problema/solução/resultado, no tom pessoal do Nathan, sem jargão técnico.
- [x] **15-4** Criar o componente `PortfolioGrid.astro` reaproveitando o design system existente (`.eyebrow`, `.hashtag`, `.panel`/`--panel-border`, `--radius`), com card em destaque maior para o Trem de Links.
- [x] **15-5** Criar a página `src/pages/projetos.astro`, seguindo o mesmo padrão de gate de `cv.astro` via `PagesConfigRepository` (`[pages.projetos]` em `pages.config.toml`).
- [x] **15-6** Gerar imagens de capa em `public/images/projetos/`: 4 screenshots reais do Trem de Links (já existiam no repo do projeto) e 5 ilustrações estilizadas para os projetos que ainda não têm print real disponível.
- [x] **15-7** Adicionar link "Projetos" na navegação (`RetroLayout.astro`), entre "Início" e "Blog".
- [x] **15-8** Validar build (`npm run build`) e checagem visual via screenshot (desktop e mobile).

## Arquivos gerados
```
src/domain/entities/PortfolioProject.ts
src/domain/interfaces/IPortfolioProjectRepository.ts
src/domain/usecases/GetPortfolioProjects.ts
src/data/repositories/PortfolioProjectRepository.ts
src/data/sources/portfolio-projects.json
src/presentation/components/PortfolioGrid.astro
src/pages/projetos.astro
public/images/projetos/forge-sdd.svg
public/images/projetos/hub-agentes.svg
public/images/projetos/agendaiso.svg
public/images/projetos/harttur-e-salles.svg
public/images/projetos/gestor-alugueis.svg
public/images/projetos/tremdelinks/home-desktop.png
public/images/projetos/tremdelinks/home-mobile.png
public/images/projetos/tremdelinks/perfil-desktop.png
public/images/projetos/tremdelinks/perfil-mobile.png
```

Arquivos alterados:
```
src/layouts/RetroLayout.astro       (novo link "Projetos" no nav)
src/data/sources/pages.config.toml  (novo bloco [pages.projetos])
```

> Nota: esta feature foi implementada numa sessão sem acesso a terminal na
> máquina do Nathan (`device_bash` indisponível), então a branch e os
> arquivos foram preparados num clone à parte, empacotados em patch + zip.
> Falta o Nathan aplicar, revisar e fazer commit/push/PR — mesmo estado
> de "pronto, aguardando ação humana" que `feat-14-case-saas-proprio` já
> está.
>
> Três das ilustrações (Hub de Agentes, Agenda Isô, Gestor de Aluguéis)
> são cards estilizados, não screenshots reais — os projetos não têm
> deploy público acessível nem servidor local que desse pra capturar
> nesta sessão. Dá pra trocar por print real rodando
> `npm run screenshots`-style em cada projeto e substituindo o arquivo em
> `public/images/projetos/`.

## Skills relevantes
(consultar `skills/index.md`)
