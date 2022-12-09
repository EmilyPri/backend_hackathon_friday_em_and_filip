import express from "express";
import { getChristmasList, newChristmasItem, markAsCompleted, deleteChristmasItem } from "../models/christmasList.js";

const christmasRouter = express.Router();

christmasRouter.get("/", async (req, res) => {
  const data = await getChristmasList();
  res.json({ success: true, payload: data });
});

christmasRouter.post("/", async (req, res) => {
  //const { listItem } = req.body;
  const result = await newChristmasItem(req.body.item, req.body.completed);
  res.status(201).json({ success: true, payload: result });
});

christmasRouter.patch("/:id", async (req, res) => {
  const result = await markAsCompleted(req.params.id, req.body.completed);
  res.status(201).json({ success: true, payload: result });
});

christmasRouter.delete("/:id", async (req,res) => {
    const result = deleteChristmasItem(req.params.id);
    res.status(201).json({ success: true, payload: result });
})

export default christmasRouter;