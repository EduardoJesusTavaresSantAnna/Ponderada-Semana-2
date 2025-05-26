const pagamentosModel = require('../models/pagamentosModel');
const usuariosModel = require('../models/usuariosModel');
const reservasModel = require('../models/reservasModel');

exports.listar = async (req, res) => {
  try {
    const pagamentos = await pagamentosModel.listar();
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const pagamento = await pagamentosModel.buscarPorId(id);
    if (pagamento) {
      res.json(pagamento);
    } else {
      res.status(404).json({ message: 'Pagamento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novoPagamento = req.body;

    // Validar reserva
    const reserva = await reservasModel.buscarPorId(novoPagamento.id_reserva);
    if (!reserva) return res.status(400).json({ error: 'Reserva inválida' });

    // Validar usuário
    const usuario = await usuariosModel.buscarPorId(novoPagamento.id_usuario);
    if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });

    // Substituir valor enviado pelo valor total da reserva
    novoPagamento.valor = reserva.preco_total;

    const pagamentoCriado = await pagamentosModel.criar(novoPagamento);
    res.status(201).json(pagamentoCriado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;

  try {
    if (dadosAtualizados.id_reserva) {
      const reserva = await reservasModel.buscarPorId(dadosAtualizados.id_reserva);
      if (!reserva) return res.status(400).json({ error: 'Reserva inválida' });
      dadosAtualizados.valor = reserva.preco_total;
    } else if (dadosAtualizados.valor) {
      delete dadosAtualizados.valor;
    }

    if (dadosAtualizados.id_usuario) {
      const usuario = await usuariosModel.buscarPorId(dadosAtualizados.id_usuario);
      if (!usuario) return res.status(400).json({ error: 'Usuário inválido' });
    }

    const pagamentoAtualizado = await pagamentosModel.atualizar(id, dadosAtualizados);
    if (pagamentoAtualizado) {
      res.json(pagamentoAtualizado);
    } else {
      res.status(404).json({ message: 'Pagamento não encontrado para atualizar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const id = req.params.id;
  try {
    const deletado = await pagamentosModel.deletar(id);
    if (deletado) {
      res.json({ message: 'Pagamento deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Pagamento não encontrado para deletar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};