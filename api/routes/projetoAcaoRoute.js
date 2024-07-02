<<<<<<< HEAD
const express = require('express');
const {
  listarProjetos,
  obterProjetoPorId,
  criarProjeto,
  atualizarProjeto,
  deletarProjeto
} = require('../controller/projetoAcaoController');

const projetoAcaoRoute = express.Router();

projetoAcaoRoute.get('/', listarProjetos);
projetoAcaoRoute.get('/:id', obterProjetoPorId);
projetoAcaoRoute.post('/', criarProjeto);
projetoAcaoRoute.put('/:id', atualizarProjeto);
projetoAcaoRoute.delete('/:id', deletarProjeto);

module.exports = projetoAcaoRoute;
=======
const express = require('express');
const {
  listarProjetos,
  obterProjetoPorId,
  criarProjeto,
  atualizarProjeto,
  deletarProjeto
} = require('../controller/projetoAcaoController');

const projetoAcaoRoute = express.Router();

projetoAcaoRoute.get('/', listarProjetos);
projetoAcaoRoute.get('/:id', obterProjetoPorId);
projetoAcaoRoute.post('/', criarProjeto);
projetoAcaoRoute.put('/:id', atualizarProjeto);
projetoAcaoRoute.delete('/:id', deletarProjeto);

module.exports = projetoAcaoRoute;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
