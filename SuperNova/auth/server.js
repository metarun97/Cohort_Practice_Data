// Require dependencies⬇️
require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/db/db");
const dns = require("dns");

// Server DNS setted here⬇️
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Database connection function called⬇️
connectToDB();

// Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
