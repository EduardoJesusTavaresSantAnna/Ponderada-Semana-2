# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O sistema que será desenvolvido tem como foco principal oferecer uma plataforma prática e intuitiva para reserva de quartos. A proposta é permitir que o usuário realize suas reservas de forma fácil, rápida e segura, sem complicações, diretamente pelo site.

A aplicação permite que o usuário visualize os quartos disponíveis, veja detalhes como preço, comodidades e tipo de acomodação, e escolha a opção que melhor atende às suas necessidades. Além disso, o sistema fornece feedbacks claros sobre a confirmação da reserva e dá ao usuário a possibilidade de deixar comentários e avaliações sobre os quartos escolhidos, contribuindo para a experiência de outros visitantes.

Outro diferencial importante é a funcionalidade de pagamento online integrado, que permite que todo o processo seja feito em um só lugar, garantindo mais agilidade e conforto ao usuário.

O projeto é construído com base no padrão de arquitetura MVC (Model-View-Controller), que organiza o sistema em três partes: o Model, que gerencia os dados das reservas e dos quartos; o View, que cuida da interface e da exibição das informações; e o Controller, que liga tudo isso, processando as ações do usuário e coordenando as respostas do sistema.

Essa separação facilita a manutenção, a expansão futura do projeto e melhora a organização do código. O sistema não só atende a uma necessidade prática, como também serve como base sólida para o aprendizado e aplicação de boas práticas de desenvolvimento web.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

<img src="assets\Persona.png"> <br>

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

<img src= "assets\bancoDeDados.png"> <br>

---

### 3.1.1 BD e Models (Semana 5)

Nesta etapa do projeto, foram implementados os *models* responsáveis pela comunicação entre a aplicação Node.js e o banco de dados PostgreSQL. Cada model representa uma entidade da base de dados e contém funções assíncronas que executam operações CRUD (Create, Read, Update e Delete), utilizando comandos SQL puros. Abaixo estão descritos os models desenvolvidos:

#### **Usuários (`usuarioModel`)**

Gerencia os dados dos usuários do sistema. Permite:

* Listar todos os usuários cadastrados;
* Buscar um usuário específico por ID;
* Criar um novo usuário com nome, e-mail e senha;
* Atualizar parcialmente os dados de um usuário;
* Deletar um usuário pelo ID.

#### **Quartos (`quartosModel`)**

Controla os dados relacionados aos quartos disponíveis para reserva. Permite:

* Listar todos os quartos;
* Buscar um quarto por ID;
* Criar um novo quarto com informações como nome, localização, capacidade, comodidades, descrição e preço;
* Atualizar os dados de um quarto;
* Excluir um quarto.

#### **Reservas (`reservasModel`)**

Lida com o controle de reservas feitas pelos usuários. Suporta:

* Listagem de todas as reservas com nome do usuário e do quarto relacionados;
* Consulta de uma reserva por ID;
* Criação de nova reserva, informando o usuário, quarto, datas, status e preço total;
* Atualização dos dados da reserva;
* Remoção de uma reserva existente.

#### **Pagamentos (`pagamentosModel`)**

Gerencia os pagamentos associados às reservas. Possui:

* Listagem de todos os pagamentos, incluindo o nome do usuário e a reserva associada;
* Busca por ID;
* Criação de um novo pagamento, automaticamente calculando o valor com base no preço total da reserva;
* Atualização de um pagamento, recalculando o valor;
* Exclusão de um pagamento.

#### **Avaliações (`avaliacoesModel`)**

Registra as avaliações que os usuários deixam após as reservas. Funcionalidades:

* Listagem de avaliações mais recentes primeiro;
* Busca por avaliação específica via ID;
* Criação de nova avaliação com nota e comentário vinculados a uma reserva e usuário;
* Atualização de campos variados da avaliação;
* Remoção da avaliação.

Todos os models utilizam o módulo `pool` para executar as queries no PostgreSQL, garantindo conexão com o banco e retornando os dados em formato `rows`. A separação em arquivos distintos mantém o código modular e facilita a manutenção e evolução do sistema.

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---
