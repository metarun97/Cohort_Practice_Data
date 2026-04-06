// Express require kia:-
const express = require("express");
const { registerUser, loginUser, findUser, logoutUser } = require("../db/controllers/auth.controller");


// Router bana dia:-
const router = express.Router();



// Register, login, user(Protected), logout API:-
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", findUser);
router.get("/logout", logoutUser);




// Router export kia:-
module.exports = router;

