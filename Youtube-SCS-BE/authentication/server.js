require("dotenv").config();
const app = require('./src/app');
const connctDb = require("./src/db/db");

connctDb();

const port = process.env.port || 3000;

app.listen(3000, () => {
 console.log(`Server running on Port:${port}`);
})
