import { Router } from "express";

import searchController from "../controllers/search.js";

const searchRouter = Router();

searchRouter.get("/search", searchController.searchArticle);
searchRouter.get("/search/orderby", searchController.searchArticleOrderBy);

export default searchRouter;