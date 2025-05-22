// routes/index.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rotas para o CRUD de usuario
router.post('/usuarios', UserController.criarUsuario);
router.get('/usuarios', UserController.listarUsuarios);
router.put('/usuarios/:id', UserController.editarUsuario);
router.delete('/usuarios/:id', UserController.excluirUsuario);

module.exports = router;
