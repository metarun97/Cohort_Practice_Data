const express = require("express");
const validationMiddleware = require('../src/middlewares/validator.middleware');

const app = express();



app.use(express.json())

/* Jest test code */
app.get("/", (req, res) => {
 res.status(200).json({ message: "Hello World!" });
});

/* Express-validator's code */
app.post("/register", validationMiddleware.validateRegister, (req, res) => {
 const { username, email, password } = req.body;

 res.status(201).json({
  message: "User created successfully!",
  user: { username, email },
 })
})

module.exports = app;



