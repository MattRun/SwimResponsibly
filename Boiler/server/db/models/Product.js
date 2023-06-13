const Sequelize = require("sequelize");
const db = require("../db.js");

module.exports = db.define("Product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.creativeuncut.com/gallery-22/art/bdff-background-art.jpg',
  }
});
