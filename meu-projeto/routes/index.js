const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController'); // Usuarios
const quartosControllers = require('../controllers/quartosControllers'); // Quartos
const reservasController = require('../controllers/reservasController'); // Reservas
const pagamentosController = require('../controllers/pagamentosController'); //Pagamentos
const avaliacoesController = require('../controllers/avaliacoesController'); //Avaliação

// Rota raiz - Página inicial
router.get('/', async (req, res) => {
  try {
    const quartos = await quartosControllers.listarParaView(req, res);
    res.render('index', { quartos, title: 'Hotel Sistema - Home' });
  } catch (error) {
    res.render('error', { error, title: 'Erro - Sistema de Hotel' });
  }
});

// Rotas de visualização para Quartos
router.get('/quartos/lista', async (req, res) => {
  try {
    const quartos = await quartosControllers.listarParaView(req, res);
    res.render('quartos/lista', { quartos, title: 'Lista de Quartos' });
  } catch (error) {
    res.render('error', { error, title: 'Erro - Sistema de Hotel' });
  }
});

router.get('/quartos/formulario', (req, res) => {
  res.render('quartos/formulario', { quarto: {}, title: 'Novo Quarto' });
});

router.get('/quartos/formulario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const quarto = await quartosControllers.buscarPorIdParaView(req, res);
    res.render('quartos/formulario', { quarto, title: 'Editar Quarto' });
  } catch (error) {
    res.render('error', { error, title: 'Erro - Sistema de Hotel' });
  }
});

// API Routes - Rotas para consumo via Fetch API
// Rotas de usuários
router.get('/api/usuarios', usuariosController.listar);
router.get('/api/usuarios/:id', usuariosController.buscarPorId);
router.post('/api/usuarios', usuariosController.criar);
router.put('/api/usuarios/:id', usuariosController.atualizar);
router.delete('/api/usuarios/:id', usuariosController.deletar);

// Rotas de quartos
router.get('/api/quartos', quartosControllers.listar);
router.get('/api/quartos/:id', quartosControllers.buscarPorId);
router.post('/api/quartos', quartosControllers.criar);
router.put('/api/quartos/:id', quartosControllers.atualizar);
router.delete('/api/quartos/:id', quartosControllers.deletar);

// Rotas reservas
router.get('/api/reservas', reservasController.listar);
router.get('/api/reservas/:id', reservasController.buscarPorId);
router.post('/api/reservas', reservasController.criar);
router.put('/api/reservas/:id', reservasController.atualizar);
router.delete('/api/reservas/:id', reservasController.deletar);

// Rotas de Pagamentos
router.get('/api/pagamentos', pagamentosController.listar);
router.get('/api/pagamentos/:id', pagamentosController.buscarPorId);
router.post('/api/pagamentos', pagamentosController.criar);
router.put('/api/pagamentos/:id', pagamentosController.atualizar);
router.delete('/api/pagamentos/:id', pagamentosController.deletar);

// Rotas de Avaliação
router.get('/api/avaliacoes', avaliacoesController.listar);
router.get('/api/avaliacoes/:id', avaliacoesController.buscarPorId);
router.post('/api/avaliacoes', avaliacoesController.criar);
router.put('/api/avaliacoes/:id', avaliacoesController.atualizar);
router.delete('/api/avaliacoes/:id', avaliacoesController.deletar);

module.exports = router;