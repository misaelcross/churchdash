# ChurchDash - Dashboard Administrativo para Igrejas

<div align="center"><strong>Sistema Administrativo para Igrejas com Next.js 14</strong></div>
<div align="center">Construído com Next.js App Router</div>
<br />
<div align="center">
<a href="https://github.com/misaelcross/churchdash">Repositório</a>
</div>

## Visão Geral

ChurchDash é um sistema administrativo moderno para igrejas, construído com as seguintes tecnologias:

- Framework - [Next.js 14](https://nextjs.org/14)
- Linguagem - [TypeScript](https://www.typescriptlang.org)
- Estilização - [Tailwind CSS](https://tailwindcss.com)
- Componentes - [Shadcn-ui](https://ui.shadcn.com)
- Validações de Schema - [Zod](https://zod.dev)
- Gerenciamento de Estado - [Zustand](https://zustand-demo.pmnd.rs)
- Gerenciador de parâmetros de busca - [Nuqs](https://nuqs.47ng.com/)
- Autenticação - [Auth.js](https://authjs.dev/)
- Tabelas - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Formulários - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Interface Command+k - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Hooks de Pré-commit - [Husky](https://typicode.github.io/husky/)
- Formatação - [Prettier](https://prettier.io)

## Páginas

| Páginas       | Especificações                                                                                               |
| :------------ | :----------------------------------------------------------------------------------------------------------- |
| Login         | Autenticação com **NextAuth** suportando login social e por email                                            |
| Dashboard     | Cards com gráficos recharts para análises                                                                    |
| Membros       | Tabelas Tanstack com busca server-side, filtros e paginação usando Nuqs                                      |
| Membros/novo  | Formulário de Membro com shadcn form (react-hook-form + zod)                                                 |
| Produtos      | Tabelas Tanstack com busca server-side, filtros e paginação usando Nuqs                                      |
| Produtos/novo | Formulário de Produto com shadcn form (react-hook-form + zod)                                                |
| Perfil        | Formulários dinâmicos multi-etapas usando react-hook-form e zod para validação                               |
| Quadro Kanban | Quadro de gerenciamento de tarefas com drag n drop usando dnd-kit e zustand para persistir estado localmente |
| Not Found     | Página Not Found adicionada no nível raiz                                                                    |

## Começando

Siga estes passos para clonar o repositório e iniciar o servidor de desenvolvimento:

1. Clone o repositório:

```bash
git clone https://github.com/misaelcross/churchdash.git
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env.local` copiando o arquivo de exemplo:

```bash
cp env.example.txt .env.local
```

4. Adicione as variáveis de ambiente necessárias ao arquivo `.env.local`

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Agora você deve conseguir acessar a aplicação em http://localhost:3000.

> [!WARNING]  
> Após clonar ou fazer fork do repositório, tenha cuidado ao puxar ou sincronizar com as últimas alterações, pois isso pode resultar em conflitos.
