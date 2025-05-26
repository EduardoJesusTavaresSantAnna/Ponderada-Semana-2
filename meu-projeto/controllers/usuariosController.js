const bcrypt = require('bcrypt');
const usuariosModel = require('../models/usuariosModel');

exports.listar = async (req, res) => {
  try {
    const usuarios = await usuariosModel.listar();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await usuariosModel.buscarPorId(id);
    if (usuario) {
      // Não envie a senha na resposta
      delete usuario.senha;
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novoUsuario = req.body;

    if (!novoUsuario.senha) {
      return res.status(400).json({ error: 'Senha é obrigatória' });
    }

    // Criptografar a senha
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(novoUsuario.senha, saltRounds);
    novoUsuario.senha = senhaHash;

    const usuarioCriado = await usuariosModel.criar(novoUsuario);
    // Não envie a senha na resposta
    delete usuarioCriado.senha;

    res.status(201).json(usuarioCriado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  try {
    // Se estiver atualizando a senha, criptografe antes
    if (dadosAtualizados.senha) {
      const saltRounds = 10;
      const senhaHash = await bcrypt.hash(dadosAtualizados.senha, saltRounds);
      dadosAtualizados.senha = senhaHash;
    }

    const usuarioAtualizado = await usuariosModel.atualizar(id, dadosAtualizados);
    if (usuarioAtualizado) {
      // Não envie a senha na resposta
      delete usuarioAtualizado.senha;
      res.json(usuarioAtualizado);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado para atualizar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const id = req.params.id;
  try {
    const deletado = await usuariosModel.deletar(id);
    if (deletado) {
      res.json({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado para deletar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
