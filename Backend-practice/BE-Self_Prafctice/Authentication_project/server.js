// dotenv require kr dia:-
require("dotenv").config();

// App require kr dia:-
const app = require("./src/app");

// connectToDb require kr dia:-
const connectToDb = require("./src/db/db");

// DNS require kia:-
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// DB connect function called:-
connectToDb();

// Server start kr dia:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
