# Sistema de Gestão Hoteleira

Este é um sistema de gestão hoteleira desenvolvido como projeto acadêmico. A aplicação permite gerenciar quartos, reservas, usuários, pagamentos e avaliações.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- EJS (Embedded JavaScript templates)
- HTML, CSS e JavaScript
- Fetch API para consumo de endpoints

## Funcionalidades

- Listagem, cadastro, edição e exclusão de quartos
- Visualização detalhada de informações de quartos
- Interface responsiva e amigável

## Requisitos para Execução

- Node.js (versão 14.x ou superior)
- PostgreSQL (versão 12.x ou superior)
- Git

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
DB_SSL=FALSE
```

- Execute o script de inicialização do banco de dados:

```bash
node scripts/init-db.js
```

### 4. Inicie o servidor

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`

## Estrutura do Projeto

- `controllers/`: Controladores para gerenciar as requisições
- `models/`: Modelos para interação com o banco de dados
- `views/`: Templates EJS para renderização de páginas
- `public/`: Arquivos estáticos (CSS, JavaScript, imagens)
- `routes/`: Rotas da aplicação
- `scripts/`: Scripts de inicialização
- `config/`: Configurações da aplicação

## Endpoints da API

A API pode ser consumida através dos seguintes endpoints:

- `GET /api/quartos`: Lista todos os quartos
- `GET /api/quartos/:id`: Busca um quarto pelo ID
- `POST /api/quartos`: Cria um novo quarto
- `PUT /api/quartos/:id`: Atualiza um quarto existente
- `DELETE /api/quartos/:id`: Remove um quarto

Outros endpoints seguem o mesmo padrão para as demais entidades (usuários, reservas, etc.).

## Autor

Nome do Autor - Projeto desenvolvido para a disciplina de Programação - 2025
