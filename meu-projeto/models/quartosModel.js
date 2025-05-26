const pool = require('../config/database');

exports.listar = async () => {
  const query = 'SELECT * FROM quartos';
  const { rows } = await pool.query(query);
  return rows;
};

exports.buscarPorId = async (id) => {
  const query = 'SELECT * FROM quartos WHERE id_quartos = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.criar = async (quartos) => {
  const { nome, localizacao, capacidade, comodidades, descricao, preco } = quartos;
  const query = `
    INSERT INTO quartos (nome, localizacao, capacidade, comodidades, descricao, preco)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [nome, localizacao, capacidade, comodidades, descricao, preco]);
  return rows[0];
};

exports.atualizar = async (id, quartos) => {
  const { nome, localizacao, capacidade, comodidades, descricao, preco } = quartos;
  const query = `
    UPDATE quartos
    SET nome = $1, localizacao = $2, capacidade = $3, comodidades = $4, descricao = $5, preco = $6
    WHERE id_quartos = $7
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [nome, localizacao, capacidade, comodidades, descricao, preco, id]);
  return rows[0];
};

exports.deletar = async (id) => {
  const query = 'DELETE FROM quartos WHERE id_quartos = $1';
  const result = await pool.query(query, [id]);
  return result.rowCount > 0; // true se deletou, false se não
};
