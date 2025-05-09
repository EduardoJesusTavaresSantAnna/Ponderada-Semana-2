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

Para executar o projeto, basta baixar as pastas do arquivo conforme estão no repósitorio. Com isso execute no temrinal o comando:
```
node server.js
```
e como saida deve ser:
```
Servidor rodando na porta 3000
```
Após isso, basta acessar o link " http://localhost:3000 "
