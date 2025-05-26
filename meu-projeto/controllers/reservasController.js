const reservasModel = require('../models/reservasModel');
const usuariosModel = require('../models/usuariosModel');
const quartosModel = require('../models/quartosModel');

exports.listar = async (req, res) => {
  try {
    const reservas = await reservasModel.listar();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const reserva = await reservasModel.buscarPorId(id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ message: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novaReserva = req.body;

    // Validar se usuário existe
    const usuario = await usuariosModel.buscarPorId(novaReserva.id_usuario);
    if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });

    // Validar se quarto existe
    const quarto = await quartosModel.buscarPorId(novaReserva.id_quarto);
    if (!quarto) return res.status(400).json({ error: 'Quarto inválido' });

    // Calcular número de dias entre data_inicio e data_fim
    const dataInicio = new Date(novaReserva.data_inicio);
    const dataFim = new Date(novaReserva.data_fim);
    const diffEmMilissegundos = dataFim - dataInicio;
    const dias = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

    if (dias <= 0) {
      return res.status(400).json({ error: 'Data de fim deve ser posterior à data de início' });
    }

    // Calcular preço total
    const preco_total = dias * parseFloat(quarto.preco);

    // Montar objeto da reserva com preco_total
    const reservaComPreco = {
      ...novaReserva,
      preco_total
    };

    const reservaCriada = await reservasModel.criar(reservaComPreco);
    res.status(201).json(reservaCriada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  try {
    // Validar se usuário existe
    if (dadosAtualizados.id_usuario) {
      const usuario = await usuariosModel.buscarPorId(dadosAtualizados.id_usuario);
      if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });
    }

    // Validar se quarto existe
    if (dadosAtualizados.id_quarto) {
      const quarto = await quartosModel.buscarPorId(dadosAtualizados.id_quarto);
      if (!quarto) return res.status(400).json({ error: 'Quarto inválido' });
    }

    const reservaAtualizada = await reservasModel.atualizar(id, dadosAtualizados);
    if (reservaAtualizada) {
      res.json(reservaAtualizada);
    } else {
      res.status(404).json({ message: 'Reserva não encontrada para atualizar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const id = req.params.id;
  try {
    const deletado = await reservasModel.deletar(id);
    if (deletado) {
      res.json({ message: 'Reserva deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Reserva não encontrada para deletar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
