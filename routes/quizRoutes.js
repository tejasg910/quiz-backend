import { Router } from "express";
import {
  getAllQuestions,
  getAllQuizQuestions,
  getQuestions,
  getQuizData,
} from "../controller/getController.js";
import {
  addQuestions,
  createQuiz,
  deleteQuestion,
  submitQuiz,
} from "../controller/quizController.js";

const router = Router();

router.post("/create", createQuiz);
router.get("/getquizzes", getQuizData);
router.get("/getquestions", getQuestions);
router.post("/addquestion", addQuestions);
router.get("/getallquestions", getAllQuestions);
router.get("/getquizquestions", getAllQuizQuestions);
router.post("/submitquiz", submitQuiz);
router.post("/deletequestion", deleteQuestion);

export default router;
