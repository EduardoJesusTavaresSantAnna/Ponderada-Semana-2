# Ponderada-Semana-2
 
---

## Sistema MVC (Model, View, Controller)
Nessa aplicação utilizei o modelo MVC, como pode ser observado no modelo de pastas abaixo:

```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)

```

Utilizei desse sistema para organizar melhor o desenvolvimento do meu software, separando a parte visual, a lógica do 
programa e o controle das ações. Isso facilita muito o trabalho em equipe, a manutenção do sistema e a realização de testes. 
Com o código dividido em partes bem definidas, fica mais fácil entender, modificar e reaproveitar o que já foi feito. Além 
disso, o uso do MVC torna o projeto mais limpo, eficiente e preparado para crescer no futuro.

---

## Para executar o projeto localmente:
📦 Requisitos
Para rodar o sistema, você precisa ter instalado:

Node.js (versão 16 ou superior)

PostgreSQL

Um gerenciador de pacotes (como npm ou yarn)

⚙️ Passo a Passo de Instalação
1. Clonar ou extrair o projeto
Se estiver compactado, basta extrair o ZIP. Se estiver em um repositório Git:
e como saida deve ser:
```
git clone <url-do-repo>
cd Sistema-de-Reservas
```
2. Instalar as dependências
No diretório raiz do projeto:
```
npm install
```
3. Configurar o banco de dados
Crie um banco no PostgreSQL (ex: sistema_reservas) e configure as tabelas de acordo com seus models.
- Configure o arquivo .env com sua string de conexão. Exemplo:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=sistema_reservas
```

4. Criar a estrutura do banco de dados
Use a seguinte base (exemplo SQL):
```sql
CREATE TABLE usuarios (
  id_usuario SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(100)
);

CREATE TABLE quartos (
  id_quartos SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  localizacao TEXT,
  capacidade INTEGER,
  comodidades TEXT,
  descricao TEXT,
  preco DECIMAL
);

CREATE TABLE reservas (
  id_reserva SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES usuarios(id_usuario),
  id_quarto INTEGER REFERENCES quartos(id_quartos),
  data_inicio DATE,
  data_fim DATE,
  status VARCHAR(50),
  preco_total DECIMAL
);

CREATE TABLE pagamentos (
  id_pagamento SERIAL PRIMARY KEY,
  id_reserva INTEGER REFERENCES reservas(id_reserva),
  id_usuario INTEGER REFERENCES usuarios(id_usuario),
  data_pagamento DATE,
  valor DECIMAL,
  metodo VARCHAR(50),
  status VARCHAR(50)
);

CREATE TABLE avaliacoes (
  id_avaliacao SERIAL PRIMARY KEY,
  id_reserva INTEGER REFERENCES reservas(id_reserva),
  id_usuario INTEGER REFERENCES usuarios(id_usuario),
  nota INTEGER,
  comentario TEXT,
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

5. Rodar o servidor
Se o ponto de entrada for app.js:
```
node server.js
```
Ou, se estiver usando nodemon para recarregamento automático:
```
npx nodemon server.js
```

6. rode no servidor local
```
Servidor rodando na porta 3000
```
Após isso, basta acessar o link " http://localhost:3000 "


🌐 Endpoints (exemplos)
Os endpoints dependem do conteúdo das rotas, mas presumindo RESTful:

- GET /usuarios

- POST /usuarios

- GET /reservas

- POST /reservas

- GET /quartos

- POST /avaliacoes

- POST /pagamentos

(Se quiser, posso gerar todos os arquivos de rotas para você)

✅ Funcionalidades
- Cadastro e autenticação de usuários

- Gerenciamento de quartos e suas informações

- Criação e visualização de reservas

- Pagamentos atrelados a reservas

- Avaliações feitas por usuários após as reservas
