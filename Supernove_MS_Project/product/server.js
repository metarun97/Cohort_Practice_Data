// Required items:-
require("dotenv").config();
const app = require("./src/app");
const dns = require("dns");
const connectDB = require('./src/db/db');

// Set menually dns for server:-
dns.setServers(["1.1.1.1", "8.8.8.8"])

// connectDB function called:-
connectDB();

// Server started:-
app.listen(3001, () => {
  console.log("Server is running on port 3001");
})
