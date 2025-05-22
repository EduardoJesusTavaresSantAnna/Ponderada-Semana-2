// controllers/userController.js
const pool = require('../config/database');

// Criar um novo usuario
exports.criarUsuario = async (req, res) => {
  const { nome, email, senha, data_criacao } = req.body;

  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *';
  const values = [nome, email, senha, data_criacao];

  try {
    const result = await pool.query(query, values);
    const usuario = result.rows[0];
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os usuarios
exports.listarUsuarios = async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um usuario
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  const query = `
    UPDATE usuarios SET nome = $1, email = $2, senha = $3
    WHERE id = $4 RETURNING *`;
  const values = [nome, email, senha, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um usuario
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.status(200).json({ message: 'Usuario excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};