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
      // define association here
    }
  };
  User.init({
    nameUser: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    bitrhDay: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    typeUser: {type : Sequelize.STRING,defaultValue:"user"},
    address: DataTypes.STRING,
    citizenId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};