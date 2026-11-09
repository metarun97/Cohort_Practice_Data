import mongoose from "mongoose";
import config from '../config/config.js';


const connectToDb = async () => {
 try {
  await mongoose.connect(config.MONGO_URI);
  console.log("MongoDB Connected Successfully!");
 } catch (error) {
  console.log("MongoDB connection error:", error);
 }
}

export default connectToDb;
