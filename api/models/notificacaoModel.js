<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Notificacao = sequelize.define('Notificacao', {
  id_notificacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_envio: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM('enviada', 'lida', 'arquivada'),
    defaultValue: 'enviada',
  },
  id_projetoacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Notificacao;
=======
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Notificacao = sequelize.define('Notificacao', {
  id_notificacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  data_envio: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM('enviada', 'lida', 'arquivada'),
    defaultValue: 'enviada',
  },
  id_projetoacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Notificacao;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
