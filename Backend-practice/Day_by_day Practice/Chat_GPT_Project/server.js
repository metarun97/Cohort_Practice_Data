/* Required data */
require("dotenv").config();
const app = require('./src/app');
const connectToDb = require('./src/db/db');
/* Take DNS nad set to the server:- */
const dns = require("dns");
dns.setServers(["1.1.1.1", '8.8.8.8'])



connectToDb();

/* Server connected */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
