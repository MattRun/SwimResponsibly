'use strict'

const {db, models: {User, Product} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  // Creating Products
  const products = await Promise.all([
    Product.create({
      title: 'Starry Night',
      artist: "Vincent Vangoh",
      year: 1889,
      description: 'If you love stars and love nights, then boy do i have a paiting for you!',
      price: 1000000,
      sellerId: 1,
      imageUrl: "https://sanctuarymentalhealth.org/wp-content/uploads/2021/03/The-Starry-Night-1200x630-1-979x514.jpg"
    }),
    Product.create({
      title: 'Dinosaur',
      artist: "Jean Micheal Basquiat",
      year: 1980,
      description: 'If you love dinosaurs with a crown, then boy do i have a paiting for you!',
      price: 200000,
      sellerId: 2,
      imageUrl:"https://images.ctfassets.net/9y4fi2gkk4ov/vLXFHdbfSLv4Pb6Oi3i6d/40eec6cb9d87d892dcbc2ed873632e37/Jean-Michel_Basquiat_Dino_Doormat_DM23.jpg"
    }),
    Product.create({
      title: 'Spirit Molecule',
      artist: "Alex Gray",
      year: 2004,
      description: 'If you love trippy stuff, then boy do i have a paiting for you!',
      price: 1000000,
      sellerId: 3,
      imageUrl:"https://www.alexgrey.com/art-images/Godself-2012-Alex-Grey-watermarked.jpeg"
      
    }),
    Product.create({
      title: 'I Donut Care',
      artist: "Claudette Medrano",
      year: 2020,
      description: 'Be nice, this one is my sisters art',
      price: 4000000000,
      sellerId: 3,
      imageUrl:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/195161645_766621590697726_9154232031115017028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=Itd6d3vlL-8AX-tASiP&_nc_ht=scontent-lga3-1.xx&oh=00_AfCV-Azh7Yo12oSkbQ-EOHSc2hWapsfFHiTuaArHJabNUw&oe=64B282C0"
      }),
  ]);




  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
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

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
