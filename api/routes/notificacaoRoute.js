<<<<<<< HEAD
const express = require('express');
const {
  listarNotificacoes,
  obterNotificacaoPorId,
  criarNotificacao,
  atualizarNotificacao,
  deletarNotificacao
} = require('../controller/notificacaoController');

const notificacaoRoute = express.Router();

notificacaoRoute.get('/', listarNotificacoes);
notificacaoRoute.get('/:id', obterNotificacaoPorId);
notificacaoRoute.post('/', criarNotificacao);
notificacaoRoute.put('/:id', atualizarNotificacao);
notificacaoRoute.delete('/:id', deletarNotificacao);

module.exports = notificacaoRoute;
=======
const express = require('express');
const {
  listarNotificacoes,
  obterNotificacaoPorId,
  criarNotificacao,
  atualizarNotificacao,
  deletarNotificacao
} = require('../controller/notificacaoController');

const notificacaoRoute = express.Router();

notificacaoRoute.get('/', listarNotificacoes);
notificacaoRoute.get('/:id', obterNotificacaoPorId);
notificacaoRoute.post('/', criarNotificacao);
notificacaoRoute.put('/:id', atualizarNotificacao);
notificacaoRoute.delete('/:id', deletarNotificacao);

module.exports = notificacaoRoute;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
