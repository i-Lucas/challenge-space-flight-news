import { Request, Response } from "express";
import articleServices from "../services/articles.js";

async function getArticles(req: Request, res: Response) {

  const { skip, take } = req.body;
  const result = await articleServices.sendArticles(skip, take);
  res.status(200).json(result);
};

async function getArticleById(req: Request, res: Response) {

  const { id } = req.params;
  const article = await articleServices.getArticleById(parseInt(id));
  res.status(200).send(article);
};

const articlesController = {
  getArticles,
  getArticleById
};

export default articlesController;