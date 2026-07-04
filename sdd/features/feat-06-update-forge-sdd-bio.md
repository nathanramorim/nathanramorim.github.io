# feat/update-forge-sdd-bio

**Branch:** `feat/update-forge-sdd-bio`
**Fase:** 6
**Depende de:** `feat-05-avatar-photo`
**Status:** `done`

## Objetivo
Atualizar a descrição do projeto "forge sdd" no currículo (projetos) para um tom mais neutro, remover menções a versões e adicionar a URL https://forge-sdd.vercel.app estimulando o acesso.

## Critério de conclusão
```bash
# Verificar se os JSONs e Markdowns foram atualizados com a URL e nova descrição
grep -i "forge-sdd.vercel.app" src/data/sources/projects.json
```

## Tarefas
- [x] **06-1** Modificar a descrição e URL do projeto `forge-sdd` em `src/data/sources/projects.json` para ficar neutra, sem menção de versão, e convidar para o acesso a `https://forge-sdd.vercel.app`.
- [x] **06-2** Verificar se há outros locais no portfólio (como os posts do blog em `src/content/blog/post-5.md`) que necessitam de ajuste para refletir a mesma URL, e atualizar, se aplicável.

## Arquivos gerados/alterados
```
src/data/sources/projects.json
src/content/blog/post-5.md
```

## Skills relevantes
(consultar `skills/index.md`)
