'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rating.belongsTo(models.User)
      // storing a userid as reviewer id - aliasing
      Rating.belongsTo(models.User, {as: 'Reviewer', foreignKey: 'ReviewerId'})
    }
  };
  Rating.init({
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};