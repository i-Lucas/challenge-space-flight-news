import { articles } from "@prisma/client";
import prisma from "../config/db.js";

async function findAllArticles(): Promise<articles[]> {
  return await prisma.articles.findMany({
    orderBy: {
      id: "desc"
    }
  });
};

async function registerArticles(data: articles[]) {
  await prisma.articles.createMany({ data });
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

const articlesRepository = {
  findAllArticles,
  registerArticles,
  getArticleById,
  getArticlesByPagination
};

export default articlesRepository;