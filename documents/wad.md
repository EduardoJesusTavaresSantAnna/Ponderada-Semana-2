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

<img src="../assets/Persona.png"> <br>

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

<img src= "../assets/bancoDeDados.png"> <br>

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

Minha aplicação web segue a arquitetura MVC (Model-View-Controller), estruturada para separar responsabilidades e facilitar a manutenção e escalabilidade. Abaixo está o diagrama da arquitetura, com o fluxo de dados entre as camadas Model, Controller e View.

🔁 Explicação do Fluxo de Dados
Usuário/Cliente (Frontend ou API client) faz uma requisição HTTP (ex: GET /quartos).

Controller recebe a requisição, valida os dados e decide a ação.

O Controller chama a função apropriada do Model, passando os parâmetros necessários.

O Model executa comandos SQL puros diretamente no PostgreSQL e retorna os resultados.

O Controller recebe os dados do Model, aplica qualquer lógica adicional e prepara a resposta.

(Opcional) A View formata os dados caso haja uma interface. Neste sistema, a View pode ser entendida como a estrutura da resposta JSON.

A resposta é enviada de volta ao usuário/cliente.

🧱 Componentes da Arquitetura
Model: usuariosModel, quartosModel, reservasModel, avaliacoesModel, pagamentosModel

Controller: usuariosController, quartosController, reservasController, etc.

View: Como a aplicação é uma API REST, a view se refere à estrutura das respostas JSON enviadas ao cliente.

Banco de Dados: PostgreSQL com SQL puro

<img src= "../assets/DiagramaBD.png"> <br>

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

Web API é um conjunto de endpoints que permitem que diferentes sistemas e aplicações se comuniquem entre si, compartilhando recursos e dados. Os endpoints são localizados dentro da estrutura da aplicação e são utilizados para realizar operações como criar, ler, atualizar e deletar dados (CRUD).

Tipos de solicitação
- GET: Recupera dados (ex.: lista de quartos, detalhes de uma reserva).

- POST: Cria um novo registro (ex.: novo usuário, nova reserva).

- PUT: Atualiza um registro existente (ex.: atualizar dados de uma avaliação).

- DELETE: Remove um registro (ex.: deletar um pagamento).

| Rota            | Método | Finalidade                             | Corpo / Resposta                          |
| --------------- | ------ | -------------------------------------- | ----------------------------------------- |
| `/usuarios`     | GET    | Lista todos os usuários                | Resposta: Array JSON de usuários          |
| `/usuarios/:id` | GET    | Retorna dados de um usuário específico | Resposta: JSON do usuário                 |
| `/usuarios`     | POST   | Cria um novo usuário                   | Corpo: JSON com dados (nome, email, etc.) |
| `/usuarios/:id` | PUT    | Atualiza dados de um usuário           | Corpo: JSON atualizado                    |
| `/usuarios/:id` | DELETE | Deleta um usuário                      | Resposta: Mensagem de sucesso/erro        |

---

| Rota           | Método | Finalidade                       | Corpo / Resposta                             |
| -------------- | ------ | -------------------------------- | -------------------------------------------- |
| `/quartos`     | GET    | Lista todos os quartos           | Resposta: Array JSON de quartos              |
| `/quartos/:id` | GET    | Detalhes de um quarto específico | Resposta: JSON do quarto                     |
| `/quartos`     | POST   | Cadastra um novo quarto          | Corpo: JSON com tipo, preço, disponibilidade |
| `/quartos/:id` | PUT    | Atualiza dados de um quarto      | Corpo: JSON atualizado                       |
| `/quartos/:id` | DELETE | Remove um quarto do sistema      | Resposta: Mensagem de sucesso/erro           |

---

| Rota            | Método | Finalidade                         | Corpo / Resposta                               |
| --------------- | ------ | ---------------------------------- | ---------------------------------------------- |
| `/reservas`     | GET    | Lista todas as reservas            | Resposta: Array JSON de reservas               |
| `/reservas/:id` | GET    | Detalhes de uma reserva específica | Resposta: JSON da reserva                      |
| `/reservas`     | POST   | Cria uma nova reserva              | Corpo: JSON com id\_usuario, id\_quarto, datas |
| `/reservas/:id` | PUT    | Atualiza dados de uma reserva      | Corpo: JSON atualizado                         |
| `/reservas/:id` | DELETE | Remove uma reserva do sistema      | Resposta: Mensagem de sucesso/erro             |

---

| Rota   | Método | Finalidade                              | Corpo / Resposta                               |
| ------ | ------ | --------------------------------------- | ---------------------------------------------- |
| `/`    | GET    | Lista todos os pagamentos (⚠️ conflito) | Resposta: Array JSON de pagamentos             |
| `/:id` | GET    | Detalhes de um pagamento específico     | Resposta: JSON do pagamento                    |
| `/`    | POST   | Cria um novo pagamento                  | Corpo: JSON com dados (reserva, valor, método) |
| `/:id` | PUT    | Atualiza um pagamento                   | Corpo: JSON atualizado                         |
| `/:id` | DELETE | Remove um pagamento                     | Resposta: Mensagem de sucesso/erro             |

---

| Rota              | Método | Finalidade                           | Corpo / Resposta                              |
| ----------------- | ------ | ------------------------------------ | --------------------------------------------- |
| `/avaliacoes`     | GET    | Lista todas as avaliações            | Resposta: Array JSON de avaliações            |
| `/avaliacoes/:id` | GET    | Detalhes de uma avaliação específica | Resposta: JSON da avaliação                   |
| `/avaliacoes`     | POST   | Cria uma nova avaliação              | Corpo: JSON com id\_usuario, nota, comentário |
| `/avaliacoes/:id` | PUT    | Atualiza dados de uma avaliação      | Corpo: JSON atualizado                        |
| `/avaliacoes/:id` | DELETE | Remove uma avaliação                 | Resposta: Mensagem de sucesso/erro            |


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
