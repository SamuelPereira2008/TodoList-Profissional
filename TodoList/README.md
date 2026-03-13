# TodoList Profissional (Estudo)

Este projeto é um **exercício de estudo** sobre **React + TypeScript**, com foco em:

- Uso de **mocks** via **MirageJS** para simular API (sem precisar de backend real);
- Requisições HTTP com **Axios**;
- Estilização com **styled-components**;
- Criação de componentes e páginas no estilo de uma aplicação de tarefas (todo list);
- Estrutura de projeto criada com **Vite** para desenvolvimento moderno.

## 📦 O que o projeto contém

- Uma interface para listar, adicionar e marcar tarefas como concluídas;
- Componentes em React + TypeScript (`src/components`, `src/pages`);
- Mock de API (MirageJS) em `src/mocks/server.ts`;
- Consumo de dados usando **Axios** em `src/shared/services/TodoAPI.ts`;
- Estilização modular com **styled-components** (`src/styles/*`, `src/components/*/style.ts`);
- Layout de página e cabeçalho com componentes reutilizáveis.

## 🛠️ Como rodar localmente

### 1) Instalar dependências

```bash
npm install
```

### 2) Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Depois de rodar, abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## 🚀 Por que este projeto foi feito

Este repositório foi criado para praticar e aprender:

- Arquitetura de componentes React com TypeScript;
- Teste de APIs via mocks (MirageJS) sem precisar de backend;
- Consumo de APIs com Axios;
- Estilização com styled-components;
- Criação de um fluxo simples de CRUD (criar/ler/alterar) de tarefas.

---

> 💡 Dica: se quiser alterar o mock ou verificar como os dados são gerados, olhe em `src/mocks/server.ts`.
