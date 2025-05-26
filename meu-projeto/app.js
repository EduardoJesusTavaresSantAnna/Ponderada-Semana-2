const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());

// Aponta todas as rotas para o arquivo de rotas
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
