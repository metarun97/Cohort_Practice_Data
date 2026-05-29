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

// Addresses endpoints⬇️
router.get("/users/me/addresses", authMiddleware.authMiddleware, authController.getUserAddresses);

// add address endpoint⬇️
router.post("/users/me/addresses", authMiddleware.authMiddleware, validators.addUserAddressValidations, authController.addUserAddress);

// router.post("/users/me/addresses", authMiddleware.authMiddleware, validators.addressValidations, authController.addAddress);
router.delete("/users/me/addresses/:addressId", authMiddleware.authMiddleware, authController.deleteUserAddress);


// Export router⬇️
module.exports = router;
