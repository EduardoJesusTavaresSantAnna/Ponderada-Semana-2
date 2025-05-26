const pool = require('../config/database'); // ou o caminho do seu pool de conexão ao PostgreSQL

exports.listar = async () => {
  const query = 'SELECT * FROM avaliacoes ORDER BY data_criacao DESC';
  const { rows } = await pool.query(query);
  return rows;
};

exports.buscarPorId = async (id) => {
  const query = 'SELECT * FROM avaliacoes WHERE id_avaliacao = $1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

exports.criar = async (avaliacao) => {
  const { id_reserva, id_usuario, nota, comentario } = avaliacao;
  const query = `
    INSERT INTO avaliacoes (id_reserva, id_usuario, nota, comentario)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
  const values = [id_reserva, id_usuario, nota, comentario];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

exports.atualizar = async (id, dadosAtualizados) => {
  const campos = [];
  const valores = [];
  let idx = 1;

  for (const key in dadosAtualizados) {
    campos.push(`${key} = $${idx}`);
    valores.push(dadosAtualizados[key]);
    idx++;
  }
  valores.push(id);

  const query = `
    UPDATE avaliacoes
    SET ${campos.join(', ')}
    WHERE id_avaliacao = $${idx}
    RETURNING *`;

  const { rows } = await pool.query(query, valores);
  return rows[0];
};

exports.deletar = async (id) => {
  const query = 'DELETE FROM avaliacoes WHERE id_avaliacao = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows.length > 0;
};
