const Sequelize = require("sequelize");
const db = require("../db.js");
module.exports = db.define('Order', {
    totalPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'pending'
    }
  });