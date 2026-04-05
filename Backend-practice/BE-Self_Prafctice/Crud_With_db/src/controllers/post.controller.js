const playerModel = require("../models/player.model");



//* Add Player API controller:-
async function addPlayersController(req, res) {
  const { name, role } = req.body;

  // Player ka data dena or player banana:-
  const player = await playerModel.create({
    name, role
  })

  res.status(201).json({
    message: "Player created successfully!",
    player,
  })
}

//* Get All Player API controller:-
async function findPlayersController(req, res) {

  // All player ka data leke ana:-
  const players = await playerModel.find();

  // Player bante hi players name k database data ko dikhana:-
  res.status(200).json({
    message: "Player fetched successfully!",
    players,
  })
}


//* Delete a Player API controller:-
async function deletePlayersController(req, res) {
  const Id = req.params.id;

  // All player ka data leke ana:-
  await playerModel.findOneAndDelete({
    _id: Id,
  });

  // Player bante hi players name k database data ko dikhana:-
  res.status(200).json({
    message: "Player deleted successfully!",
  })
}

//* Update a Player API controller:-
async function updatePlayerController(req, res) {
  const Id = req.params.id;
  const { name, role } = req.body;


  // Id find kro jisey update krna hai or dono data jo diye h req.body k new data se usey replace krdo:-
  await playerModel.findOneAndUpdate({
    _id: Id,
  },
    {
      name: name,
      role: role
    })
  res.status(201).json({
    message: "Player updated successfully!",
  })
}



// APIs ko export krna:-
module.exports = { addPlayersController, findPlayersController, deletePlayersController, updatePlayerController };
