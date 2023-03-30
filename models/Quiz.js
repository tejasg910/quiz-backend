import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: [
    {
      title: String,
      options: [{ option: String }],
      answer: String,
    },
  ],
  marks: Number,
  limit: Date,
});

export const Quiz = mongoose.model("Quiz", QuizSchema);
