const pool = require('../config/database');

exports.listar = async () => {
  const query = `
    SELECT p.*, u.nome AS nome_usuario, r.id_reserva
    FROM pagamentos p
    JOIN usuarios u ON p.id_usuario = u.id_usuario
    JOIN reservas r ON p.id_reserva = r.id_reserva
  `;
  const { rows } = await pool.query(query);
  return rows;
};

exports.buscarPorId = async (id) => {
  const query = `
    SELECT p.*, u.nome AS nome_usuario, r.id_reserva
    FROM pagamentos p
    JOIN usuarios u ON p.id_usuario = u.id_usuario
    JOIN reservas r ON p.id_reserva = r.id_reserva
    WHERE p.id_pagamento = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.criar = async (pagamento) => {
  const { id_reserva, id_usuario, data_pagamento, metodo, status } = pagamento;

  // Buscar preco_total da reserva para usar como valor do pagamento
  const queryReserva = 'SELECT preco_total FROM reservas WHERE id_reserva = $1';
  const { rows } = await pool.query(queryReserva, [id_reserva]);

  if (rows.length === 0) {
    throw new Error('Reserva não encontrada');
  }

  const valor = rows[0].preco_total;

  const query = `
    INSERT INTO pagamentos (id_reserva, id_usuario, data_pagamento, valor, metodo, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const result = await pool.query(query, [
    id_reserva,
    id_usuario,
    data_pagamento,
    valor,
    metodo,
    status
  ]);
  return result.rows[0];
};

exports.atualizar = async (id, pagamento) => {
  const { id_reserva, id_usuario, data_pagamento, metodo, status } = pagamento;

  // Buscar preco_total da reserva para usar como valor do pagamento atualizado
  const queryReserva = 'SELECT preco_total FROM reservas WHERE id_reserva = $1';
  const { rows } = await pool.query(queryReserva, [id_reserva]);

  if (rows.length === 0) {
    throw new Error('Reserva não encontrada');
  }

  const valor = rows[0].preco_total;

  const query = `
    UPDATE pagamentos
    SET id_reserva = $1,
        id_usuario = $2,
        data_pagamento = $3,
        valor = $4,
        metodo = $5,
        status = $6
    WHERE id_pagamento = $7
    RETURNING *;
  `;
  const result = await pool.query(query, [
    id_reserva,
    id_usuario,
    data_pagamento,
    valor,
    metodo,
    status,
    id
  ]);
  return result.rows[0];
};

exports.deletar = async (id) => {
  const query = 'DELETE FROM pagamentos WHERE id_pagamento = $1';
  const result = await pool.query(query, [id]);
  return result.rowCount > 0;
};

