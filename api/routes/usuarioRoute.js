<<<<<<< HEAD
const express = require('express');
const {
  listarUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario
} = require('../controller/usuarioController');

const usuarioRoute = express.Router();

usuarioRoute.get('/', listarUsuarios);
usuarioRoute.get('/:id', obterUsuarioPorId);
usuarioRoute.post('/', criarUsuario);
usuarioRoute.put('/:id', atualizarUsuario);
usuarioRoute.delete('/:id', deletarUsuario);

module.exports = usuarioRoute;
=======
const express = require('express');
const {
  listarUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario
} = require('../controller/usuarioController');

const usuarioRoute = express.Router();

usuarioRoute.get('/', listarUsuarios);
usuarioRoute.get('/:id', obterUsuarioPorId);
usuarioRoute.post('/', criarUsuario);
usuarioRoute.put('/:id', atualizarUsuario);
usuarioRoute.delete('/:id', deletarUsuario);

module.exports = usuarioRoute;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
