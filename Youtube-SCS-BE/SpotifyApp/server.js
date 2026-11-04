require("dotenv").config();
const app = require('./src/app');
const connectDb = require('./src/db/db');


/* Database connection setup */
connectDb();

/* Configure port for server */
const port = process.env.PORT || 3000;


/* Server connected to configured port */
app.listen(port, () => {
 console.log("Server running on Port:", port);
})
