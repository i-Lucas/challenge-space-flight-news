import { Router } from "express";
import articles from "../controllers/articles.js";

const articlesRouter = Router();

articlesRouter.get("/articles", articles);

export default articlesRouter;