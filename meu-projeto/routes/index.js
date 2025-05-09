const express = require('express');
const router = express.Router();

// Definindo uma rota básica
router.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

// Você pode adicionar mais rotas aqui
// Exemplo de rota de reservas
router.get('/reserva', (req, res) => {
  res.send('Página de Reservas');
});

module.exports = router;
