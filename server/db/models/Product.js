const Sequelize = require('sequelize');
const db = require('../db.js');

module.exports = db.define('Product', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER, 
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.creativeuncut.com/gallery-22/art/bdff-background-art.jpg',
  },
  videoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
 
});


