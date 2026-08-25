---
title: "Já usei sessão cruzada do Claude Code sem querer"
eyebrow: "descoberta · claude code"
order: 6
summary: "Dei um comando pra um agente e ele disparou sozinho pra outra sessão do Claude Code que eu tinha aberta em outra janela. Não pedi isso. Fui atrás de entender o que era: sessão cruzada (cross session messaging). 🔀"
hashtags:
  - ClaudeCode
  - SessaoCruzada
  - AgentesDeIA
  - DesenvolvimentoDeSoftware
  - Busize
---

Dei um comando pra um agente aqui no terminal e ele disparou sozinho pra outra sessão do Claude Code que eu tinha aberta em outra janela. Não pedi isso especificamente, ele que percebeu a necessidade. Fui atrás de entender o que era. Chama sessão cruzada (cross session messaging).

**O que é**

Uma sessão do Claude Code descobre quais outras você tem rodando e manda mensagem direto pra elas, sem copiar e colar nada entre terminais. Duas ferramentas fazem isso por trás: `ListAgents` descobre as sessões, `SendMessage` entrega a mensagem. O Claude decide usar sozinho, ou você pede diretamente.

**O problema, num exemplo prático**

Duas sessões trabalhando na mesma base, sem contato:

- sessão **migração-db**: terminou de mudar o schema, coluna nova é `tenant_id`
- sessão **api-pagamentos**: segue construindo em cima do schema antigo, vai quebrar no deploy

Cada sessão só enxerga o próprio contexto. Uma trabalha, a outra nem sabe que o chão mudou.

**Como resolvi, mesmo exemplo**

A sessão migração-db manda uma mensagem via `SendMessage` pra sessão api-pagamentos: "Migração terminou. A coluna nova é `tenant_id`, pode seguir." A outra sessão recebe entre uma ação e outra, sem parar o que estava fazendo, ajusta pro schema novo e segue sem retrabalho.

**Como funciona**

A mensagem nunca leva histórico de conversa nem arquivos, só texto. E chega entre uma ação e outra: nunca interrompe uma ferramenta em execução.

Reparei que isso só funciona bem porque tem [harness engineering](/blog/voce-sabe-o-que-e-harness-engineering) por trás: o ambiente ao redor do agente é que sabe descobrir outras sessões e decidir quando vale a pena avisar alguém, não o modelo "pensando melhor" sozinho. É o mesmo princípio que apliquei pra chegar no [forge-sdd](/blog/como-cheguei-no-forge-sdd-atraves-do-harness-engineering): a ferramenta certa, no momento certo, importa mais que o prompt perfeito.

**Você controla**

`crossSessionInbound` define o padrão: `accept` entrega direto, `hold` pede sua aprovação, `refuse` descarta sem entregar. Pra desligar o recurso inteiro, uma regra de permissão negando `SendMessage` e `ListAgents`.

Testei aqui, funcionou. Preparei um guia rápido de uma página com os comandos e a configuração.

<a class="article-cta" href="https://drive.google.com/uc?export=download&id=1qyZwAKv0zI3d5w7zxgdfVrv8uwaBx3oh" target="_blank" rel="noopener">⬇ Baixar guia em PDF</a>
