import express from "express";
//import { christmasRouter } from "./routes/christmas.routes.js";
//import cors from "cors";

const app = express();
//app.use(cors())

app.use(express.json());
//app.use("/api/christmas", christmasRouter);

export default app;