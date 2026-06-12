/* Required elements */
require("dotenv").config();
const app = require('./src/app');
const dns = require("dns");
const connectToDB = require('./src/db/db');


/* Set DNS menually */
dns.setServers(["1.1.1.1", "8.8.8.8"]);

/* ConnectDB function called */
connectToDB();

/* Server started */
app.listen(3001, () => {
  console.log("Product service is running on port 3001");
})

