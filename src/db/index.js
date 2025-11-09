import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      console.error("MONGO_URL is not set. Create a .env file with MONGO_URL");
      process.exit(1);
    }

    const base = mongoUrl.replace(/\/$/, ""); // remove trailing slash
    const connStr = base.includes(DB_NAME) || base.includes('?')
      ? base
      : `${base}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(connStr, {
      // Optional: add recommended options here if desired
    });
    console.log(`Database connected successfully to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}