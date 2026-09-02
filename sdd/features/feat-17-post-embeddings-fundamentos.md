# feat-17 — Post "Chatbots erram" + imagem de capa

**Branch:** `feat/post-embeddings-fundamentos`
**Status:** done

## Motivação
Novo post pro blog (post-8) sobre o conceito de embedding como fundamento de
sistemas RAG, motivado por um caso real de debugging onde o autor atribuiu um
erro à "IA que alucina" e percebeu que o problema real estava na busca
vetorial.

A motivação de fundo é estudar a estrutura de RAG de verdade, pra
compreender melhor o que acontece por baixo do pipeline (embeddings,
chunking, bancos vetoriais, RAG do zero, frameworks, fine-tuning e
avaliação) antes de aplicar isso em projetos maiores. Esse estudo é guiado
pelo repositório `estudo-llm-rag`, onde cada pasta corresponde a um módulo
da trilha, com o script funcionando e as anotações do que foi aprendido. O
post-8 documenta o primeiro módulo dessa trilha (embeddings) publicamente no
blog.

O post é destinado a cross-post no LinkedIn (like os demais, tem `hashtags`
no frontmatter), então também precisa de uma imagem de capa para
acompanhar a publicação e para o `og:image`/`twitter:image` da página no
site.

## Escopo

1. **Conteúdo do post** — `src/content/blog/post-8.md`:
   - Frontmatter: `title`, `eyebrow` (estilo `"trilha de estudos · embeddings"`),
     `order: 8`, `summary`, `hashtags`.
   - Corpo adaptado do texto fornecido pelo usuário, **sem nenhum em-dash
     (`—`)** — reescrever cada ocorrência como frase separada ou pontuação
     equivalente (regra já registrada em memória: usuário não gosta de
     em-dash em copy do site).
   - Link para o repositório da trilha:
     `https://github.com/nathanramorim/estudo-llm-rag`.
   - Ao criar o arquivo, rodar a skill `blog-internal-linking` para avaliar
     conexão genuína com posts já publicados (ex.: post-6/post-7 sobre
     harness engineering e forge-sdd, já que o post cita o forge-sdd como
     terreno prático da trilha).

2. **Publicar no config** — `src/data/sources/blog.config.toml`: adicionar
   `[posts.post-8]` com `enabled = true`.

3. **Imagem de capa**:
   - Gerar uma imagem de capa (ex.: `public/blog/post-8-cover.svg` ou
     `.png`), consistente com o estilo retro/terminal já usado no site.
   - Adicionar campo opcional `cover` (string, opcional) ao schema da
     collection `blog` em `src/content.config.ts`.
   - Em `src/pages/blog/[slug].astro`, passar `entry.data.cover` como prop
     `image` pro `RetroLayout` (que já repassa pro `SEO.astro` via
     `og:image`/`twitter:image`), com fallback pro comportamento atual
     (favicon) quando o post não tiver `cover`.

## Fora de escopo
- Adicionar `cover` retroativamente aos posts 0–7.
- Qualquer alteração no design system geral do blog além do necessário para
  exibir a imagem de capa via meta tags.

## Critério de aceite
- `npm run build` gera a rota `/blog/<slug-post-8>` sem erro, com os outros
  8 posts intactos.
- Nenhum caractere `—` no corpo de `post-8.md`.
- `<meta property="og:image">` da página de `post-8` aponta pra imagem de
  capa gerada.
- `post-8.md` tem pelo menos um link interno genuíno adicionado pela skill
  `blog-internal-linking` (ou justificativa registrada se nenhuma conexão
  fizer sentido).
