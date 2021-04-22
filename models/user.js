'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Plate)
      User.hasMany(models.Comment)
      User.hasMany(models.Rating)
      // creates relationship between users through the ratings foreignkey of reviewerid
      User.belongsToMany(models.User, {through: models.Rating, foreignKey: 'ReviewerId', as: 'Reviewers'})
      //sets up realationship to see what followers a user has
      User.belongsToMany(models.User, {through: 'UserFollowers', as: 'Followers', foreignKey: 'FollowId'})
      // sets up relationship to see who a user follows
      User.belongsToMany(models.User, {through: 'UserFollowers', as: 'Follows', foreignKey: 'FollowerId'})
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    street: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};