const express = require("express");
const productController = require("../controllers/product.controller");

/* Router created */
const router = express.Router();


router.post("/", productController.createProductController);

router.get("/get-items", productController.getProductController);


module.exports = router;



