// Server-side code (assuming Express server)
const express = require("express");
const router = express.Router();
const { models: { Product } } = require("../db");

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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.send(product);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
