const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.post("/products",productController.create_product);
router.get("/products",productController.products);

module.exports = router;