import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected...");
  } catch (error) {
    console.error(error.message);

    // Exit Process with Failure
    process.exit(1);
  }
};

// module.exports = connectDB;
