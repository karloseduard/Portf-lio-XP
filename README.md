# Portfólio — Karlos Eduardo

Portfólio profissional de desenvolvedor de software com identidade visual inspirada no **Windows XP, reinterpretado em pixel art**.

O site **não é um jogo**. A metáfora de sistema operacional retrô é uma camada visual que organiza o conteúdo, sem atrapalhar a leitura: o visitante rola a página normalmente e encontra rapidamente quem sou, o que construí e como entrar em contato.

> 🚧 **Status:** em desenvolvimento. O design está aprovado e a implementação segue em etapas (veja o [roadmap](#roadmap)).

<!-- TODO: adicionar o link do site publicado quando houver deploy -->
<!-- 🔗 **Site:** https://seu-dominio.vercel.app -->

## Design de referência

![Design de referência do portfólio](docs/design/tela-aprovada.png)

*Protótipo visual usado como referência para a implementação. Alguns textos e números da imagem são decorativos e não representam dados reais do currículo.*

## Conceito

- **Desktop próprio estilo Windows XP:** barra de tarefas azul, botão Iniciar, janelas com barra de título e ícones na área de trabalho, tudo em pixel art.
- **Identidade a partir do avatar:** paleta e linguagem visual derivadas do meu avatar em pixel art, que também é o elemento de apresentação da página.
- **Profissional primeiro, temático depois:** o scroll vertical é a navegação principal, e nenhuma informação essencial depende de hover, animação ou som.
- **Tipografia com função:** fonte pixel só em títulos curtos e detalhes decorativos; textos em fonte legível; rótulos técnicos em monoespaçada.

## Seções

| Janela | Conteúdo |
|---|---|
| `boas-vindas.exe` | Apresentação, cargo, tecnologias principais, currículo e links |
| `sobre.txt` | Formação, interesses e tipo de oportunidade buscada |
| `projetos/` | Projetos em destaque, com estudo de caso de cada um |
| `experiencia/` | Trajetória profissional em linha do tempo |
| `skills/` | Tecnologias organizadas por área e ligadas a projetos |
| `contato.exe` | E-mail, LinkedIn e GitHub |

## Tecnologias

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploy planejado na [Vercel](https://vercel.com/)

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) (versão LTS recente) e npm.

```bash
# clonar o repositório
git clone <URL-DO-REPOSITORIO>
cd Portf-lio-XP

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Por padrão, o site abre em `http://localhost:5173`.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza localmente a versão de produção |
| `npm run lint` | Verifica o código com o ESLint |

### Solução de problemas

**Windows: `listen EACCES: permission denied ::1:5173`**

O Windows pode reservar faixas de portas (por Hyper-V, WSL ou Docker) e bloquear a 5173. Fixe outra porta e o endereço IPv4 no `vite.config.ts`:

```ts
export default defineConfig({
  server: {
    port: 3000,
  },
})
```

## Estrutura do projeto

```text
├── .github/
│   └── copilot-instructions.md   # Regras do projeto para o GitHub Copilot
├── docs/
│   ├── PLANEJAMENTO.md           # Requisitos, conteúdo e decisões do projeto
│   └── design/                   # Design de referência
├── src/
│   ├── components/               # Layout, janelas, projetos, experiência, skills
│   ├── data/                     # Conteúdo (perfil, projetos, experiência, skills)
│   ├── assets/                   # Avatar, sprites, ícones e imagens
│   ├── styles/                   # Tokens de design e estilos globais
│   └── types/                    # Tipos TypeScript
└── public/
```

O conteúdo fica separado dos componentes (`src/data/`), então atualizar projetos ou experiências não exige mexer na interface.

## Acessibilidade e qualidade

- HTML semântico e hierarquia de títulos coerente
- Navegação completa por teclado, com foco visível
- Contraste adequado entre texto, fundo e controles
- Respeito a `prefers-reduced-motion`
- Layout responsivo: em telas pequenas, as janelas viram seções empilhadas

## Roadmap

- [x] Definição do conceito e do planejamento
- [x] Protótipo visual aprovado
- [ ] **Fase 1:** conteúdo e estrutura profissional
- [ ] **Fase 2:** identidade Windows XP em pixel art (tokens, janelas, barra de tarefas, menu Iniciar)
- [ ] **Fase 3:** interações profissionais (detalhes de projetos, linha do tempo expansível, filtro de skills)
- [ ] **Fase 4:** acessibilidade, SEO, desempenho e publicação

Os detalhes completos estão em [`docs/PLANEJAMENTO.md`](docs/PLANEJAMENTO.md).

## Autor

**Karlos Eduardo** — Desenvolvedor de Software, estudante de Engenharia de Software na UFC.

- GitHub: <!-- TODO: https://github.com/seu-usuario -->
- LinkedIn: <!-- TODO: https://www.linkedin.com/in/seu-perfil -->

## Licença

<!-- TODO: escolher a licença. Se o repositório for público e você não quiser que copiem o código, deixe "Todos os direitos reservados". -->
Todos os direitos reservados.
