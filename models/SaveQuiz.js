import mongoose from "mongoose";

const SaveQuizSchema = new mongoose.Schema({
  title: String,
  description: String,
  sumbmission: [{ title: String, index: Number, answer: String }],
  marks: Number,
  limit: Date,
});

export const Submit = mongoose.model("Submit", SaveQuizSchema);
