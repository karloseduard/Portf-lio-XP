# Planejamento do Novo Portfólio — Karlos Eduardo

> **Versão atualizada em 25/11/2026**  
> Direção aprovada: **Windows XP reinterpretado em pixel art · Desenvolvedor de Software · experiência profissional e objetiva**.

## 1. Visão do projeto

Criar um portfólio profissional, responsivo e acessível, com identidade visual inspirada no Windows XP e executada em pixel art. O site deve apresentar a trajetória, os projetos, as habilidades e os meios de contato de Karlos de forma clara para recrutadores e profissionais de tecnologia.

O portfólio **não será um jogo**. A metáfora de sistema operacional retrô será uma camada visual que organiza o conteúdo, sem dificultar a leitura nem exigir que o visitante descubra como navegar.

### Objetivos principais

1. Comunicar rapidamente quem é Karlos, sua área de atuação e os tipos de problema que gosta de resolver.
2. Demonstrar capacidade técnica por meio de projetos, decisões de desenvolvimento e desafios enfrentados.
3. Apresentar experiência profissional, participação em equipe, formação e conquistas.
4. Facilitar o acesso ao currículo, GitHub, LinkedIn e contato.
5. Ter uma identidade visual memorável sem sacrificar desempenho, acessibilidade ou clareza.

### Público prioritário

- Recrutadores e pessoas de RH que precisam entender o perfil rapidamente.
- Tech recruiters e lideranças técnicas que desejam avaliar projetos e conhecimentos.
- Desenvolvedores e profissionais que visitam o portfólio por indicação.

## 2. Posicionamento profissional

### Direção escolhida

**Desenvolvedor de Software, com experiência e projetos em desenvolvimento web.**

O posicionamento deve ser amplo o suficiente para oportunidades de desenvolvimento de software, sem esconder a experiência mais consistente em front-end e aplicações web. React, JavaScript e TypeScript podem aparecer com destaque, enquanto Node.js, APIs, bancos de dados e C#/.NET entram como conhecimentos e experiências complementares, sempre de acordo com o que já foi efetivamente implementado.

### Sugestão de apresentação inicial

**Karlos Eduardo**  
**Desenvolvedor de Software**  
Desenvolvimento web · React · TypeScript · JavaScript

> Sou estudante de Engenharia de Software e desenvolvedor, interessado em construir aplicações úteis, bem estruturadas e com boa experiência de uso. Gosto de aprender novas tecnologias, resolver problemas e colaborar no desenvolvimento de soluções.

Este texto é uma base editorial, não uma versão definitiva. Deve ser ajustado para refletir com precisão o momento profissional e os objetivos de Karlos.

### Princípios de comunicação

- Priorizar linguagem direta e profissional.
- Explicar a contribuição individual em projetos de equipe.
- Não usar percentuais arbitrários para representar nível de habilidade.
- Não apresentar tecnologias estudadas como experiência profissional avançada.
- Não inventar métricas, usuários, resultados ou responsabilidades.
- Distinguir projetos publicados, projetos em desenvolvimento e estudos.

## 3. Identidade visual: Windows XP em pixel art

### Conceito

Um **desktop próprio inspirado no Windows XP**, com referências visuais ao sistema — barra de tarefas azul, botão Iniciar, janelas com barra de título, botões de controle e elementos de interface — reinterpretadas em pixel art e combinadas à identidade do avatar.

A proposta não é reproduzir fielmente o Windows XP, mas criar uma interface autoral com atmosfera retrô, acolhedora e organizada.

### Direção de arte

- **Papel de parede:** azul-petróleo/azul profundo inspirado no avatar.
- **Janelas:** superfícies claras ou azuladas, barras de título azuis e bordas pixeladas.
- **Barra de tarefas:** azul, com contraste suficiente e botão Iniciar em destaque.
- **Cores de apoio:** tons terrosos/terracota, preto e vermelho-alaranjado extraídos do avatar.
- **Pixel art:** poucos detalhes, pixels nítidos e sombras simples; evitar excesso de texturas.
- **Ícones:** linguagem visual consistente, com versões pixeladas dos ícones necessários.
- **Símbolo de marca:** usar uma nuvem estilizada inspirada no elemento presente no avatar, preferencialmente em uma versão própria e consistente.

