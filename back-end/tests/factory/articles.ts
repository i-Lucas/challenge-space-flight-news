import { Article } from "../../src/types/article";
// faker ?

function makeArticle(): Article[] {

  return [{

    id: 1,
    title: "string",
    url: "string",
    imageUrl: "string",
    newsSite: "string",
    summary: "string",
    publishedAt: "string",
    updatedAt: "string",
  },
  {
    id: 2,
    title: "string",
    url: "string",
    imageUrl: "string",
    newsSite: "string",
    summary: "string",
    publishedAt: "string",
    updatedAt: "string",

  }];
};

function createArticle() {

  return {
    "title": "lucas",
    "url": "https://www.google.com.br",
    "imageUrl": "http://www.google.com.br",
    "newsSite": "http://www.google.com",
    "summary": "ffasdasdasdasdasd"
  };

};

const articleFactory = {
  makeArticle,
  createArticle
};

export default articleFactory;