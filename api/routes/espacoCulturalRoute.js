<<<<<<< HEAD
const express = require('express');
const {
  listarEspacosCulturais,
  obterEspacoCulturalPorId,
  criarEspacoCultural,
  atualizarEspacoCultural,
  deletarEspacoCultural
} = require('../controller/espacoCulturalController');

const espacoCulturalRoute = express.Router();

espacoCulturalRoute.get('/', listarEspacosCulturais);
espacoCulturalRoute.get('/:id', obterEspacoCulturalPorId);
espacoCulturalRoute.post('/', criarEspacoCultural);
espacoCulturalRoute.put('/:id', atualizarEspacoCultural);
espacoCulturalRoute.delete('/:id', deletarEspacoCultural);

module.exports = espacoCulturalRoute;
=======
const express = require('express');
const {
  listarEspacosCulturais,
  obterEspacoCulturalPorId,
  criarEspacoCultural,
  atualizarEspacoCultural,
  deletarEspacoCultural
} = require('../controller/espacoCulturalController');

const espacoCulturalRoute = express.Router();

espacoCulturalRoute.get('/', listarEspacosCulturais);
espacoCulturalRoute.get('/:id', obterEspacoCulturalPorId);
espacoCulturalRoute.post('/', criarEspacoCultural);
espacoCulturalRoute.put('/:id', atualizarEspacoCultural);
espacoCulturalRoute.delete('/:id', deletarEspacoCultural);

module.exports = espacoCulturalRoute;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
