// Required items:-
const express = require("express");
const { registerController, loginController } = require("../controllers/auth.controller");

// Router created:-
const router = express.Router()

// Auth all APIs:-
router.post("/register", registerController)
router.post("/login", loginController)



// Router exported:-
module.exports = router;
