import { articles } from "@prisma/client";
import articlesRepository from "../repositories/articles.js";

async function updateDatabase(data: articles[]) {

  const filtered = JSON.parse(JSON.stringify(data))
    .map((article: articles, index: number) => {

      return {
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

async function processArticles(articles: articles[]) {

  const dbList = await articlesRepository.findAllArticles();

  if (dbList.length !== articles.length) {
    const newArticles = findNewArticles(dbList, articles);
    if (newArticles.length !== 0) await saveArticles(newArticles);
  };

};

function findNewArticles(dbList: articles[], list: articles[]): articles[] {
  return list.filter((article, index) => !dbList[index] && list[index]);
};

async function saveArticles(articles: articles[]) {
  console.log(articles.length + " new articles found");
  await articlesRepository.registerArticles(articles);
};

async function sendArticles(skip: number, take: number) {

  if (typeof skip === "string" || typeof take === "string")
    throw { status: 400, message: "properties must be of type number" };

  if (!isNum(skip.toString()) || !isNum(take.toString()))
    throw { status: 400, message: "invalid parameters" };

  return await articlesRepository.getArticlesByPagination(skip, take);
};

async function getArticleById(id: number): Promise<articles> {

  if (!isNum(id.toString())) throw { status: 400, message: "invalid parameters" };
  const article = await articlesRepository.getArticleById(id);
  if (!article) throw { status: 404, message: "Article not found" };
  else return article;
};

async function createNewArticle(article: Omit<articles, "id">) {
  await articlesRepository.registerArticle(article);
};

async function updateArticle(data: articles) {

  const article = await articlesRepository.getArticleById(data.id);
  if (!article) throw { status: 404, message: "Article not found" };

  await articlesRepository.updateArticle(data);
};

const isNum = (str: string): Boolean => /^[0-9]+$/.test(str);

const articleServices = {
  processArticles,
  updateDatabase,
  sendArticles,
  getArticleById,
  createNewArticle,
  updateArticle
};

export default articleServices;