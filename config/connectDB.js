import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
