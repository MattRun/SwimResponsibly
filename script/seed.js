const { db, models: { User, Product, Cart, Order, OrderItem, CartItem } } = require('../server/db');

async function seed() {
  await db.sync({ force: true }); // Clears the database and matches models to tables

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', isAdmin:true }),
    User.create({ username: 'murphy', password: '123' }),
  ]);
  const [cody, murphy] = users;
  console.log("Seeded Users");

  // Creating Products
  const products = await Promise.all([
    Product.create({
      title: 'Product 1',
      artist: 'Unknown',
      year: 199,
      price: 1099,
      description: 'This is the first product.',
    }),
    Product.create({
      title: 'Product 2',
      artist: 'Unknown',
      year: 199,
      price: 1099,
      description: 'This is the second product.',
    }),
    Product.create({
      title: 'Product 3',
      artist: 'Unknown',
      year: 199,
      price: 1099,
      description: 'This is the first product.',
    }),
    Product.create({
      title: 'Product 4',
      artist: 'Unknown',
      year: 199,
      price: 1099,
      description: 'This is the first product.',
    }),
    // Add more products here as needed
  ]);
  console.log('Seeded Products');

  // Creating Carts for Cody and Murphy
  const codyCart = await Cart.create();
  const murphyCart = await Cart.create();
  await cody.setCart(codyCart);
  await murphy.setCart(murphyCart);
  console.log('Seeded Carts');

  // Adding Products to Cody's Cart
  await CartItem.create({ cartId: codyCart.id, productId: products[0].id, quantity: 3 });
  await CartItem.create({ cartId: codyCart.id, productId: products[1].id, quantity: 2 });
  console.log("Added Products to Cody's Cart");

  // Adding Products to Murphy's Cart
  await CartItem.create({ cartId: murphyCart.id, productId: products[0].id, quantity: 1 });
  console.log("Added Products to Murphy's Cart");

  // Creating Orders for Cody and Murphy
  const codyOrder = await Order.create();
  const murphyOrder = await Order.create();
  await cody.addOrder(codyOrder);
  await murphy.addOrder(murphyOrder);
  console.log('Seeded Orders');

  // Adding Products to Cody's Order
  await OrderItem.create({ orderId: codyOrder.id, productId: products[0].id, quantity: 2 });
  console.log("Added Products to Cody's Order");

  console.log('Seeding completed successfully');
}

async function runSeed() {
  try {
    await seed();
    console.log('Seeding success!');
  } catch (err) {
    console.error('Oh no! Something went wrong:', err);
    process.exitCode = 1;
  } finally {
    console.log('Closing the database connection');
    await db.close();
    console.log('Database connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed