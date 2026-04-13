/* Required items */
const express = require("express");
const authMiddleware = require('../middlewares/auth.middleware');
const chatController = require('../controllers/chat.controller');


/* Routed created:- */
const router = express.Router();


/* Chat rote => (/api/chat/) */
router.post("/", authMiddleware.authUser,chatController.createChat)



/* export data:- */
module.exports = router;
