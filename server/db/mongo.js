import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URI;

if (!MONGO_URL) {
  throw new Error("URI not found!");
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(MONGO_URL, { dbName: process.env.DB_NAME });
  console.log("Connected to MongoDB...");
}