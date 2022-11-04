import { Request, Response } from "express";
import articleServices from "../services/articles.js";
import formatter from "../tools/dateFormatter.js";

async function getArticles(req: Request, res: Response) {

  const skip = req.headers.skip;
  const take = req.headers.take;

  if (!skip || !take) throw { status: 400, message: "invalid parameters" };
  const result = await articleServices.sendArticles(skip.toString(), take.toString());
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

async function editArticle(req: Request, res: Response) {

  const { id } = req.params;

  const data: {
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string
  } = req.body;

  const updatedAt = formatter.formated();
  await articleServices.updateArticle({ ...data, id: parseInt(id), updatedAt });
  res.sendStatus(200);
};

async function deleteArticle(req: Request, res: Response) {

  const { id } = req.params;
  if (!id) throw { status: 400, message: "'id' parameter is required" };

  await articleServices.deleteArticle(parseInt(id));
  res.sendStatus(200);
};

const articlesController = {
  getArticles,
  getArticleById,
  newArticle,
  editArticle,
  deleteArticle
};

export default articlesController;