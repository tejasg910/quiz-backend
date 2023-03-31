import mongoose from "mongoose";

const SaveQuizSchema = new mongoose.Schema({
  title: String,
  description: String,
  sumbmission: [{ title: String, index: Number, answer: String }],
  marks: {
    type: Number,
    default: 1,
  },
  limit: Date,
});

export const Submit = mongoose.model("Submit", SaveQuizSchema);
