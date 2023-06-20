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
