'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User),
    }
  };
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    allergenInfo: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};