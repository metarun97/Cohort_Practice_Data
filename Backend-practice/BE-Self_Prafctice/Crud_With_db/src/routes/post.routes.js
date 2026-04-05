// Express require kia:-
const express = require("express");
const { findPlayersController, addPlayersController, deletePlayersController, updatePlayerController } = require("../controllers/post.controller");


// Router banaya gaya:-
const router = express.Router();

// POST API for add player:-
router.post("/player", addPlayersController);
router.get("/player", findPlayersController);
router.delete("/player/:id", deletePlayersController);
router.patch("/player/:id", updatePlayerController);


// Router export kia gaya:-
module.exports = router;
