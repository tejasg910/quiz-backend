import { Router } from "express";
import {
  getAllQuestions,
  getAllQuizQuestions,
  getQuestions,
  getQuizData,
} from "../controller/getController.js";
import { addQuestions, createQuiz } from "../controller/quizController.js";

const router = Router();

router.post("/create", createQuiz);
router.get("/getquizzes", getQuizData);
router.get("/getquestions", getQuestions);
router.post("/addquestion", addQuestions);
router.get("/getallquestions", getAllQuestions);
router.get("/getquizquestions", getAllQuizQuestions);
export default router;
