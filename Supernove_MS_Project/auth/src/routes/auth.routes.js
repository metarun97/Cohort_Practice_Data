// Required items:-
const express = require("express");
const authController = require('../controllers/auth.controller');
const validators = require('../middlewares/validator.middleware');
const authMiddleware = require("../middlewares/auth.middleware");

// Router created:-
const router = express.Router();

// POST /api/auth/register
router.post("/register", validators.registerUserValidation, authController.regitserUser);

// POST /api/auth/login
router.post("/login", validators.loginUserValidation, authController.loginUser)

// GET /api/auth/me
router.get("/me", authMiddleware.authMiddleware, authController.getCurrentUser);

// GET /api/auth/logout
router.get("/logout", authController.logoutUser);

// GET /api/auth/me
router.get("/users/me/addresses", authMiddleware.authMiddleware, authController.getUserAddresses);

// POST /api/auth/me
router.post("/users/me/addresses", validators.addUserAddressValidations, authMiddleware.authMiddleware, authController.addUserAddress);

// POST /api/auth/me
router.delete("/users/me/addresses/:addressId", authMiddleware.authMiddleware, authController.deletUserAddress);

// Export item:-
module.exports = router;
