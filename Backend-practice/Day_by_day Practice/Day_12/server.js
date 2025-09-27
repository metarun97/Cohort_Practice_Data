require('dotenv').config();
const app = require('./src/app');
const connctToDB = require('./src/db/db');


connctToDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
