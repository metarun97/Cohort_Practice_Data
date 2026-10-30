// Required items:-
require("dotenv").config();
const app = require('./src/app');
const dns = require("dns");
const connectToDB = require("./src/db/db");


// set server DNS mannually:-
dns.setServers(['1.1.1.1', '8.8.8.8']);

// mongoDb connect call:-
connectToDB();

// Server started:-
app.listen(3002, () => {
  console.log("Server is running on port 3002");
})


