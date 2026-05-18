import mongoose from "mongoose";

const connectDB = async () => {
  // 1. Check process.env FIRST (Docker injects here)
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is undefined!");
    console.log("Current Env:", process.env); // This will help you debug in lo>
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
