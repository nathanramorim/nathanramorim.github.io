# Discovery 02 — Simplificação da navegação (drop do Currículo em destaque)

## 1. Contexto / Porquê
Nathan rodou uma pesquisa informal com pessoas variadas sobre a comunicação
da home do site. Resultado: quem já tem uma pegada mais tecnológica
entendeu a proposta com facilidade; quem não tem esse repertório teve
dúvidas e não conseguiu entender tão bem.

Isso é um problema direto de missão do produto — a `constitution.md` já
registra que o site existe para comunicar "o que ele resolve" para
**empresários e negócios locais**, não para um público técnico. Se
exatamente esse público (leigo em tecnologia) é quem mais trava na
comunicação, a home não está cumprindo o objetivo pra quem mais importa.

## 2. Hipótese
A seção "Trajetória profissional" (currículo completo: case técnico,
timeline de experiência com jargão de arquitetura, stack técnica
detalhada, certificações) embutida na home é densa e técnica por natureza
— ótima para recrutador/par técnico, mas ruído para quem só quer entender
"esse cara resolve o meu problema ou não". Ela compete por atenção com as
seções que realmente comunicam valor pro público leigo (O que resolvo,
Como trabalho, Sobre mim).

## 3. Para quem
Público leigo em tecnologia (empresário, dono de negócio local) — o
público primário declarado na missão do site. Recrutadores e pares
técnicos continuam existindo como público secundário, mas não são quem a
home precisa convencer primeiro.

## 4. Decisão de produto
Simplificar a navegação principal para **Início** e **Blog** apenas,
removendo "Currículo" do nav e a seção "Trajetória profissional" do fluxo
principal da home. O objetivo é que a home vire 100% sobre comunicação de
valor (problema → solução → prova social leve), sem a "parede" de
currículo técnico no meio do caminho.

A rota `/cv` (e o export em PDF) deixa de fazer parte da narrativa
principal da home, mas os dados de experiência/certificações continuam
existindo em `src/data/sources/*.json` — nada é apagado, só deixa de ser
empurrado como destino de navegação padrão. Decisão final sobre manter ou
remover a rota `/cv` do build: ver `criteria-02` (pendente confirmação do
usuário).

## 5. Como (macro)
```mermaid
flowchart TD
    User([Visitante]) --> Home[Home /]
    Home --> Resolvo[O que resolvo]
    Home --> ComoTrabalho[Como trabalho]
    Home --> SobreMim[Sobre mim / Por que trabalhar comigo]
    Home --> Tecnologias[Tecnologias]
    Home --> BlogTeaser[Blog em destaque]
    Home --> CTA[CTA final / WhatsApp]

    Nav{Nav principal} -->|Início| Home
    Nav -->|Blog| BlogIndex[/blog]

    BlogIndex --> Post[/blog/slug]
```

## 6. Critério de sucesso
- Nav principal mostra só Início e Blog (+ CTA "Vamos conversar").
- Home não tem mais a seção "Trajetória profissional" no fluxo de
  rolagem principal.
- Nenhum dado de currículo é perdido (JSONs intactos, reaproveitáveis se
  a decisão for revertida).
- Próxima pesquisa informal (não coberta aqui) deve mostrar melhora na
  compreensão do público leigo — fora do escopo técnico deste documento,
  é o critério de validação de produto de longo prazo.
