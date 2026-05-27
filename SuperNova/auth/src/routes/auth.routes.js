// Require dependencies⬇️
const express = require("express");
const authController = require("../controllers/auth.controller");
const validators = require("../middlewares/vaildator.middleware");

// Create router⬇️
const router = express.Router();

// Register endpoint⬇️
router.post("/register", validators.registerUserValidations, authController.registerUser);

// login endpoint⬇️
router.post("/login", validators.loginUserValidations, authController.loginUser);


// Export router⬇️
module.exports = router;
