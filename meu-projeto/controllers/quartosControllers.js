const quartosModel = require('../models/quartosModel');

// Métodos para API
exports.listar = async (req, res) => {
  try {
    const quartos = await quartosModel.listar();
    res.json(quartos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Métodos auxiliares para as views
exports.listarParaView = async (req, res) => {
  try {
    const quartos = await quartosModel.listar();
    // Garantir que o preço seja tratado como número
    const quartosFormatados = quartos.map(quarto => ({
      ...quarto,
      preco: Number(quarto.preco)
    }));
    return quartosFormatados || [];
  } catch (error) {
    console.error('Erro ao listar quartos para view:', error);
    throw error;
  }
};

exports.buscarPorIdParaView = async (req, res) => {
  const id = req.params.id;
  try {
    const quarto = await quartosModel.buscarPorId(id);
    return quarto || {};
  } catch (error) {
    console.error(`Erro ao buscar quarto ID ${id} para view:`, error);
    throw error;
  }
};

// Métodos para API existentes
exports.buscarPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const quartos = await quartosModel.buscarPorId(id);
    if (quartos) {
      res.json(quartos);
    } else {
      res.status(404).json({ message: 'Quarto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const novoQuarto = req.body;
    const quartoCriado = await quartosModel.criar(novoQuarto);
    res.status(201).json(quartoCriado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizar = async (req, res) => {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  try {
    const quartosAtualizado = await quartosModel.atualizar(id, dadosAtualizados);
    if (quartosAtualizado) {
      res.json(quartosAtualizado);
    } else {
      res.status(404).json({ message: 'Quarto não encontrado para atualizar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletar = async (req, res) => {
  const id = req.params.id;
  try {
    const deletado = await quartosModel.deletar(id);
    if (deletado) {
      res.json({ message: 'Quarto deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Quarto não encontrado para deletar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
