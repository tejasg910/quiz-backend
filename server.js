import express from "express";
import { connectDb } from "./config/connectDB.js";
import router from "./routes/quizRoutes.js";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDb();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
