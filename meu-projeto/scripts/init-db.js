require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.DB_SSL === 'TRUE' ? { rejectUnauthorized: false } : false,
});

async function main() {
  try {
    // Caminho do arquivo init.sql
    const initSqlPath = path.join(__dirname, 'init.sql');

    // Ler o conteúdo do arquivo init.sql
    const sql = fs.readFileSync(initSqlPath, { encoding: 'utf-8' });

    // Executar o script SQL
    await pool.query(sql);

    console.log("Banco de dados inicializado com sucesso!");
  } catch (err) {
    console.error("Erro ao inicializar o banco:", err);
  } finally {
    await pool.end();
  }
}

main();