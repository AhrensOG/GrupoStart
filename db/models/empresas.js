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
    exclusiveImage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    qrImage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    whatsappLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebookLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mapLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Empresas',
    freezeTableName: true
  });
  return Empresas;
};

module.exports = emrpesasInit(connection, DataTypes)