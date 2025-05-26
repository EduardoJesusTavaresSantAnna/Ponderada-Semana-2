const quartosModel = require('../models/quartosModel');

exports.listar = async (req, res) => {
  try {
    const quartos = await quartosModel.listar();
    res.json(quartos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
