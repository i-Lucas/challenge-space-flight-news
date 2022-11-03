import { Router } from "express";

import articlesController from "../controllers/articles.js";
import validate from "../middlewares/validateSchema.js";
import articleSchema from "../schemas/articles.js";

const articlesRouter = Router();

articlesRouter.get("/articles", validate(articleSchema.getArticles), articlesController.getArticles);
articlesRouter.get("/articles/:id", articlesController.getArticleById);
articlesRouter.post("/articles", validate(articleSchema.newArticle), articlesController.newArticle);

export default articlesRouter;