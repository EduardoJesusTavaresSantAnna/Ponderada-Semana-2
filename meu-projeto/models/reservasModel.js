const pool = require('../config/database');

exports.listar = async () => {
  const query = `
    SELECT r.*, u.nome AS nome_usuario, q.nome AS nome_quarto
    FROM reservas r
    JOIN usuarios u ON r.id_usuario = u.id_usuario
    JOIN quartos q ON r.id_quarto = q.id_quartos
  `;
  const { rows } = await pool.query(query);
  return rows;
};

exports.buscarPorId = async (id) => {
  const query = `
    SELECT r.*, u.nome AS nome_usuario, q.nome AS nome_quarto
    FROM reservas r
    JOIN usuarios u ON r.id_usuario = u.id_usuario
    JOIN quartos q ON r.id_quarto = q.id_quartos
    WHERE r.id_reserva = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.criar = async (reserva) => {
  const {
    id_usuario,
    id_quarto,
    data_inicio,
    data_fim,
    status,
    preco_total
  } = reserva;

  const query = `
    INSERT INTO reservas (id_usuario, id_quarto, data_inicio, data_fim, status, preco_total)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [
    id_usuario,
    id_quarto,
    data_inicio,
    data_fim,
    status,
    preco_total
  ]);
  return rows[0];
};

exports.atualizar = async (id, reserva) => {
  const {
    id_usuario,
    id_quarto,
    data_inicio,
    data_fim,
    status,
    preco_total
  } = reserva;

  const query = `
    UPDATE reservas
    SET id_usuario = $1,
        id_quarto = $2,
        data_inicio = $3,
        data_fim = $4,
        status = $5,
        preco_total = $6
    WHERE id_reserva = $7
    RETURNING *;
  `;
  const { rows } = await pool.query(query, [
    id_usuario,
    id_quarto,
    data_inicio,
    data_fim,
    status,
    preco_total,
    id
  ]);
  return rows[0];
};

exports.deletar = async (id) => {
  const query = 'DELETE FROM reservas WHERE id_reserva = $1';
  const result = await pool.query(query, [id]);
  return result.rowCount > 0;
};
