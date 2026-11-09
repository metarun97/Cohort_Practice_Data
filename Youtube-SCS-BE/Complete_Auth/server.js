import app from './src/app.js';
import connectToDb from './src/db/db.js';


connectToDb();



app.listen(3000, () => {
 console.log("Server is running on Port:3000");
})
