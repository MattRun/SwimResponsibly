const db = require('./db');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/OrderModel');
const Cart = require('./models/CartModel');
const OrderItem = require('./models/OrderItemModel');
const CartItem = require('./models/CartItemModel');

// Order Associations:
Order.belongsTo(User);
Order.belongsToMany(Product, { through: OrderItem });
// User Associations:
User.hasMany(Product);
User.hasOne(Cart);
User.hasMany(Order);

// Cart Model Associations:
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem })

// Product Model Associations:
Product.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Product.belongsToMany(Order, { through: OrderItem });

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
