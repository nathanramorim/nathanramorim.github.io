---
name: blog-internal-linking
description: Use sempre que um post do blog for criado, editado ou revisado neste site (src/content/blog/*.md). Analisa os posts já publicados em busca de conexão temática genuína com o post em questão e adiciona link interno contextual entre eles, melhorando SEO on-page e navegabilidade do blog. Gatilhos — "criar post", "novo post do blog", "publicar artigo", "revisar post".
---

# Blog internal linking

Todo post novo do blog (`src/content/blog/*.md`) precisa ser checado contra
os posts já publicados em busca de **ganchos genuínos** — não link forçado
só por existir, só quando o assunto realmente se conecta.

## Quando rodar
- Sempre que um post novo for criado (`feat-XX-blog-post-*`).
- Sempre que um post existente for editado de forma relevante (mudança de
  assunto/escopo).
- Quando pedido explicitamente ("revisa os links internos do blog").

## Como fazer

1. **Levante o catálogo atual.** Liste `src/content/blog/*.md` e leia o
   `title`, `summary` e `hashtags` de cada um (não precisa reler o corpo
   inteiro de posts já conhecidos na sessão).
2. **Ache a conexão real.** Pergunte: "o argumento deste post só funciona
   / fica mais forte citando aquele outro?" Exemplos de conexão genuína
   neste blog:
   - Um post que depende de um conceito já explicado em outro (ex.: cita
     "harness engineering" sem redefinir do zero) → linkar o post que
     define o conceito.
   - Um post que é continuação prática de uma ideia teórica de outro
     (ex.: "como cheguei no forge-sdd" é a aplicação prática do conceito
     do post 0) → linkar em ambas as direções quando fizer sentido.
   - Dois posts sobre a mesma série (`eyebrow: "post N de 5"`) já se
     linkam via `post-nav` (anterior/próximo) — não precisa link extra
     dentro do corpo só por serem da mesma série.
3. **Calcule a URL.** A rota é `/blog/<slug>`, onde `<slug>` vem de
   `slugify(title)` (ver `src/domain/utils/slugify.ts`) — não é o nome do
   arquivo (`post-N.md`). Confirme a rota real olhando o slug do post alvo
   antes de escrever o link, nunca adivinhe.
4. **Escreva o link como parte natural da frase**, nunca como uma lista de
   "veja também" solta no fim. Formato: `[texto âncora descritivo](/blog/slug)`.
   Âncora deve descrever o destino, não ser genérica tipo "aqui" ou "este
   post".
5. **Não exagere.** 1-2 links internos por post é o normal. Se não houver
   conexão genuína com nenhum post existente, não force nenhum.
6. **Bidirecional quando fizer sentido.** Se o post novo é claramente uma
   continuação/aplicação de um post antigo, considere também adicionar uma
   frase com link no post antigo apontando para o novo (edição pontual,
   registrar no mesmo commit/PR).

## Onde isso já foi aplicado
- `post-6.md` ("Já usei sessão cruzada do Claude Code sem querer") linka
  `post-0` (definição de harness engineering) e `post-5` (aplicação
  prática no forge-sdd) — feat-11.

## Não fazer
- Não adicionar seção "posts relacionados" separada — o link vive dentro
  do texto corrido, como o resto do blog já faz.
- Não linkar por linkar: se nenhum post existente conecta genuinamente,
  não crie um link fraco só para "ter SEO".
- Não usar texto de âncora genérico (nunca "clique aqui" / "veja este
  post").
