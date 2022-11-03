import { Request, Response } from "express";
import articleServices from "../services/articles.js";

export default async function articles(req: Request, res: Response) {

  const { skip, take } = req.body;
  const result = await articleServices.sendArticles(skip, take);
  res.status(200).json(result);
};