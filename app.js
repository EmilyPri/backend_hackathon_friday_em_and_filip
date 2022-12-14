import express from "express";
import  christmasRouter from "./routes/christmasList.js";
import cors from "cors";

const app = express();
app.use(cors())

app.use(express.json());
app.use("/api/christmasList", christmasRouter);

export default app;