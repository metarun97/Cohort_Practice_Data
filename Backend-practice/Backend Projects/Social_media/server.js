require("dotenv").config();
const app = require('./src/app');


app.listen(3000,()=>{
  console.log("Server is runnnig on port 3000")
})

