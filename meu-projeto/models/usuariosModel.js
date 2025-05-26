const pool = require('../config/database');

exports.listar = async () => {
  const query = 'SELECT * FROM usuarios';
  const { rows } = await pool.query(query);
  return rows;
};

exports.buscarPorId = async (id) => {
  const query = 'SELECT * FROM usuarios WHERE id_usuario = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.criar = async (usuario) => {
  const { nome, email, senha } = usuario;
  const query = `
    INSERT INTO usuarios (nome, email, senha)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [nome, email, senha]);
  return rows[0];
};

exports.atualizar = async (id, usuario) => {
  // Para atualização parcial, mantemos os valores antigos se não forem passados
  const usuarioAtual = await exports.buscarPorId(id);
  if (!usuarioAtual) return null;

  const nome = usuario.nome ?? usuarioAtual.nome;
  const email = usuario.email ?? usuarioAtual.email;
  const senha = usuario.senha ?? usuarioAtual.senha;

  const query = `
    UPDATE usuarios
    SET nome = $1, email = $2, senha = $3
    WHERE id_usuario = $4
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [nome, email, senha, id]);
  return rows[0];
};

exports.deletar = async (id) => {
  const query = 'DELETE FROM usuarios WHERE id_usuario = $1';
  const result = await pool.query(query, [id]);
  return result.rowCount > 0; // true se deletou, false se não
};
