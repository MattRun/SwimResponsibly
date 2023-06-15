const Sequelize = require('sequelize')
const db = require('../db')

const Art = db.define('Product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artisit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.creativeuncut.com/gallery-22/art/bdff-background-art.jpg',
      },
    sellerId: {
        type: Sequelize.VIRTUAL,
        allowNull: false
    }
})

module.exports = Art