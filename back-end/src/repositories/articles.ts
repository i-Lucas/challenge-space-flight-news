import { articles } from "@prisma/client";
import prisma from "../config/db.js";

async function findAllArticles(): Promise<articles[]> {
  return await prisma.articles.findMany({
    orderBy: {
      id: "desc"
    }
  });
};

async function registerArticles(data: Omit<articles[], "id">) {
  await prisma.articles.createMany({ data });
};

async function registerArticle(data: Omit<articles, "id">) {
  await prisma.articles.create({ data });
};

async function getArticleById(id: number): Promise<articles> {
  return await prisma.articles.findUnique({
    where: {
      id
    },
  })
};

async function getArticlesByPagination(skip: number, take: number) {
  return await prisma.articles.findMany({
    skip,
    take,
    orderBy: {
      id: "desc"
    }
  })
};

async function updateArticle(data: articles) {

  await prisma.articles.update({
    where: {
      id: data.id
    },
    data: {
      ...data
    }
  })
};

async function deleteArticle(id: number) {

  await prisma.articles.delete({
    where: {
      id
    }
  })
};

const articlesRepository = {
  findAllArticles,
  registerArticles,
  registerArticle,
  getArticleById,
  getArticlesByPagination,
  updateArticle,
  deleteArticle
};

export default articlesRepository;