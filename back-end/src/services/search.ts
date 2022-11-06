import { articles } from "@prisma/client";
import articlesRepository from "../repositories/articles.js";
import { isNum } from "./articles.js";

async function searchArticlesEngine(content: string): Promise<articles[]> {

    if (content.length === 0) return [];
    if (content.search(/[^a-zA-Z]+/) !== -1) return [];

    const titles = await articlesRepository.searchArticleTitleByContent(content);
    const summaries = await articlesRepository.searchArticleSummaryByContent(content);
    return [...titles, ...summaries];
};

async function sortArticles(skip: string, take: string, order: string): Promise<articles[]> {

    if (!isNum(skip) || !isNum(take))
    throw { status: 400, message: "invalid parameters" };

    if (order === "news") return await articlesRepository.sortSearch(parseInt(skip), parseInt(take), "asc");
    else return await articlesRepository.sortSearch(parseInt(skip), parseInt(take), "desc");
};

const searchService = {
    searchArticlesEngine,
    sortArticles
};

export default searchService;