/* Imported packages/files */
import dotenv from "dotenv";
import app from './src/app.js';
import dns from "dns";
import { connectToDb } from './src/db/db.js';


/* Excess the dotenv file data */
dotenv.config();

/* Set server DNS Menually */
dns.setServers(["1.1.1.1", "8.8.8.8"]);

/* ConnectDb function called here */
connectToDb();

/* Declare server PORT */
const PORT = 3000;


/* Server started here */
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
