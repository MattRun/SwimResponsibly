const Sequelize = require('sequelize');
const db = require('../db.js');

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Order;