### Paleta

A paleta definitiva ainda precisa ser extraída do arquivo `Group_5.png`. Até isso ser feito, os nomes das cores são diretrizes, não códigos HEX aprovados.

| Função | Direção de cor | Situação |
|---|---|---|
| Papel de parede | Azul-petróleo / azul profundo | A confirmar pelo avatar |
| Barra de tarefas | Azul XP reinterpretado | A definir em conjunto com a paleta |
| Barra de título | Azul médio com contraste | A definir |
| Superfície de janela | Cinza-claro / azul muito claro | A definir |
| Texto principal | Preto ou azul-marinho muito escuro | A definir |
| Destaque | Terracota / laranja | A confirmar pelo avatar |
| Destaque secundário | Vermelho-alaranjado | A confirmar pelo avatar |
| Estados | Verde para sucesso; cores semânticas para alerta/erro | A definir |

**Meta:** fechar uma paleta enxuta de aproximadamente 6 a 8 cores-base, com variações de contraste derivadas delas. Verificar contraste de texto e controles antes de aprovar.

### Tipografia

- **Títulos curtos e elementos decorativos:** fonte pixel, como Press Start 2P, usada com moderação.
- **Textos, descrições e leitura longa:** fonte legível sem estética pixel, como Inter, Atkinson Hyperlegible ou equivalente.
- **Dados técnicos e pequenos rótulos:** fonte monoespaçada quando fizer sentido.

A tipografia pixel não deve ser usada em parágrafos longos, pois prejudica a leitura.

## 4. Experiência de navegação

### Princípio central

A experiência será **profissional primeiro, temática depois**. O visitante deve conseguir entender o perfil e chegar aos projetos em poucos segundos.

- O scroll vertical será a navegação principal.
- A barra de tarefas terá atalhos para as seções.
- As janelas serão componentes visuais que organizam o conteúdo.
- Os controles `_`, `□` e `X` serão decorativos, a menos que uma ação real e acessível seja implementada.
- Nenhuma informação essencial dependerá de hover, animação, som ou interação complexa.
- Não haverá tela de carregamento obrigatória antes de mostrar o conteúdo.

### Fluxo recomendado

1. O visitante chega diretamente à apresentação.
2. Identifica nome, cargo, foco técnico e links principais.
3. Pode abrir o currículo rapidamente ou seguir para os projetos.
4. Conhece a trajetória e as habilidades.
5. Encontra contato e redes profissionais no final — também acessíveis pela navegação fixa.

### Wireframe textual

```text
┌──────────────────────────────────────────────────────────────┐
│ DESKTOP PIXEL ART                                             │
│                                                              │
│  [Sobre]        [Projetos]        [Experiência]      [Skills]  │
│                                                              │
│  ┌─ boas-vindas.exe ────────────────────────────────────────┐  │
│  │ [AVATAR]  Karlos Eduardo                                 │  │
│  │           Desenvolvedor de Software                      │  │
│  │           Desenvolvimento web · React · TypeScript       │  │
│  │                                                         │  │
│  │           [Ver projetos] [Baixar currículo]              │  │
│  │           [GitHub] [LinkedIn]                             │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ sobre.txt ──────────────────────────────────────────────┐  │
│  │ Apresentação, interesses e formação                      │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ projetos/ ──────────────────────────────────────────────┐  │
│  │ Projeto em destaque + outros projetos                    │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ experiencia/ ───────────────────────────────────────────┐  │
│  │ Trajetória profissional, atuação em equipe e conquistas   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ skills/ ────────────────────────────────────────────────┐  │
│  │ Tecnologias organizadas por área e ligadas a projetos     │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ contato.exe ────────────────────────────────────────────┐  │
│  │ E-mail · LinkedIn · GitHub                               │  │
│  └─────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│ [☁ Iniciar] [Sobre] [Projetos] [Experiência] [Contato]       │
└──────────────────────────────────────────────────────────────┘
```

## 5. Estrutura de conteúdo

