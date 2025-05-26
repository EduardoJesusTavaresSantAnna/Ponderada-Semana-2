const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController'); // Usuarios
const quartosControllers = require('../controllers/quartosControllers'); // Quartos
const reservasController = require('../controllers/reservasController'); // Reservas
const pagamentosController = require('../controllers/pagamentosController'); //Pagamentos
const avaliacoesController = require('../controllers/avaliacoesController'); //Avaliação

// Rota raiz
router.get('/', (req, res) => {
  res.send('API rodando - rota raiz /api');
});

// Rotas de usuários
router.get('/usuarios', usuariosController.listar);
router.get('/usuarios/:id', usuariosController.buscarPorId);
router.post('/usuarios', usuariosController.criar);
router.put('/usuarios/:id', usuariosController.atualizar);
router.delete('/usuarios/:id', usuariosController.deletar);

// Rotas de quartos
router.get('/quartos', quartosControllers.listar);
router.get('/quartos/:id', quartosControllers.buscarPorId);
router.post('/quartos', quartosControllers.criar);
router.put('/quartos/:id', quartosControllers.atualizar);
router.delete('/quartos/:id', quartosControllers.deletar);

// Rotas reservas
router.get('/reservas', reservasController.listar);
router.get('/reservas/:id', reservasController.buscarPorId);
router.post('/reservas', reservasController.criar);
router.put('/reservas/:id', reservasController.atualizar);
router.delete('/reservas/:id', reservasController.deletar);

// Rotas de Pagamentos
router.get('/', pagamentosController.listar);
router.get('/:id', pagamentosController.buscarPorId);
router.post('/', pagamentosController.criar);
router.put('/:id', pagamentosController.atualizar);
router.delete('/:id', pagamentosController.deletar);

// Rotas de Avaliação
router.get('/avaliacoes', avaliacoesController.listar);
router.get('/avaliacoes/:id', avaliacoesController.buscarPorId);
router.post('/avaliacoes', avaliacoesController.criar);
router.put('/avaliacoes/:id', avaliacoesController.atualizar);
router.delete('/avaliacoes/:id', avaliacoesController.deletar);

module.exports = router;