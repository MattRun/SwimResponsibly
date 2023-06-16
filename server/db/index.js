const db = require('./db');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Cart = require('./models/Cart');

// User Model Associations:
User.hasMany(Order); // A user can have multiple orders.
User.hasMany(Cart); // A user can have multiple carts.

// Order Model Associations:
Order.belongsTo(User); // An order belongs to a single user.
Order.belongsToMany(Product, { through: 'OrderProduct' }); // An order can have multiple products through the intermediate model 'OrderProduct'.

// Cart Model Associations:
Cart.belongsTo(User); // A cart belongs to a single user.
Cart.belongsToMany(Product, { through: 'CartProduct' }); // A cart can have multiple products through the intermediate model 'CartProduct'.

// Product Model Associations:
Product.belongsToMany(Cart, { through: 'CartProduct' }); // A product can be associated with multiple carts through the intermediate model 'CartProduct'.
Product.belongsToMany(Order, { through: 'OrderProduct' }); // A product can be associated with multiple orders through the intermediate model 'OrderProduct'.

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
