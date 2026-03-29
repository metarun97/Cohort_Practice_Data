// Require dotenv for use:-
require("dotenv").config();

// Server required here:-
const app = require("./src/app");

//  connectToDB reuire here from the db file:-
const connectToDB = require("./src/db/db");

// Set the dns here:-
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// connectToDB func called:-
connectToDB();

// Server started here:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
