# 🏨 Sistema de Gestão Hoteleira - Projeto Acadêmico

> **Projeto Individual desenvolvido para o Módulo de Programação - Inteli**

Sistema completo de gestão hoteleira desenvolvido seguindo a arquitetura MVC, com interface web responsiva e API REST funcional.

## 📋 Sobre o Projeto

Este repositório contém o desenvolvimento completo de um sistema de gestão hoteleira, realizado em 3 etapas progressivas:

1. **Semana 1-3:** Modelagem de banco de dados e planejamento
2. **Semana 4-6:** Desenvolvimento do backend com APIs REST  
3. **Semana 7-8:** Implementação da interface web e integração completa

## 🚀 Acesso Rápido

### 📱 Sistema Principal
**Acesse:** [`/meu-projeto/`](./meu-projeto/)
- Código fonte completo da aplicação
- README com instruções de instalação
- Sistema de quartos, usuários, reservas e pagamentos

### 📊 Documentação Técnica  
**Acesse:** [`/documents/wad.md`](./documents/wad.md)
- Documentação técnica completa (WAD)
- Decisões arquiteturais e tecnológicas
- Diagramas de banco de dados
- Aprendizados e desafios superados

### 🎥 Demonstração
**Vídeo:** [Link da demonstração completa](link-do-video-aqui)
- Sistema funcionando em tempo real
- Explicação da arquitetura
- Principais funcionalidades

## ⚡ Execução Rápida

```bash
# Clone o repositório
git clone https://github.com/EduardoJesusTavaresSantAnna/Ponderada-Semana-2.git

# Navegue para o projeto
cd sistema-gestao-hoteleira/meu-projeto

# Instale dependências
npm install

# Configure o .env (veja instruções no README do projeto)
# Execute a inicialização do banco
node scripts/init-db.js

# Inicie o servidor
npm start

# Acesse: http://localhost:3000
```

## 🛠 Tecnologias Principais

- **Backend:** Node.js, Express.js, PostgreSQL
- **Frontend:** EJS, HTML5, CSS3, JavaScript ES6+
- **Arquitetura:** MVC (Model-View-Controller)
- **API:** REST com operações CRUD completas

## 📁 Estrutura do Repositório

```
├── meu-projeto/           # 🏠 Aplicação principal
│   ├── controllers/       # Lógica de negócio
│   ├── models/           # Acesso a dados
│   ├── views/            # Interface EJS
│   ├── routes/           # Definição de rotas
│   ├── public/           # CSS, JS, imagens
│   └── scripts/          # Inicialização DB
├── documents/            # 📚 Documentação
│   └── wad.md           # Documento técnico completo
├── assets/              # 🖼 Imagens e recursos
└── README.md            # Este arquivo
```

## 🎯 Funcionalidades Implementadas

### ✅ CRUD Completo
- **Quartos:** Criação, listagem, edição e exclusão
- **Usuários:** Gerenciamento completo de usuários
- **Reservas:** Sistema de reservas funcionais
- **Pagamentos:** Controle de pagamentos
- **Avaliações:** Sistema de feedback

### ✅ Interface Web
- Design responsivo (mobile-first)
- Navegação intuitiva
- Validação de formulários
- Tratamento de erros
- Feedback visual para ações

### ✅ API REST
- Endpoints organizados (`/api/*`)
- Métodos HTTP apropriados
- Respostas JSON padronizadas
- Tratamento de erros adequado

## 🏆 Destaques do Projeto

- **Arquitetura bem estruturada** seguindo padrões MVC
- **Código limpo e documentado** com boas práticas
- **Interface amigável** e responsiva
- **Sistema robusto** com tratamento de erros
- **Documentação completa** técnica e de usuário

## 👨‍💻 Autor

**Eduardo Jesus tavares Sant'Anna**
- Estudante de Engenharia de Computação - Inteli
- GitHub: [@Eduardo Jesus Tavares Sant'Anna](https://github.com/EduardoJesusTavaresSantAnna)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do curso de Engenharia de Computação do Instituto de Tecnologia e Liderança (Inteli).

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**
