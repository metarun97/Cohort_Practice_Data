// Require dependencies⬇️
const express = require("express");
const authController = require("../controllers/auth.controller");
const validators = require("../middlewares/vaildator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

// Create router⬇️
const router = express.Router();


// Register endpoint⬇️
router.post("/register", validators.registerUserValidations, authController.registerUser);

// login endpoint⬇️
router.post("/login", validators.loginUserValidations, authController.loginUser);

// me endpoint⬇️
router.get("/me", authMiddleware.authMiddleware, authController.getCurrentUser);

// logout endpoint⬇️
router.get("/logout", authController.logoutUser);


// Export router⬇️
module.exports = router;
