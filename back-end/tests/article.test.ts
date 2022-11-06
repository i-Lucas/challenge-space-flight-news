import { jest } from '@jest/globals';
import { articles } from '@prisma/client';
import pkg from "@prisma/client";
import supertest from "supertest";
import app from "../src/app.js";

import articleFactory from "./factory/articles.js";
import articlesApi from "../src/api/newsapi.js";
import articlesRepository from "../src/repositories/articles.js";

describe("testing API data fetch", () => {

  it("should return a list of articles", async () => {
    jest.mock("../src/api/newsapi.js");
    jest.spyOn(articlesApi, "getAllArticles").mockImplementation(async () => <articles[]>[])
    await articlesApi.getAllArticles(1);
    expect(articlesApi.getAllArticles).toBeCalled();
  });

  it("should register a new article", async () => {
    await articlesRepository.registerArticles(articleFactory.makeArticle());
    const newArticle = await articlesRepository.getArticleById(articleFactory.makeArticle()[0].id);
    expect(newArticle).toMatchObject(articleFactory.makeArticle()[0]);
  });

  it("it should be possible to search for the article created above", async () => {
    const shouldbe = articleFactory.makeArticle();
    const result = await articlesRepository.findAllArticles();
    expect(result).toEqual(expect.arrayContaining(shouldbe));
    expect(result).toHaveLength(2);
  });
});

describe("testing route /articles", () => {

  it("it should be possible to search for articles according to a range", async () => {
    const res = await supertest(app).get("/articles").set({ skip: "0", take: "1" })
    expect(res.status).toEqual(200);
    expect(res.body).toHaveLength(1);
  });

  it("should return an error when trying to search for articles without valid parameters", async () => {
    const res = await supertest(app).get("/articles").set({ "skip": "aa", "take": "bb" });
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("invalid parameters");
  });
});

describe("testing route get article by id", () => {

  it("it should be possible to search for an article by id", async () => {
    const res = await supertest(app).get("/articles/" + articleFactory.makeArticle()[0].id).send();
    expect(res.body).toEqual(articleFactory.makeArticle()[0]);
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

describe("testing route to create a new article", () => {

  it("it should be possible to create a new article", async () => {
    const res = await supertest(app).post("/articles").send(articleFactory.createArticle());
    expect(res.status).toEqual(201);
  });

  it("it should be possible to search for the created article", async () => {
    const res = await supertest(app).get("/articles/").set({ skip: "0", take: "3" });
    const orderByIdAsc = res.body[2];

    expect(orderByIdAsc.title).toEqual(articleFactory.createArticle().title);
    expect(orderByIdAsc.imageUrl).toContain(articleFactory.createArticle().imageUrl);
  });

  it("should generate an error if the parameters are invalid", async () => {

    const invalidArticle = articleFactory.createArticle();
    delete invalidArticle.title;

    const res = await supertest(app).post("/articles").send(invalidArticle);
    expect(res.text).toEqual("\"title\" is required");
    expect(res.status).toEqual(422);
  });

  it("should generate an error if the parameters are invalid", async () => {

    const invalidArticle = articleFactory.createArticle();
    delete invalidArticle.imageUrl;

    const res = await supertest(app).post("/articles").send(invalidArticle);
    expect(res.text).toEqual("\"imageUrl\" is required");
    expect(res.status).toEqual(422);
  });

});

describe("testing route to update articles put/articles", () => {

  it("it should be possible to update an article", async () => {
    const res = await supertest(app).put("/articles/1").send(articleFactory.updateArticle());
    expect(res.status).toEqual(200);

    const verify = await supertest(app).get("/articles/1").send();
    expect(verify.body.summary).toEqual(articleFactory.updateArticle().summary);
  });

  it("it should give an error when trying to update an article that doesn't exist", async () => {
    const res = await supertest(app).put("/articles/99").send(articleFactory.updateArticle());
    expect(res.status).toEqual(404);
    expect(res.text).toEqual("Article not found");
  });

  it("should give an error when trying to update an article with invalid properties", async () => {

    const invalid = articleFactory.updateArticle();
    delete invalid.newsSite;

    const res = await supertest(app).put("/articles/1").send(invalid);
    expect(res.text).toEqual("\"newsSite\" is required");
    expect(res.status).toEqual(422);
  });
});

describe("testing the delete route", () => {

  it("it should be possible to delete an article by id", async () => {
    const res = await supertest(app).delete("/article/1").send();
    expect(res.status).toEqual(200);
  });

  it("should return an error when trying to delete an article that does not exist", async () => {
    const res = await supertest(app).delete("/article/99").send();
    expect(res.status).toEqual(404);
    expect(res.text).toEqual("Article not found");
  });

  it("should return an error when trying to delete an article with invalid parameters", async () => {
    const res = await supertest(app).delete("/article/aa").send();
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("invalid parameters");
  })
});

afterAll(async () => {

  const { PrismaClient } = pkg;
  const prisma = new PrismaClient();
  await prisma.$executeRaw`TRUNCATE TABLE articles CASCADE;`;
});