### 5.1. Apresentação — `boas-vindas.exe`

**Objetivo:** permitir que o visitante entenda imediatamente quem é Karlos e encontre os próximos passos.

Conteúdo:
- Nome e cargo principal.
- Resumo profissional de duas ou três frases.
- Tecnologias de maior familiaridade, sem classificações percentuais.
- Localização em nível de cidade/estado, se Karlos optar por mantê-la pública.
- Links para GitHub, LinkedIn e currículo em PDF.
- Ação principal: `Ver projetos`.
- Ação secundária: `Baixar currículo`.

Interações:
- Animação curta e discreta do avatar.
- Botões com estados de hover, foco e pressionado.
- Links funcionando como links reais, com rótulos claros.

### 5.2. Sobre — `sobre.txt`

Conteúdo:
- Formação em Engenharia de Software na UFC.
- Resumo da trajetória em desenvolvimento.
- Interesses técnicos atuais.
- Tipo de oportunidade buscada, sem limitar desnecessariamente o perfil.

A ficha de status pode existir como recurso visual, mas não deve inventar atributos como “nível 87” ou “experiência 95%”. Caso seja usada, deve apresentar informações verificáveis, como área de foco, formação e interesses.

### 5.3. Projetos — `projetos/`

Esta será uma das seções de maior destaque do portfólio.

Cada projeto terá um card resumido e uma página, modal ou painel de detalhes acessível. A informação essencial deve estar disponível sem depender de hover.

**Modelo de estudo de caso:**
1. Nome e status do projeto.
2. Contexto e problema que motivou a solução.
3. Objetivo do projeto.
4. Responsabilidade individual de Karlos.
5. Funcionalidades implementadas.
6. Tecnologias utilizadas e onde foram aplicadas.
7. Desafio técnico e como foi abordado.
8. Resultado atual, limitações conhecidas e próximos passos.
9. Capturas de tela ou demonstração.
10. Repositório e link publicado, quando disponíveis.

**Projetos candidatos a destaque:**

| Projeto | O que pode demonstrar | Cuidados editoriais |
|---|---|---|
| **AcomFinance** | Aplicação de finanças pessoais, React/TypeScript, Node.js/Express, MongoDB e processamento de extratos PDF | Identificar o que está implementado, o que é protótipo e o que ainda está planejado. Não afirmar automação ou classificação inteligente como concluída sem evidência. |
| **GameStore** | Estudos com C#, .NET, API, Entity Framework Core, SQLite e integração com front-end | Apresentar como projeto de estudo em evolução, detalhando apenas endpoints e funcionalidades existentes. |
| **Producer / Include Jr.** | Desenvolvimento em equipe, projeto com regras de negócio, organização de entregas e integração | Explicitar a contribuição individual e o estágio real de cada entrega. Não atribuir ao autor funcionalidades que foram feitas por outras pessoas. |
| **Hackathon Siará Tech Summit 2024** | Resolução de problema, colaboração e prototipação sob prazo; conquista de primeiro lugar | Explicar o desafio, a solução, a contribuição individual e o reconhecimento recebido. |

A ordem final deve ser definida pela qualidade das evidências e pelo alinhamento com as vagas, não apenas pela tecnologia usada.

### 5.4. Experiência — `experiencia/`

Apresentar uma linha do tempo com empresas, cargos, períodos e responsabilidades.

**Include Jr.**
- Registrar a atuação como Desenvolvedor Web Front-end.
- Apresentar separadamente a experiência como Diretor de Projetos, incluindo período e responsabilidades reais.
- Destacar colaboração, organização de projetos e participação nas entregas, sem misturar responsabilidades de gestão com atividades técnicas.
- Selecionar exemplos concretos de projetos e problemas enfrentados.

**Herby Vision**
- Registrar o estágio e seu período.
- Destacar apoio em atualizações e ajustes de interface front-end.
- Mencionar a geração/análise de relatórios de Google Analytics em PDF com Python e pandas, se essa descrição continuar fiel às atividades realizadas.

Cada experiência pode expandir como um arquivo, mas o resumo principal deve estar visível na página.

