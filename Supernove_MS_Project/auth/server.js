// Required items:-
require("dotenv").config();
const app = require('./src/app');
const connectToDab = require('./src/db/db');
const dns = require("dns");


// Set dns mannually:-
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Connect database function:-
connectToDab()

// Server started:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})





