const express = require("express");
const router = express.Router();

const { Product } = require("../db");
//pulls "Product" from models ^

//this route returns all Products
router.get("/", async (req, res, next) => {
  console.log("In the backend");

  try {
    const allProduct = await Product.findAll();

    res.status(200).send(allProduct);
  } catch (error) {
    next(error);
  }
});

//this route returns a single Product
router.get("/:id", async (req, res, next) => {
  try {
    const singleProductID = req.params.id;

    const singleProduct = await Campuses.findByPk(singleProductID, {
        include: [Products],
        //eager loading^^^^
    });
    
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;