### 5.5. Habilidades — `skills/`

Agrupar tecnologias e ferramentas por contexto, evitando barras de proficiência arbitrárias.

Categorias sugeridas:
- **Desenvolvimento front-end:** React, JavaScript, TypeScript, HTML e CSS.
- **Back-end e APIs:** Node.js, Express e C#/.NET, conforme o nível de prática demonstrável.
- **Dados:** MongoDB, SQLite e ferramentas utilizadas nos projetos.
- **Ferramentas e colaboração:** Git, GitHub, Figma e práticas de organização de projetos.

Cada tecnologia deve poder levar a um projeto ou exemplo em que foi usada. Pode haver filtros por categoria, mas sem obrigar o visitante a filtrar para ver todo o conteúdo.

### 5.6. Formação e cursos — `formacao/`

- Engenharia de Software — UFC, com situação atual e previsão de conclusão devidamente atualizadas.
- Cursos e certificações relevantes para desenvolvimento de software.
- Cursos em andamento devem estar identificados como “em andamento”.
- Cursos de cibersegurança e AWS podem entrar em uma subseção de formação complementar, caso sejam relevantes para o posicionamento profissional que Karlos deseja comunicar.

### 5.7. Contato — `contato.exe`

- E-mail profissional.
- LinkedIn.
- GitHub.
- Formulário simples, opcional.
- Mensagem clara após envio, sem simular sucesso antes da confirmação do serviço.

O formulário deve ter validação, feedback de erro e proteção básica contra spam. Os links de contato devem continuar disponíveis mesmo que o formulário não funcione.

## 6. Interações: nível profissional

A escolha é uma experiência **profissional**, então as interações devem reforçar a identidade sem competir com o conteúdo.

### Interações prioritárias

| Elemento | Comportamento | Prioridade |
|---|---|---|
| Barra de tarefas | Navega para âncoras/seções da página | Alta |
| Botão Iniciar | Abre menu simples com atalhos para seções e currículo | Alta |
| Cards de projeto | Abrem detalhes completos do projeto | Alta |
| Links e botões | Estados visuais claros de hover, foco e clique | Alta |
| Avatar | Uma ou duas animações curtas, sem bloquear a leitura | Média |
| Filtro de skills | Filtra tecnologias por categoria, com opção de limpar | Média |
| Linha do tempo | Expande detalhes de cada experiência | Média |
| Cursor personalizado | Apenas como detalhe opcional; manter cursor padrão como alternativa | Baixa |
| Sons | Desativados por padrão; podem ser omitidos na primeira versão | Baixa |
| Easter egg/minigame | Não incluir na primeira versão | Fora do escopo inicial |

### Regras para as janelas

- Aparência de janela do Windows XP reinterpretada em pixel art.
- Não permitir que fechar ou minimizar uma janela esconda conteúdo necessário.
- Não exigir arrastar janelas para acessar seções.
- No desktop, os controles de janela podem ser somente decorativos.
- Se um modal/painel for usado para detalhes de projeto, deve fechar com botão claro e tecla `Esc`, manter foco acessível e devolver o foco ao elemento que o abriu.

### Animações

- Curtas, discretas e funcionais.
- Não atrasar a apresentação do conteúdo.
- Respeitar `prefers-reduced-motion`.
- Não usar texto digitado automaticamente em parágrafos importantes; a mensagem deve estar disponível imediatamente.

## 7. Responsividade e acessibilidade

### Desktop

- Fundo de desktop e janelas completas.
- Barra de tarefas fixa ou sticky, sem cobrir o conteúdo.
- Largura confortável para leitura; evitar linhas de texto excessivamente longas.

### Tablet

- Janelas ocupam a largura disponível.
- Navegação reduzida, preservando acesso direto às principais seções.
- Cards em duas colunas quando houver espaço suficiente.

### Mobile

- Abandonar a metáfora de janelas sobrepostas: transformar cada janela em um card/seção empilhada.
- Barra fixa compacta ou menu simples; não ocupar espaço excessivo da tela.
- Botões e alvos de toque confortáveis.
- Não usar arrastar, hover obrigatório ou cursor personalizado.
- Garantir que o currículo e os links funcionem com poucos toques.

### Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- Hierarquia de títulos coerente.
- Navegação completa por teclado.
- Indicador de foco visível.
- Contraste adequado entre texto, fundo e controles.
- Texto alternativo útil para imagens informativas; imagens decorativas com alternativa vazia.
- Rótulos acessíveis para ícones e botões.
- Modais com gestão de foco e fechamento por teclado.
- Respeito a `prefers-reduced-motion`.
- Não depender apenas de cor para transmitir estado.

## 8. Arquitetura técnica

### Stack definida como proposta

- **Vite + React + TypeScript**.
- **Tailwind CSS** para tokens e estilos utilitários, ou CSS Modules se a implementação pedir maior isolamento. Evitar misturar abordagens sem necessidade.
- **Framer Motion** somente para animações que realmente agreguem valor; CSS pode resolver a maioria das micro-interações.
- **Lucide React** ou conjunto próprio de ícones pixelados, mantendo consistência visual.
- **Vercel** para deploy, caso continue sendo a plataforma escolhida.

### Organização sugerida

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.ts                 # Se houver rotas
├── components/
│   ├── layout/
│   │   ├── DesktopShell.tsx
│   │   ├── Taskbar.tsx
│   │   ├── StartMenu.tsx
│   │   └── WindowFrame.tsx
│   ├── navigation/
│   │   └── SectionNav.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetails.tsx
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   ├── skills/
│   │   └── SkillsGrid.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Dialog.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── education.ts
├── assets/
│   ├── avatar/
│   ├── sprites/
│   ├── projects/
│   └── icons/
├── styles/
│   ├── tokens.css
│   └── global.css
└── types/
    └── portfolio.ts
