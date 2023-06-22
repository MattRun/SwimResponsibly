const express = require("express");
const router = express.Router();
const { models:{Product } }= require("../db");

// GET /api/shop
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
  
    res.send(allProducts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const product = await Product.findByPk(id)

    if (!Product) {
      return res.status(404).send('Product not found')
    }

    res.send(product)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router;
