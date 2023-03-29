import { Quiz } from "../models/Quiz";

export const getQuizData = async (req, res) => {
  const data = await Quiz.find({});

  res.status(200).json({ success: true, data });
};

export const getQuestions = async (req, res) => {
  const quizId = req.query.quizId;
  const data = await Quiz.findById({ _id: quizId });

  res.status(200).json({ success: true, data });
};
