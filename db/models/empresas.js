'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('./index')

const emrpesasInit = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empresas.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firstImage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instagramLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebookLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mapsLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    whatsappLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Empresas',
    freezeTableName: true
  });
  return Empresas;
};

module.exports = emrpesasInit(connection, DataTypes)