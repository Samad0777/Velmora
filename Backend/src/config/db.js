import mongoose from "mongoose";

async function connectDb() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not set. Add it to the .env file.");
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");
}

export default connectDb;