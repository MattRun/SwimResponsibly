const Sequelize = require("sequelize");
const db = require("../db.js");

const OrderItem = db.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = OrderItem;