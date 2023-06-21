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
    defaultValue: "https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123",
  },
  videoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://giphy.com/embed/JxteIDl9bFaAMKjbr6"
  },
  
 
});


