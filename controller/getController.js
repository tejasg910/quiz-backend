import { Quiz } from "../models/Quiz.js";
import { Submit } from "../models/SaveQuiz.js";

export const getQuizData = async (req, res) => {
  const data = await Quiz.find({});

  res.status(200).json({ success: true, data });
};

export const getQuestions = async (req, res) => {
  const quizId = req.query.quizId;

  const data = await Quiz.findById(quizId);

  res.status(200).json({ success: true, data });
};

export const getAllQuestions = async (req, res) => {
  const quizId = req.query.quizId;

  const response = await Quiz.findById(quizId);

  const data = response.questions;
  const time = response.limit;
  console.log(data);
  res.status(200).json({ success: true, data, time });
};

export const getAllQuizQuestions = async (req, res) => {
  const quizId = req.query.quizId;

  const questions = await Quiz.findById(quizId).select("-answer");
  const time = questions.limit;

  const data = questions.questions;
  res.status(200).json({ success: true, data, time });
};

export const getSubmittedQuiz = async (req, res) => {
  try {
    const data = await Submit.find({});
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
