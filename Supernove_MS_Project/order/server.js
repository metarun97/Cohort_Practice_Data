require("dotenv").config();
const app = require("./src/app");
const dns = require("dns");
const connectToDb = require("./src/db/db");


dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectToDb();


app.listen(3003, () => {
  console.log("Server is running on port 3003")
})

