import { articles, Prisma } from "@prisma/client";
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

async function getArticlesByPagination(skip: number, take: number): Promise<articles[]> {
  return await prisma.articles.findMany({
    skip,
    take,
    orderBy: {
      id: "asc"
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

// fixme ?
async function searchArticleTitleByContent(content: string): Promise<articles[]> {

  return await prisma.articles.findMany({
    where: {
      title: {
        contains: content
      },/*
      summary: {
        contains: content // it doesn't work that way
      },*/
    }
  })
};
// fixme ?
async function searchArticleSummaryByContent(content: string): Promise<articles[]> {

  return await prisma.articles.findMany({
    where: {
      summary: {
        contains: content
      }
    }
  })
};

async function sortSearch(skip: number, take: number, order: Prisma.SortOrder): Promise<articles[]> {

  return await prisma.articles.findMany({
    skip,
    take,
    orderBy: {
      publishedAt: order
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
  deleteArticle,
  searchArticleTitleByContent,
  searchArticleSummaryByContent,
  sortSearch
};

export default articlesRepository;