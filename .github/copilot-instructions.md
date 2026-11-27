# Instruções do projeto: Portfólio Karlos Eduardo

## Contexto
Portfólio profissional de um Desenvolvedor de Software, com identidade visual de Windows XP reinterpretado em pixel art. NÃO é um jogo. Referências: `docs/PLANEJAMENTO.md` (requisitos) e `docs/design/tela-aprovada.png` (design aprovado).

## Stack
Vite, React, TypeScript, Tailwind CSS. Deploy na Vercel.

## Regras gerais
- Responda e comente o código em português do Brasil; nomes de código em inglês.
- Não contradiga `docs/PLANEJAMENTO.md`. Em caso de conflito, avise antes de mudar.
- Conteúdo separado de componentes: dados em `src/data/`, tipos em `src/types/`.
- Nunca invente informações profissionais, métricas, versões, resultados ou responsabilidades. Marque dados não confirmados com `// TODO: confirmar`.
- No hero (boas-vindas.exe), `_ □ X` são decorativos. Nas demais janelas, `_` e `X` fecham a janela e podem ser arrastadas no desktop; `□` é decorativo. A barra de tarefas navega e reabre janelas.
- Fora do escopo: sons, tela de boot, minigames, easter eggs.

## Design
- Tokens de cor, borda, sombra e espaçamento em um único arquivo; não usar valores soltos nos componentes.
- Fonte pixel só em títulos curtos e detalhes decorativos. Textos longos em fonte legível; rótulos técnicos em monoespaçada.
- Pixels nítidos: `image-rendering: pixelated` em sprites e avatar.

## Acessibilidade e qualidade
- HTML semântico, foco visível, navegação por teclado, contraste adequado, respeito a `prefers-reduced-motion`.
- Nenhuma informação essencial depende de hover, animação ou som.
- Mobile: seções empilhadas, sem arrastar, alvos de toque confortáveis.
- Rode build e lint antes de concluir qualquer tarefa.