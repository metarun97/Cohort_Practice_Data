/* Required elements */
const express = require("express");
const authController = require("../controllers/auth.controller");


/* Route data */
const router = express.Router();

// All routes for API's:-
router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)


/* Export data */
module.exports = router;
