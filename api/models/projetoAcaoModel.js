const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const ProjetoAcao = sequelize.define('Projeto', {
  id_projetoacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome_projetoacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_proposta: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fotos_imagens: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duvidas: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'),
    defaultValue: 'pendente',
  },
}, {
  timestamps: true,
});

module.exports = ProjetoAcao;
