const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define('cart', {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
});

Cart.prototype.removeProduct = async function (productId) {
    const product = await Product.findByPk(productId);
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    await this.removeProduct(product); // Remove the product from the cart
  
    return this.reload({ include: Product });
};

module.exports = Cart;
