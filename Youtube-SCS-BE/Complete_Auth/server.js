import app from './src/app.js';
import connectToDb from './src/db/db.js';
import config from './src/config/config.js';


connectToDb();


app.listen(config.PORT, () => {
 console.log(`Server is running on Port:${config.PORT}`);
})
