CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quartos (
    id_quartos SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(150),
    capacidade INT,
    comodidades TEXT,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE reservas (
    id_reserva SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_quarto INT REFERENCES quartos(id_quartos) ON DELETE CASCADE,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status VARCHAR(50),
    preco_total DECIMAL(10, 2),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pagamentos (
    id_pagamento SERIAL PRIMARY KEY,
    id_reserva INT UNIQUE REFERENCES reservas(id_reserva) ON DELETE CASCADE,
    id_usuario INT UNIQUE REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    data_pagamento DATE,
    valor DECIMAL(10, 2),
    metodo VARCHAR(50),
    status VARCHAR(50)
);

CREATE TABLE avaliacoes (
    id_avaliacao SERIAL PRIMARY KEY,
    id_reserva INT REFERENCES reservas(id_reserva) ON DELETE CASCADE,
    id_usuario INT REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
