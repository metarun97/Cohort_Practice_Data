// Require kiye gaye items:-
require('dotenv').config();
const app = require("./src/app");
const dns = require("dns");
const connectTodB = require('./src/db/db');


// Server set krna dns se:-
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Database call kiya gaya:-
connectTodB();

// Server start krna:-
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

