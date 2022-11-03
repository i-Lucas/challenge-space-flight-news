import joi from "joi";
import { articles } from "@prisma/client";

const scheme = { scheme: ['http', 'https'] };

const newArticle = joi.object<Omit<articles, "id">>({

  title: joi.string().min(5).max(35).required(),
  url: joi.string().uri(scheme).required(),
  imageUrl: joi.string().uri(scheme).required(),
  newsSite: joi.string().uri(scheme).required(),
  summary: joi.string().min(15).required()
});

const getArticles = joi.object({
  skip: joi.number().integer().required(),
  take: joi.number().required()
});

const articleSchema = {
  newArticle,
  getArticles
};

export default articleSchema;