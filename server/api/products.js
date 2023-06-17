const express = require("express");
const router = express.Router();
const { models:{Product } }= require("../db"); // Assuming the Product model is exported from the models file

// GET /api/shop

//this route returns all PRODUCTS using GET
router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
  
    res.status(200).send(allProducts);
  } catch (error) {
    next(error);
  }
});





//this route returns a single Product using GET
router.get("/:id", async (req, res, next) => {
  try {
    const singleProductId = req.params.id;

    const singleProduct = await Product.findByPk(singleProductId, {
        // include: [],
        //eager loading^^^^
    });
    
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
