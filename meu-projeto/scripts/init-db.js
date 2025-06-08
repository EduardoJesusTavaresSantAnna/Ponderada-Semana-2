require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Primeiro, conectamos ao banco postgres para criar nosso banco de dados se necessário
async function createDatabaseIfNotExists() {
  const pgPool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres', // Conectando ao banco padrão postgres
    ssl: process.env.DB_SSL === 'TRUE' ? { rejectUnauthorized: false } : false,
  });

  try {
    // Verificar se o banco de dados existe
    const dbCheckResult = await pgPool.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [process.env.DB_DATABASE]
    );

    // Se o banco não existir, cria
    if (dbCheckResult.rowCount === 0) {
      console.log(`Criando banco de dados ${process.env.DB_DATABASE}...`);
      await pgPool.query(`CREATE DATABASE ${process.env.DB_DATABASE}`);
      console.log(`Banco de dados ${process.env.DB_DATABASE} criado com sucesso!`);
    } else {
      console.log(`Banco de dados ${process.env.DB_DATABASE} já existe.`);
    }
  } catch (err) {
    console.error("Erro ao verificar ou criar o banco de dados:", err);
    throw err;
  } finally {
    await pgPool.end();
  }
}

async function initializeDatabase() {
  // Agora conectamos ao banco de dados recém-criado
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL === 'TRUE' ? { rejectUnauthorized: false } : false,
  });

  try {
    // Caminho do arquivo init.sql
    const initSqlPath = path.join(__dirname, 'init.sql');

    // Ler o conteúdo do arquivo init.sql
    const sql = fs.readFileSync(initSqlPath, { encoding: 'utf-8' });

    // Verificar se as tabelas já existem
    const tableCheckResult = await pool.query(
      "SELECT 1 FROM information_schema.tables WHERE table_name = 'usuarios' LIMIT 1"
    );

    if (tableCheckResult.rowCount === 0) {
      console.log("Inicializando tabelas do banco de dados...");
      // Executar o script SQL
      await pool.query(sql);
      console.log("Tabelas criadas com sucesso!");

      // Inserir alguns dados de exemplo
      await insertSampleData(pool);
    } else {
      console.log("Tabelas já existem, pulando inicialização.");
    }
  } catch (err) {
    console.error("Erro ao inicializar o banco:", err);
    throw err;
  } finally {
    await pool.end();
  }
}

async function insertSampleData(pool) {
  try {
    console.log("Inserindo dados de exemplo...");
    
    // Inserir usuário de exemplo
    await pool.query(`
      INSERT INTO usuarios (nome, email, senha) 
      VALUES ('Usuário Teste', 'usuario@teste.com', 'senha123') 
      ON CONFLICT (email) DO NOTHING;
    `);
    
    // Inserir quartos de exemplo
    await pool.query(`
      INSERT INTO quartos (nome, localizacao, capacidade, comodidades, descricao, preco) VALUES
      ('Quarto Standard', 'Andar 1', 2, 'Wi-Fi, TV, Ar-condicionado', 'Quarto confortável para duas pessoas', 159.90),
      ('Suíte Luxo', 'Andar 3', 3, 'Wi-Fi, TV 4K, Hidromassagem, Frigobar', 'Suíte ampla com vista para o mar', 299.90),
      ('Quarto Familiar', 'Andar 2', 4, 'Wi-Fi, TV, Ar-condicionado, Berço', 'Ideal para famílias com crianças', 229.90)
      ON CONFLICT DO NOTHING;
    `);
    
    console.log("Dados de exemplo inseridos com sucesso!");
  } catch (err) {
    console.error("Erro ao inserir dados de exemplo:", err);
  }
}

async function main() {
  try {
    await createDatabaseIfNotExists();
    await initializeDatabase();
    console.log("Inicialização do banco de dados concluída!");
  } catch (err) {
    console.error("Erro no processo de inicialização:", err);
    process.exit(1);
  }
}

main();