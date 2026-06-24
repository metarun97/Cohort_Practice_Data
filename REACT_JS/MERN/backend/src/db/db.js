/* Imported packages/files */;
import mongoose from "mongoose";


/* ConnectDB function */
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully✅")
  } catch (err) {
    console.log("Error to Connect Database :", err);
  }
}


