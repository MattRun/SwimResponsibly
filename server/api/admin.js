// Server-side code (assuming Express server)
const express = require("express");
const { models: { Product } } = require("../db");
const router = express.Router();


// GET /api/admin
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET /api/product/:id  get a product current information
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const product = await Product.findByPk(id)
    console.log(product)

    if (!product) {
      return res.status(404).send('Product not found')
    }

    res.send(product)
  } catch (err) {
    console.error(err)
  }
})
// PUT /api/campuses/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { title, artist, year, description, price, imageUrl } = req.body;

    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    // Update the product details
    const updateResult = await Product.update(
      { title, artist, year, description, price, imageUrl },
      { where: { id: req.params.id } }
    );

    res.json(updateResult);
  } catch (error) {
    next(error);
  }
});












// POST /api/admin
router.post('/', async (req, res, next) => {
  try {
    const { error } = Product.build(req.body).validate();
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});


// DELETE /api/admin/:id
router.delete('/:id', async (req, res, next) => {
  try {
    console.log("deleting")
    const { id } = req.params;
    const deleteResult = await Product.destroy({
      where: { id: id }
    });

    if (deleteResult === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
});





module.exports = router;
