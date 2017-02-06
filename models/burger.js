var Sequelize = require("sequelize");

var sequelize = require('../config/connection.js');

var Burger = sequelize.define('burgers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.INTEGER,
    default: false
  }
});

Burger.sync();

module.exports = Burger;