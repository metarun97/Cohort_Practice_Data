// Required items:-
const express = require("express");
const multer = require("multer");
const productController = require("../controllers/product.controller");
const createAuthMiddleware = require("../middlewares/auth.middleware");
const { createProductValidators } = require("../validators/product.validators");

// Router created:-
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


// POST /api/products/
router.post("/", createAuthMiddleware(["admin", "seller"]), upload.array("images", 5), createProductValidators, productController.createProduct);

// Exported item:=
module.exports = router;
