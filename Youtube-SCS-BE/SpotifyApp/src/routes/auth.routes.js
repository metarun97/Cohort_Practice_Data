const express = require("express");
const authController = require("../controllers/auth.controller");


/* Router created */
const router = express.Router();


/**
 @route /api/auth/register
 @description register a user/artist
 @access public
 */
router.post("/register", authController.registerUser);



/**
 @route /api/auth/login
 @description login a user/artist
 @access public
 */
router.post("/login", authController.loginUser);


/**
 @route /api/auth/logout
 @description login a user/artist
 @access public
 */
router.post("/logout", authController.logoutUser);


module.exports = router;
