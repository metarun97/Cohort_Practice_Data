// dotenv required here⬇️
require("dotenv").config();

// App required here⬇️
const app = require("./src/app");

// dns required here⬇️
const dns = require("dns");

// dns required here⬇️
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// connectToDB required here⬇️
const connectToDB = require('./src/db/db');



// connectToDB called here⬇️
connectToDB();


// Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
