const express = require("express");
const router = express.Router();
const { models: { Product } } = require("../db"); // Assuming the Product model is exported from the models file

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

module.exports = router;
