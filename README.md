# Chamberbank!

## Solução Utilizada

<p>A ideia foi criar um banco que, como open-banking, pode se ter acesso as transações do usuário sem necessariamente estar autenticado como o mesmo, como é possível utilizando a rota <span style="background:#222">/transaction</span>, enviando o id do usuário que se deseja obter acesso ao histórico de transações.</p>

## Pacotes Adicionais Utilizados

#### React-Router-Dom
- Criação de rotas
- Criação de rotas privadas
- Redirecionamento de usuário

### Axios
- Requisições http para o servidor

#### Styled-Components
- Biblioteca para a criação de estilos

## Getting Started

### Prerequisites

para rodar o projeto em modo de desenvolvimento, você vai precisar do mínimo para rodar uma aplicação em ReactJS, quer pode ser achado [aqui](https://reactjs.org/docs/getting-started.html).

Você também precisará do backend rodando localmente na sua máquina, que pode ser encontrado [aqui](https://github.com/akaluisinho/chamberbank-backend)

### Instalação

**Clonando Repositório**

```
$ git clone https://github.com/akaLuisinho/chamberbank-frontend

$ cd chamberbank-frontend
```

**Instalando Dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

## Funcionalidades

- ### Home pages
<img title="Home Page" alt="Home Page" src="./.github/home.jpg">

- ### Criação de Usuário
<img title="Create User" alt="Create User" src="./.github/create.jpg">

- ### Autenticação de Usuário
<img title="Authentication" alt="Authentication" src="./.github/login.jpg">

- ### Verificação de Extrato
<img title="Extract" alt="Extract" src="./.github/extract.jpg">

- ### Transferências Monetárias
<img title="Home Page" alt="Home Page" src="./.github/transaction.jpg">


