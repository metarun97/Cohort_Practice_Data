require("dotenv").config();
// app required to start server⬇️
const app = require('./src/app');
const connectToDb = require('./src/db/db')

// DNS required here⬇️
const dns = require("dns");

// Server dns given here⬇️
dns.setServers(["1.1.1.1", "8.8.8.8"]);


// connectToDb funtion called⬇️
connectToDb();


// Server started here⬇️
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
