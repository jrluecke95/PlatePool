'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Item,{ through: "OrderItems" })
      Order.belongsTo(models.Customer)
      Order.belongsTo(models.Restaurant)
    }
  };
  Order.init({
    status: DataTypes.STRING,
    RestaurantId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};