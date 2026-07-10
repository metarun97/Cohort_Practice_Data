// Required items:-
const express = require("express");
const authController = require('../controllers/auth.controller');
const validators = require('../middlewares/validator.middleware');


// Router created:-
const router = express.Router();

// Resiter API endpoint:-
router.post("/register", validators.registerUserValidation, authController.regitserUser);


// Export item:-
module.exports = router;
