import { Router } from "express";
import articlesController from "../controllers/articles.js";

const articlesRouter = Router();

articlesRouter.get("/articles", articlesController.getArticles);
articlesRouter.get("/articles/:id", articlesController.getArticleById);

export default articlesRouter;