```

### Organização dos dados

Manter o conteúdo separado dos componentes. Em vez de um único `cv.json` grande, usar arquivos tipados por domínio, para facilitar a manutenção e a inclusão de novos projetos.

Modelo ilustrativo de projeto:

```ts
export type Project = {
  slug: string;
  title: string;
  status: "completed" | "in-progress" | "prototype" | "study";
  summary: string;
  problem: string;
  role: string;
  solution: string;
  technologies: string[];
  challenges: string[];
  results: string[];
  images: string[];
  repositoryUrl?: string;
  liveUrl?: string;
};
```

Os campos devem ser preenchidos apenas quando houver informação real. Para um projeto de estudo ou protótipo, adaptar o conteúdo sem inventar resultados.

### Componentes centrais

- `DesktopShell`: papel de parede, largura de conteúdo e estrutura geral.
- `WindowFrame`: moldura visual reutilizável para cada seção.
- `Taskbar`: navegação persistente e atalho para currículo.
- `StartMenu`: menu de atalhos acessível por teclado.
- `ProjectCard`: resumo do projeto.
- `ProjectDetails`: estudo de caso completo.
- `ExperienceTimeline`: linha do tempo profissional.
- `SkillsGrid`: tecnologias organizadas por categoria.
- `Dialog`: modal acessível para detalhes, quando necessário.

## 9. SEO, desempenho e qualidade

### SEO e compartilhamento

- Título e descrição únicos e objetivos.
- Metadados Open Graph para prévia ao compartilhar.
- Favicon coerente com a identidade visual.
- Links com nomes descritivos.
- Conteúdo importante renderizado no HTML da página, sem depender de interações para ser encontrado.

### Desempenho

- Exportar imagens em dimensões adequadas e formatos modernos, quando possível.
- Comprimir capturas de tela dos projetos.
- Carregar imagens de projeto sob demanda quando a seção estiver próxima da tela.
- Evitar bibliotecas pesadas para animações simples.
- Evitar vídeos e efeitos de fundo que prejudiquem dispositivos modestos.
- Definir dimensões de imagens para reduzir mudanças de layout durante o carregamento.

### Qualidade antes de publicar

- Testar links externos e download do currículo.
- Testar formulário, estados de erro e confirmação real.
- Conferir erros no console e build de produção.
- Testar Chrome, Firefox e Edge em desktop; testar navegadores móveis comuns.
- Testar teclado, leitor de tela quando possível e preferência por movimento reduzido.
- Conferir responsividade em larguras pequenas e zoom de 200%.
- Revisar textos, datas, status dos projetos e consistência do currículo.

## 10. Escopo e prioridades de entrega

### Fase 1 — Conteúdo e estrutura profissional (MVP)

**Objetivo:** publicar uma versão completa, mesmo que ainda simples visualmente.

- [ ] Confirmar cargo, resumo profissional e links.
- [ ] Atualizar currículo PDF.
- [ ] Selecionar de 3 a 4 projetos com evidências.
- [ ] Escrever estudos de caso dos projetos selecionados.
- [ ] Escrever experiências, formação e cursos.
- [ ] Construir página com todas as seções e navegação por scroll.
- [ ] Implementar responsividade básica.

### Fase 2 — Identidade Windows XP em pixel art

- [ ] Extrair a paleta do avatar `Group_5.png`.
- [ ] Criar tokens de cor, bordas, sombras e espaçamentos.
- [ ] Definir fontes para títulos e textos.
- [ ] Criar moldura de janela reutilizável.
- [ ] Criar barra de tarefas e menu Iniciar.
- [ ] Preparar avatar, nuvem autoral e ícones.
- [ ] Aplicar a identidade visual a todas as seções.

### Fase 3 — Interações profissionais

- [ ] Atalhos da barra de tarefas para as seções.
- [ ] Menu Iniciar com links rápidos.
- [ ] Detalhes completos dos projetos.
- [ ] Linha do tempo expansível.
- [ ] Filtro simples de habilidades.
- [ ] Micro-animações discretas do avatar e dos controles.

### Fase 4 — Qualidade e publicação

- [ ] Revisar acessibilidade e contraste.
- [ ] Revisar SEO e prévia de compartilhamento.
- [ ] Otimizar imagens e fontes.
- [ ] Testar teclado, mobile e movimento reduzido.
- [ ] Conferir links, currículo e formulário.
- [ ] Publicar na Vercel e validar a versão de produção.

### Fora do escopo da primeira versão

- Minigame ou easter egg.
- Janelas livremente arrastáveis.
- Sistema complexo de minimizar/restaurar janelas.
- Sons de interface.
- Tela de boot obrigatória.
- Tradução completa para inglês, até que o conteúdo em português esteja finalizado.

## 11. Decisões aprovadas e pendências

### Decisões aprovadas

- [x] Identidade visual inspirada no Windows XP.
- [x] Página profissional com estética pixel art; não será um jogo.
- [x] Posicionamento principal: Desenvolvedor de Software.
- [x] Experiência de navegação profissional, com interações discretas.
- [x] Scroll como fluxo principal.
- [x] Mobile com seções empilhadas, sem arrastar janelas.
- [x] Conteúdo e aparência separados na implementação.

### Pendências para fechar antes ou durante a implementação

- [ ] Confirmar texto final de apresentação e cargo exibido.
- [ ] Confirmar links de GitHub, LinkedIn e e-mail.
- [ ] Confirmar períodos e descrições das experiências.
- [ ] Selecionar projetos e confirmar o status atual de cada um.
- [ ] Reunir capturas de tela e links demonstráveis.
- [ ] Extrair e validar a paleta exata do avatar.
- [ ] Escolher a fonte pixel e a fonte de leitura.
- [ ] Decidir se a primeira versão será somente em português ou bilíngue.
- [ ] Definir como o formulário de contato será enviado, caso seja incluído.

## 12. Próximo passo recomendado

Antes de aprofundar animações e componentes, fechar o **conteúdo profissional**: apresentação, currículo, projetos escolhidos e descrições da experiência. Em seguida, montar um protótipo estático da página inicial e da seção de projetos usando a identidade Windows XP em pixel art.

**Critério de sucesso:** uma pessoa que nunca conheceu Karlos deve conseguir, em menos de um minuto, identificar sua área de atuação, abrir um projeto relevante, entender qual foi sua contribuição e encontrar uma forma de contato — sem precisar aprender a usar o site.
