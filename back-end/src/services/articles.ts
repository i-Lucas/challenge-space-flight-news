import { articles } from "@prisma/client";
import articlesRepository from "../repositories/articles.js";
import Article from "../types/article.js";

async function updateDatabase(data: Article[]) {

  const filtered = JSON.parse(JSON.stringify(data))
    .map((article: Article, index: number) => {

      return {
        id: index,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        newsSite: article.newsSite,
        summary: article.summary,
        publishedAt: article.publishedAt,
        updatedAt: article.updatedAt
      }
    })

  await processArticles(filtered);
};

async function processArticles(articles: Article[]) {

  const dbList = await articlesRepository.findAllArticles();

  if (dbList.length !== articles.length) {
    const newArticles = findNewArticles(dbList, articles);
    if (newArticles.length !== 0) await saveArticles(newArticles);
  };

};

function findNewArticles(dbList: articles[], list: articles[]): articles[] {
  return list.filter((article, index) => !dbList[index] && list[index]);
};

async function saveArticles(articles: Article[]) {
  console.log(articles.length + " new articles found");
  await articlesRepository.registerArticles(articles);
};

async function sendArticles(skip: number, take: number) {

  if (!isNum(skip.toString()) || !isNum(take.toString()))
    throw { status: 400, message: "invalid parameters" };
  return await articlesRepository.getArticlesByPagination(skip, take);
};

async function getArticleById(id: number): Promise<Article> {

  if (!isNum(id.toString())) throw { status: 400, message: "invalid parameters" };
  const article = await articlesRepository.getArticleById(id);
  if (!article) throw { status: 404, message: "Article not found" };
  else return article;
};

const isNum = (str: string): Boolean => /^[0-9]+$/.test(str);

const articleServices = {
  processArticles,
  updateDatabase,
  sendArticles,
  getArticleById
};

export default articleServices;