import mongoose from "mongoose";

export default async function connectToDataBase(mongoDBConnectionString) {
  try {
    const conn = await mongoose.connect(mongoDBConnectionString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
