import { Quiz } from "../models/Quiz.js";
import { Submit } from "../models/SaveQuiz.js";

export const createQuiz = async (req, res) => {
  try {
    const { title, description, marks, limit } = req.body;

    const limiTime = limit;
    const save = await Quiz.create({
      title,
      description,
      marks,
      limit: limiTime,
    });

    await save.save();
    res
      .status(201)
      .json({ success: true, message: "data created successfully" });
  } catch (error) {
    res.status(201).json({ success: false, message: error.message });
  }
};

export const addQuestions = async (req, res) => {
  try {
    const { title, answer, options } = req.body;

    const quizId = req.query.quizId;
    const quiz = await Quiz.findOne({ _id: quizId });

    // Add the new question to the quiz

    const obj = options.map((item, index) => {
      return { option: item };
    });
    const newQuestion = {
      title,
      answer,
      options: obj,
    };
    quiz.questions.push(newQuestion);

    // Save the updated quiz to the database
    await quiz.save();

    res.status(200).json({ message: "Question added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

export const deleteQuestion = async (req, res) => {
  const { questionIndex } = req.body;
  const quizId = req.query.quizId;

  try {
    const question = await Quiz.findOne({ _id: quizId });
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    question.questions.splice(questionIndex, 1);
    await question.save();

    return res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

export const updateQuestions = async (req, res) => {
  const { questionIndex, title, options, answer } = req.body;

  const quizId = req.query.quizId;

  try {
    const quiz = await Quiz.findOne({ _id: quizId });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const questionToUpdate = quiz.questions[questionIndex];

    if (!questionToUpdate) {
      return res.status(404).json({ message: "Question not found" });
    }

    // update the question with the new information
    questionToUpdate.title = title;
    questionToUpdate.answer = answer;
    questionToUpdate.options = options;

    // save the updated quiz to the database
    await quiz.save();

    res.status(200).json({ message: "Question updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitQuiz = async (req, res) => {
  const { submission } = req.body;

  const quizId = req.query.quizId;

  const quiz = await Quiz.findById(quizId);

  let marksObtained = 0;

  const originalQuiz = quiz.questions;

  originalQuiz.map((item, index) => {
    submission.map((value, i) => {
      if (item.answer === value.selectedAnswer) {
        marksObtained++;
      }
    });
  });

  const score = {
    marksObtained,
    totalMarks: quiz.marks * originalQuiz.length,
  };

  const data = {
    title: quiz.title,
    description: quiz.description,

    marks: marksObtained,
    totalMarks: originalQuiz.length,
  };

  await Submit.create(data);
  res
    .status(200)
    .json({ success: true, message: "Quiz submitted successfully", score });
};
