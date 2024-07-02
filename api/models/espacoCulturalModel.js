<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const EspacoCultural = sequelize.define('EspacoCultural', {
  id_espaco_cultural: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_espaco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = EspacoCultural;
=======
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const EspacoCultural = sequelize.define('EspacoCultural', {
  id_espaco_cultural: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_espaco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = EspacoCultural;
>>>>>>> 7442b4d721d26c616e557c153a84a5b9fad8c1be
