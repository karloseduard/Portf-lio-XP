# Pendências de conteúdo

## Decisões de comportamento

- `boas-vindas.exe` permanece fixa e sempre aberta; seus controles continuam decorativos.
- As outras seis janelas fecham com `_` ou `X`, preservam estado interno enquanto ocultas e reabrem na posição original.
- O arraste usa Pointer Events somente em telas a partir de 1024px com ponteiro fino; teclado oferece setas, `Shift` + setas e `Home`. No modo tablet/mobile, posições são zeradas.
- Barra de tarefas, menu Iniciar, atalhos do desktop e CTA de projetos abrem e navegam por hash; o foco vai para a janela controlável.
- Os atalhos visíveis de Skills e Formação foram incluídos, conforme confirmado pelo titular; isso é uma exceção deliberada à preservação pixel a pixel da área de ícones original.
- O estado não é persistido. “Restaurar janelas” abre tudo e restaura as posições.
- O estado fechado da barra usa borda tracejada e indicador de janela vazia, além de texto acessível “(fechada)”; essa escolha evita depender apenas de cor.
- Com todas as janelas controláveis fechadas, o aviso de sistema aparece logo abaixo do hero e oferece “Restaurar janelas”.

Os dados abaixo foram mantidos como rascunhos a partir do material já existente no repositório. Confirme-os com Karlos antes da publicação. Informações sem confirmação não devem ser promovidas a afirmações, métricas ou resultados.

| Arquivo | Campo | Valor atual ou estado | O que confirmar |
|---|---|---|---|
| [`src/data/profile.ts`](../src/data/profile.ts) | `role` | `Desenvolvedor de Software` | Cargo que deve aparecer no portfólio. |
| [`src/data/profile.ts`](../src/data/profile.ts) | `focus` | Desenvolvimento web · React · TypeScript · JavaScript | Foco profissional e tecnologias que podem ser destacadas. |
| [`src/data/profile.ts`](../src/data/profile.ts) | `summary` | Resumo sobre Engenharia de Software, aplicações web, regras de negócio e experiência de uso | Revisar o texto com o titular e remover qualquer afirmação que não represente sua experiência. |
| [`src/data/profile.ts`](../src/data/profile.ts) | `availableForHire`, `showLiveBadge` | `false` (indicadores ocultos) | Só habilitar disponibilidade ou selo LIVE após confirmação explícita. |
| [`src/data/profile.ts`](../src/data/profile.ts) | `links.github`, `links.linkedin`, `links.email` | URLs e e-mail atualmente cadastrados | Testar cada destino e confirmar que são os contatos públicos corretos. |
| [`src/data/profile.ts`](../src/data/profile.ts) | `links.resumeUrl` | `/curriculo.pdf`; o arquivo existe em `public/` | Confirmar que o PDF é a versão atual e aprovada para divulgação. |
| [`src/data/projects.ts`](../src/data/projects.ts) | AcomFinance — `status` | `prototype` (não exibido como status) | Confirmar estágio atual, funcionalidades descritas e tecnologias utilizadas. |
| [`src/data/projects.ts`](../src/data/projects.ts) | AcomFinance — resumo | Finanças pessoais, extração de dados e conciliação de extratos em PDF | Validar escopo e quais funcionalidades estão implementadas. Versão, disponibilidade pública e tamanho foram omitidos até haver confirmação. |
| [`src/data/projects.ts`](../src/data/projects.ts) | GameStore — `status` | `study` (não exibido como status) | Confirmar estágio atual e se a referência ao repositório pode ser publicada. |
| [`src/data/projects.ts`](../src/data/projects.ts) | GameStore — resumo e tecnologias | API REST, persistência com EF Core e tecnologias listadas no arquivo | Validar funcionalidades existentes, detalhes técnicos e stack efetivamente usada. Tamanho e versão foram omitidos até haver confirmação. |
| [`src/data/projects.ts`](../src/data/projects.ts) | Producer / Include Jr. — `status` | `in-progress` (não exibido como status) | Confirmar estágio atual e a participação individual. |
| [`src/data/projects.ts`](../src/data/projects.ts) | Producer / Include Jr. — resumo e tecnologias | Gestão de demandas, regras de negócio e tecnologias listadas no arquivo | Confirmar escopo, tecnologias, entregas e responsabilidades pessoais. O rótulo “Frontend Lead” e o status de entrega foram removidos até confirmação. |
| [`src/data/projects.ts`](../src/data/projects.ts) | Hackathon Siará Tech Summit 2024 — status, resumo e tecnologias | Protótipo; descrição e stack estão no arquivo | Confirmar contribuição individual, desafio, solução e tecnologias. Premiação, colocação, duração e reconhecimento foram omitidos até confirmação. |
| [`src/data/experience.ts`](../src/data/experience.ts) | Include Jr. — Desenvolvedor Web Front-end | Organização e cargo cadastrados; período e descrição ausentes | Confirmar cargo, período, responsabilidades e exemplos concretos. |
| [`src/data/experience.ts`](../src/data/experience.ts) | Include Jr. — Diretor de Projetos | Organização e cargo cadastrados; período e descrição ausentes | Confirmar período, responsabilidades e distinção entre gestão e contribuição técnica. |
| [`src/data/experience.ts`](../src/data/experience.ts) | Herby Vision — Estágio | Organização e tipo de experiência cadastrados; período e descrição ausentes | Confirmar período e atividades executadas antes de detalhá-las. |
| [`src/data/skills.ts`](../src/data/skills.ts) | Categorias e tecnologias | Front-end, back-end/APIs, dados e ferramentas listadas no arquivo | Confirmar tecnologias e exemplos de uso demonstráveis em projetos. |
| [`src/data/education.ts`](../src/data/education.ts) | Engenharia de Software — UFC | Curso e instituição cadastrados; situação e período ausentes | Confirmar situação atual, período e previsão de conclusão. |

Métricas, versões, prêmios, tamanhos de arquivos e estados de publicação sem confirmação foram removidos da interface. Revisite os comentários `TODO: confirmar` nos arquivos de dados quando as informações forem verificadas.
