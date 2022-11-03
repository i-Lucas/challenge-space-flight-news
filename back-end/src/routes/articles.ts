import { Router } from "express";

import articlesController from "../controllers/articles.js";
import validate from "../middlewares/validateSchema.js";
import articleSchema from "../schemas/articles.js";

const articlesRouter = Router();

articlesRouter.get("/articles/:id", articlesController.getArticleById);
articlesRouter.get("/articles", validate(articleSchema.getArticles), articlesController.getArticles);
articlesRouter.post("/articles", validate(articleSchema.newArticle), articlesController.newArticle);
articlesRouter.put("/articles/:id", validate(articleSchema.newArticle), articlesController.editArticle);
articlesRouter.delete("/article/:id", articlesController.deleteArticle);

export default articlesRouter;