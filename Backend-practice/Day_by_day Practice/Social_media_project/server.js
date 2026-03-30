// Required items:-
require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/db/db");
const dns = require("dns");

// DNS setted:-
dns.setServers(['1.1.1.1', '8.8.8.8']);

// DB function called:-
connectToDB();

// Server started:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
