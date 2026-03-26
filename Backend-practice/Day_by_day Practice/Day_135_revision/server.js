// env require kia gaya:-
require("dotenv").config();

// app require kia gaya:-

const app = require('./src/app');

// DNS set kia gaya:-
const dns = require("dns");

// DNS se server set kia gaya:-
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// connectToDB require kia gaya:-
const connectToDB = require("./src/db/db");


// connectToDB func call kia gaya:-
connectToDB();


// Server start kia aya:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
