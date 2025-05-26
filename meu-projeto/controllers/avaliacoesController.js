const avaliacoesModel = require('../models/avaliacoesModel');
const reservasModel = require('../models/reservasModel');
const usuariosModel = require('../models/usuariosModel');

exports.listar = async (req, res) => {
  try {
    const avaliacoes = await avaliacoesModel.listar();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const avaliacao = await avaliacoesModel.buscarPorId(id);
    if (avaliacao) {
      res.json(avaliacao);
    } else {
      res.status(404).json({ message: 'Avaliação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novaAvaliacao = req.body;

    // Validar reserva
    const reserva = await reservasModel.buscarPorId(novaAvaliacao.id_reserva);
    if (!reserva) return res.status(400).json({ error: 'Reserva inválida' });

    // Validar usuário
    const usuario = await usuariosModel.buscarPorId(novaAvaliacao.id_usuario);
    if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });

    // Validar nota
    if (
      typeof novaAvaliacao.nota !== 'number' ||
      novaAvaliacao.nota < 1 ||
      novaAvaliacao.nota > 5
    ) {
      return res.status(400).json({ error: 'Nota deve ser um número entre 1 e 5' });
    }

    const avaliacaoCriada = await avaliacoesModel.criar(novaAvaliacao);
    res.status(201).json(avaliacaoCriada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  try {
    // Se atualizar id_reserva, validar
    if (dadosAtualizados.id_reserva) {
      const reserva = await reservasModel.buscarPorId(dadosAtualizados.id_reserva);
      if (!reserva) return res.status(400).json({ error: 'Reserva inválida' });
    }
    // Se atualizar id_usuario, validar
    if (dadosAtualizados.id_usuario) {
      const usuario = await usuariosModel.buscarPorId(dadosAtualizados.id_usuario);
      if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });
    }
    // Se atualizar nota, validar
    if (dadosAtualizados.nota) {
      if (
        typeof dadosAtualizados.nota !== 'number' ||
        dadosAtualizados.nota < 1 ||
        dadosAtualizados.nota > 5
      ) {
        return res.status(400).json({ error: 'Nota deve ser um número entre 1 e 5' });
      }
    }

    const avaliacaoAtualizada = await avaliacoesModel.atualizar(id, dadosAtualizados);
    if (avaliacaoAtualizada) {
      res.json(avaliacaoAtualizada);
    } else {
      res.status(404).json({ message: 'Avaliação não encontrada para atualizar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const id = req.params.id;
  try {
    const deletado = await avaliacoesModel.deletar(id);
    if (deletado) {
      res.json({ message: 'Avaliação deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Avaliação não encontrada para deletar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
