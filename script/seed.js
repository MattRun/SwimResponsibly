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
      title: 'Cart Start',
      artist: 'Montadher Sabah',
      year: 2021,
      price: 1099,
      description: 'This is my alternate realities visual art submitted to the pwnisher challenge back in 2021',
      videoUrl: 'https://giphy.com/embed/hNMxGCXQux22xztnfk',
      
    }),
    Product.create({
      title: 'Recycle Recycled',
      artist: 'Jack Allum',
      year: 2021,
      price: 1099,
      description: 'My submission for the Alternate Realities Render Challenge. Created in Blender using EEVEE. Instagram - https://www.instagram.com/jackaloom/',
      videoUrl: 'https://giphy.com/embed/Y8nuh1zoVTqoeF65Hm',
    }),
    Product.create({
      title: 'Volcano Eruption',
      artist: 'cgRAWR',
      year: 2021,
      price: 1099,
      description: 'Recently Goma city got threatened by a massive volcanic eruption of Mt.Nyiragongo .People had to flee from the city, the render is dedicated to the people of Congo.',
      videoUrl: 'https://giphy.com/embed/KaaNalJ4j6aQv61JOl',
    }),
    Product.create({
      title: 'Spacebound',
      artist: 'BourneVFX',
      year: 2021,
      price: 1099,
      description: 'My submission to the Pwnisher Alternate Realities Challenge.',
      videoUrl: 'https://giphy.com/embed/lDc7aPX6fauohOFC15',
    }),
    Product.create({
      title: 'Wasteland',
      artist: 'Waffold',
      year: 2021,
      price: 1099,
      description: 'This is from the alternate realities challenge by Pwnisher.',
      videoUrl:'https://giphy.com/embed/1h0i1AFvf5x5GecNxy'
    }),
    Product.create({
      title: 'Lost Land',
      artist: 'Twan Oligschlaeger',
      year: 2021,
      price: 1099,
      description: 'This is my submission for the pwnisher community render challange "Alternate Realities", and also the first big 3D Blender project that Ive done.',
      videoUrl:'https://giphy.com/embed/07ac1IDUQAiTfRVoye'
    }),
    Product.create({
      title: 'Traverse',
      artist: 'itzPrey',
      year: 2021,
      price: 1099,
      description: 'This is my submission for the pwnisher community render challange "Alternate Realities". https://www.instagram.com/itz.prey/',
      videoUrl:'https://giphy.com/embed/GT4FZvOgvqkceX5mop'
    }),
    Product.create({
      title: 'Defeated',
      artist: 'Thunder',
      year: 2021,
      price: 1099,
      description: 'This is my submission for Pwnishers Alternate Realities Challenge rendered using Cycles render engine. This is one of my first big projects.',
      videoUrl:'https://giphy.com/embed/UQQQn0Vau63K4q3An7'
    }),
    Product.create({
      title: 'Walk the Coin',
      artist: 'Karl Lagerfeuer',
      year: 2021,
      price: 1099,
      description: 'The Whole Silicon -/GPU Shortage, Covid and Cryptomining thing going on right now gave me the Idea for my Redner. ',
      videoUrl:'https://giphy.com/embed/idqYT5m9GsM5yHMU2r'
    }),
    Product.create({
      title: 'Duties',
      artist: 'VOLDE',
      year: 2021,
      price: 1099,
      description: 'My submission for alternate realities render challenge, learned a lot from working on this render. This is my actual first animated render (Video).',
      videoUrl:'https://giphy.com/embed/tcIf0p9QqNBfMhnEGD'
    }),




//new product with new price below

    Product.create({
      title: 'Space Escape',
      artist: 'Manuel Peter',
      year: 2022,
      price: 2099,
      description: 'my submission to the infinite journeys challenge. http://www.manuel-peter.com',
      videoUrl:'https://giphy.com/embed/teiQWOHAeEUPqJpjDl'
    }),
    Product.create({
      title: 'Dune',
      artist: 'Mateusz Świerkowski',
      year: 2022,
      price: 2099,
      description: 'Pwnisher INFINITE JOURNEYS submission.',
      videoUrl:'https://giphy.com/embed/G4zs78vf2qvJ0YVgq0'
    }),
    Product.create({
      title: 'Rolling Towns',
      artist: 'Understone',
      year: 2022,
      price: 2099,
      description: 'Infinite Journeys challenge "Rolling Towns"',
      videoUrl:'https://giphy.com/embed/xNmymgpAI6AEh5khA2'
    }),
    Product.create({
      title: 'Warships',
      artist: 'Miche-Miche',
      year: 2022,
      price: 2099,
      description: 'This took 3 weeks to make. I made a ton of historical research to accurately replicate a 36-pounder naval cannon and its rope attachments, late-18th century British and French uniforms based on historical sewing patterns.(1776)',
      videoUrl:'https://giphy.com/embed/3lSUUFXJLJGIv0ekAF'
    }),
    Product.create({
      title: 'Complete',
      artist: 'Stone Aardvark',
      year: 2022,
      price: 2099,
      description: 'My submission for the Pwnisher Infinite Journeys 3D Challenge. This animation took me roughly 15 hours to create and 6.5 hours to render.',
      videoUrl:'https://giphy.com/embed/XOuUMjYby3KC2WQnad'
    }),
    Product.create({
      title: 'War of One',
      artist: 'TwistedFantasy',
      year: 2022,
      price: 2099,
      description: 'I find 3d models from Quixel megascans to fill up the scene and much more. I used Davinici resolve to color grading and composite everything together. Its a World War 1 inspiration. https://www.instagram.com/rasmusgphoto/ ',
      videoUrl:'https://giphy.com/embed/zEhWOgHmqKMlVVBXAB'
    }),
    Product.create({
      title: 'Rugras',
      artist: 'Escape',
      year: 2022,
      price: 2099,
      description: 'My submission for the Pwnisher Infinite Journeys 3D Challenge.',
      videoUrl:'https://giphy.com/embed/pGDdupOi1q6Jafi21r'
    }),
    Product.create({
      title: 'Coming Home',
      artist: 'Makenbo',
      year: 2022,
      price: 2099,
      description: 'My submission for Pwnishers one month long render challange called "Infinite Journeys". https://www.instagram.com/thegreatmurloc/',
      videoUrl:'https://giphy.com/embed/EREVMDlc5XD8pRGP1U'
    }),
    Product.create({
      title: 'Under the surface',
      artist: 'Blenderlicious',
      year: 2022,
      price: 2099,
      description: 'My Entry for the "infinite journeys" - CG Challenge by Pwnisher Made in Blender 3.0 . https://www.artstation.com/blenderlicious',
      videoUrl:'https://giphy.com/embed/HpN3L5XTTT8VkMX1UY'
    }),
    Product.create({
      title: 'Space Nomblers',
      artist: 'KrisET - Somethings Awry',
      year: 2022,
      price: 2099,
      description: 'Just another day feeding the Space Nomblers 1st place winner in Pwnishers Infinite Journeys Render Challenge! Animated using Noitoms Perception Neuron 3',
      videoUrl:'https://giphy.com/embed/JxteIDl9bFaAMKjbr6'
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
