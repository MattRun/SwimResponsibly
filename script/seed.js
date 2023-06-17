'use strict'

const {db, models: {User, Product} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
const seed = async() => {
  try {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])
  console.log("Seeded Users")

  // Creating Products
  const products = await Promise.all([
    Product.create({
      title: 'Product 1',
      artist:"unknow",
      year:199,
      price: 1099,
      description: 'This is the first product.',

    }),
    Product.create({ 
      title: 'Product 2',
    artist:"unknow",
    year:199,
    price: 1099,
    description: 'This is the first product.',
    }),
    Product.create({ 
      title: 'Product 3',
    artist:"unknow",
    year:199,
    price: 1099,
    description: 'This is the first product.',
    }),
    Product.create({
    title: 'Product 4',
    artist:"unknow",
    year:199,
    price: 1099,
    description: 'This is the first product.',
    }),
    Product.create({
      title: 'Product 5',
      artist:"unknow",
      year:199,
      price: 1099,
      description: 'This is the first product.',
    }),
    Product.create({
      title: 'Product 6',
      artist:"unknow",
      year:199,
      price: 1099,
      description: 'This is the first product.',
    }),
  ]);




  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${products.length} products`)

  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
} catch (err) {
  // console.log(red(err))
  console.log(err)
}
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("Oh noes! Something went wrong!", err);
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

