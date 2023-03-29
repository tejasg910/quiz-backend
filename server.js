import express from "express";
import { connectDb } from "./config/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();

app.listen(PORT, () => {
  console.log("server started on ", PORT);
});
