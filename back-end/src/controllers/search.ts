import { Request, Response } from "express";
import searchService from "../services/search.js"

async function searchArticle(req: Request, res: Response) {

    const content = req.query.content;
    if (!content) throw { status: 400, message: "No content provided" };
    const result = await searchService.searchArticlesEngine(content.toString());
    res.send(result);
};

async function searchArticleOrderBy(req: Request, res: Response) {

    const order = req.query.order;
    const skip = req.headers.skip;
    const take = req.headers.take;
    if (!order) throw { status: 400, message: "No order provided" };

    if (!skip || !take) throw { status: 400, message: "invalid parameters" };
    const result = await searchService.sortArticles(skip.toString(), take.toString(), order.toString());
    res.send(result);
};

const searchController = {
    searchArticle,
    searchArticleOrderBy
};

export default searchController;