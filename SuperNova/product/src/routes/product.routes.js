/* Required elements */
const express = require("express");
const multer = require("multer");
const imageKitService = require("../services/imagekit");
const createAuthMiddleware = require("../middlewares/auth.middleware");
const productController = require("../controllers/product.controller");


/* Router created */
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", createAuthMiddleware(["admin", "seller"]), upload.single("image"), productController.createProduct);


/* Export elements */
module.exports = router;
