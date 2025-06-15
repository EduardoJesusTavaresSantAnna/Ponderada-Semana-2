# 🏨 Sistema de Gestão Hoteleira

Sistema completo de gestão hoteleira desenvolvido como projeto acadêmico utilizando arquitetura MVC. A aplicação permite gerenciar quartos, reservas, usuários, pagamentos e avaliações de forma intuitiva e eficiente.

## 🚀 Funcionalidades Principais

### ✨ Gestão de Quartos
- ✅ Listagem completa de quartos disponíveis
- ✅ Cadastro de novos quartos com validação
- ✅ Edição de informações existentes
- ✅ Exclusão com confirmação de segurança
- ✅ Visualização em cards e tabelas

### 🎯 Interface e Experiência
- ✅ Design responsivo para desktop e mobile
- ✅ Navegação intuitiva entre páginas
- ✅ Feedback visual para todas as ações
- ✅ Tratamento adequado de erros
- ✅ Confirmações para ações críticas

### 🛠 Arquitetura Técnica
- ✅ Padrão MVC (Model-View-Controller)
- ✅ API REST para operações CRUD
- ✅ Comunicação assíncrona com Fetch API
- ✅ Templates dinâmicos com EJS
- ✅ Banco de dados PostgreSQL

## 🔧 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **pg** - Driver PostgreSQL para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **EJS** - Template engine para renderização dinâmica
- **HTML5** - Estruturação das páginas
- **CSS3** - Estilização e responsividade
- **JavaScript ES6+** - Interatividade e consumo de APIs
- **Fetch API** - Comunicação com backend

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16.x ou superior) - [Download aqui](https://nodejs.org/)
- **PostgreSQL** (versão 12.x ou superior) - [Download aqui](https://www.postgresql.org/download/)
- **Git** - [Download aqui](https://git-scm.com/)

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/EduardoJesusTavaresSantAnna/Ponderada-Semana-2.git
cd meu-projeto
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

```env
# Configurações do Banco de dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_aqui
DB_DATABASE=hotel
DB_SSL=FALSE

# Porta do servidor
PORT=3000
```

### 4️⃣ Inicialize o banco de dados
```bash
# Este comando criará o banco de dados e as tabelas necessárias
node scripts/init-db.js
```

### 5️⃣ Execute o servidor
```bash
npm start
```

### 6️⃣ Acesse a aplicação
Abra seu navegador e acesse: `http://localhost:3000`

## 🏗 Estrutura do Projeto

```
meu-projeto/
├── app.js                 # Arquivo principal da aplicação
├── package.json           # Dependências e scripts
├── .env                   # Variáveis de ambiente (criar)
├── config/
│   └── database.js        # Configuração do banco de dados
├── controllers/           # Lógica de negócio (MVC)
│   ├── quartosControllers.js
│   ├── usuariosController.js
│   └── ...
├── models/                # Interação com banco de dados
│   ├── quartosModel.js
│   ├── usuariosModel.js
│   └── ...
├── views/                 # Templates EJS
│   ├── index.ejs
│   ├── partials/
│   └── quartos/
├── routes/                # Definição de rotas
│   └── index.js
├── public/                # Arquivos estáticos
│   ├── css/
│   ├── js/
│   └── img/
└── scripts/               # Scripts de inicialização
    ├── init-db.js
    └── init.sql
```

## 🌐 Endpoints da API

A aplicação fornece uma API REST completa para integração:

### 🏨 Quartos
- `GET /api/quartos` - Lista todos os quartos
- `GET /api/quartos/:id` - Busca quarto específico
- `POST /api/quartos` - Cria novo quarto
- `PUT /api/quartos/:id` - Atualiza quarto existente
- `DELETE /api/quartos/:id` - Remove quarto

### 👤 Usuários
- `GET /api/usuarios` - Lista todos os usuários
- `POST /api/usuarios` - Cria novo usuário
- `PUT /api/usuarios/:id` - Atualiza usuário
- `DELETE /api/usuarios/:id` - Remove usuário

### 📅 Reservas
- `GET /api/reservas` - Lista todas as reservas
- `POST /api/reservas` - Cria nova reserva
- `PUT /api/reservas/:id` - Atualiza reserva
- `DELETE /api/reservas/:id` - Cancela reserva

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos como parte do curso de Engenharia de Computação do Inteli.

## 👨‍💻 Autor

**Eduardo Jesus Tavres Sant'Anna** - Estudante de Engenharia de Computação
- GitHub: [@Eduardo Jesus Tavares Sant'Anna](https://github.com/EduardoJesusTavaresSantAnna)

## 🙏 Agradecimentos

- Inteli - Instituto de Tecnologia e Liderança
- Professores e mentores do módulo de programação
- Colegas de turma pelas discussões e feedback

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**
