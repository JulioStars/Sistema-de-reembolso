# 💸 Sistema de Reembolso

Sistema completo de reembolso empresarial, onde colaboradores podem registrar solicitações de reembolso com envio de comprovantes, enquanto gestores têm acesso a um painel para análise e aprovação das solicitações, paginação para solicitações em grandes quantidades e pesquisas por nome de usuário.

O sistema possui autenticação e autorização de usuários, validação de formulários, gerenciamento de estados, comunicação com API externa e uma interface moderna construída com Tailwind CSS.

---

## 🔧 Tecnologias utilizadas

- **React** – biblioteca principal para criação da interface
- **TypeScript** – tipagem estática para maior segurança no desenvolvimento
- **Tailwind CSS** – estilização rápida e responsiva com classes utilitárias
- **Zod** – validação de formulários e dados do usuário
- **Axios** – requisições HTTP para comunicação com a API
- **React Router** – roteamento entre páginas da aplicação
- **Context API** – gerenciamento de autenticação e estado global
- **React Hooks** – gerenciamento de ciclo de vida e estados locais

---

## 🔐 Funcionalidades principais

### 👨‍💼 Funcionário
- Cadastro e login com autenticação
- Envio de solicitação de reembolso com:
  - Descrição da despesa
  - Valor
  - Upload de comprovante (imagem)

### 🧑‍💼 Gerente
- Acesso restrito por autorização
- Visualização de todas as solicitações feitas pelos funcionários
- Análise detalhada dos comprovantes enviados

---

## 🧠 Recursos técnicos

- **Validação avançada com Zod**: evita o envio de dados incompletos ou mal formatados.
- **Autenticação JWT (via API)**: protege as rotas e diferencia níveis de acesso.
- **Autorização por contexto global**: garante que apenas usuários autorizados vejam áreas restritas.
- **Upload de arquivos**: envio de comprovantes em imagem para análise dos gestores.
- **Requisições com Axios**: todas as ações (login, cadastro, envio, aprovação) se comunicam com uma API RESTful (também disponível no GitHub).
- **Interface responsiva**: design adaptado para mobile e desktop com Tailwind.

---

## 📌 Status do projeto
✅ Projeto concluído – sistema funcional com autenticação, autorização, upload de arquivos e comunicação com API.

---

## 🔗 API Backend
Este projeto consome uma API RESTful desenvolvida em conjunto, disponível neste repositório:

🔗 [Repositório da API de Reembolso](https://github.com/JulioStars/API-sistema-de-reemboldo.git)
