import { Request, Response } from "express";
import articleServices from "../services/articles.js";
import formatter from "../tools/dateFormatter.js";

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

async function newArticle(req: Request, res: Response) {

  const data: {
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
  } = req.body;

  const updatedAt = formatter.formated();
  const publishedAt = formatter.formated();

  await articleServices.createNewArticle({ ...data, updatedAt, publishedAt });
  res.sendStatus(201);
};

const articlesController = {
  getArticles,
  getArticleById,
  newArticle
};

export default articlesController;