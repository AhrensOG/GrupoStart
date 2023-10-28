'use strict';
const { Model, DataTypes } = require('sequelize');
const connection = require('./index')


const BusinessImagesInit = (sequelize, DataTypes) => {
  class BusinessImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusinessImages.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BusinessImages',
    freezeTableName: true
  });
  return BusinessImages;
};

module.exports = BusinessImagesInit(connection, DataTypes)