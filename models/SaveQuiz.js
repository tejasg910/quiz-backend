import mongoose from "mongoose";

const SaveQuizSchema = new mongoose.Schema({
  title: String,
  description: String,
  marks: {
    type: Number,
    default: 0,
  },
  totalMarks: Number,
});

export const Submit = mongoose.model("Submit", SaveQuizSchema);
