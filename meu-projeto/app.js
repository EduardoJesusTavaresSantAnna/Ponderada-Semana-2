const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');

// Configuração do EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Aponta todas as rotas para o arquivo de rotas
app.use('/', routes);

// Middleware para lidar com erros 404 (página não encontrada)
app.use((req, res, next) => {
  res.status(404).render('error', { 
    error: { message: 'Página não encontrada' }, 
    title: 'Erro 404 - Sistema de Hotel' 
  });
});

// Middleware para lidar com outros erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    error: { message: err.message || 'Ocorreu um erro no servidor' },
    title: 'Erro 500 - Sistema de Hotel'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
