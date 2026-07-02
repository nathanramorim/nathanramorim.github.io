---
title: "Como cheguei no forge-sdd através do harness engineering"
eyebrow: "post 5 de 5 · fechamento"
order: 5
summary: "Eu não parti da teoria para chegar no forge-sdd, parti de um agente que entregava resultado bom num dia e ruim no outro. No último post da série, conto como isso virou uma metodologia de Spec-Driven Development, e por que hoje entendo que sempre fiz harness engineering sem saber o nome disso. 🛠️"
hashtags:
  - ForgeSDD
  - HarnessEngineering
  - SpecDrivenDevelopment
  - InteligenciaArtificial
  - DesenvolvimentoDeSoftware
  - Busize
---

Nos posts anteriores expliquei o que é Harness Engineering: não é sobre pedir bem para a IA, é sobre montar o ambiente de trabalho ao redor dela, com as ferramentas certas, boas fontes de informação, um jeito de verificar o resultado e um critério claro de quando parar. Agora quero contar como cheguei nisso na prática, antes mesmo de saber que esse conceito tinha nome.

O problema começou simples: um agente de IA até entregava resultado, mas de forma inconsistente. Um dia acertava a estrutura do projeto, no outro inventava uma solução diferente para o mesmo tipo de tarefa. Funcionava na prova de conceito e escorregava na entrega real.

A resposta natural, no começo, foi escrever prompts cada vez mais detalhados, o equivalente a caprichar cada vez mais na receita. Funcionou até certo ponto e depois parou de escalar. Ficou claro que o problema não estava em "pedir melhor". Estava em não ter, ao redor do agente, uma cozinha de verdade: specs claras do que precisa ser feito, um arquivo de constituição com as regras inegociáveis do projeto, configuração organizada, e um jeito confiável de verificar se o trabalho entregue realmente atendia ao que foi pedido, antes de considerar a tarefa concluída.

Foi assim, tentativa após tentativa, que nasceu a metodologia por trás do **forge-sdd**: Spec-Driven Development, desenvolvimento guiado por especificação. Na prática, isso significa: antes de deixar o agente agir, a gente define com clareza o que precisa existir no final, quais são os limites do projeto, e como vamos saber se deu certo. O agente ainda "pensa" livremente, mas dentro de uma cozinha bem montada, não numa sala vazia.

Olhando para trás, entendo que sempre estive fazendo Harness Engineering, só não tinha esse nome ainda. E é engraçado perceber que boa parte do que hoje vira artigo e discussão de mercado, muita gente que trabalha de perto com agentes de IA já vinha descobrindo na prática, no braço, resolvendo problema por problema.

Se você constrói ou usa agentes de IA no seu trabalho e sente esse mesmo tipo de inconsistência que eu sentia, vale a pena olhar para o forge-sdd, não como uma ferramenta mágica, mas como um jeito estruturado de montar essa cozinha para os seus próprios projetos.
