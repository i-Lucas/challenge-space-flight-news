import pkg from "@prisma/client";
import supertest from "supertest";
import app from "../src/app.js";

import Article from "../src/types/article.js";
import makeArticle from "./factory/articles.js";
import articlesApi from "../src/api/newsapi.js";
import articlesRepository from "../src/repositories/articles.js";

describe("testing API data fetch", () => {

  it("should return a list of articles", async () => {
    jest.mock("../src/api/newsapi.js");
    jest.spyOn(articlesApi, "getAllArticles").mockImplementation(async () => <Article[]>[])
    await articlesApi.getAllArticles(1);
    expect(articlesApi.getAllArticles).toBeCalled();
  });

  it("should register a new article", async () => {
    await articlesRepository.registerArticles(makeArticle());
    const newArticle = await articlesRepository.getArticleById(makeArticle()[0].id);
    expect(newArticle).toMatchObject(makeArticle()[0]);
  });

  it("it should be possible to search for the article created above", async () => {
    const shouldbe = makeArticle();
    const result = await articlesRepository.findAllArticles();
    expect(result).toEqual(expect.arrayContaining(shouldbe));
    expect(result).toHaveLength(2);
  });
});

describe("testing route /articles", () => {

  it("it should be possible to search for articles according to a range", async () => {
    const res = await supertest(app).get("/articles").send({ "skip": 0, "take": 1 });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveLength(1);
  });

  it("should return an error when trying to search for articles without valid parameters", async () => {
    const res = await supertest(app).get("/articles").send({ "skip": "aa", "take": "bb" });
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("invalid parameters");
  });
});

describe("testing route get article by id", () => {

  it("it should be possible to search for an article by id", async () => {
    const res = await supertest(app).get("/articles/" + makeArticle()[0].id).send();
    expect(res.body).toEqual(makeArticle()[0]);
  });

  it("should return a 404 error if the article does not exist", async () => {
    const res = await supertest(app).get("/articles/90").send();
    expect(res.status).toEqual(404);
    expect(res.text).toEqual("Article not found");
  });

  it("should return an error if the id is invalid", async () => {
    const res = await supertest(app).get("/articles/aa").send();
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("invalid parameters");
  });
});

afterAll(async () => {

  const { PrismaClient } = pkg;
  const prisma = new PrismaClient();
  await prisma.$executeRaw`TRUNCATE TABLE articles CASCADE;`;
});