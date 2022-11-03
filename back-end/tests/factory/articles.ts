import { articles } from "@prisma/client";
// faker ?

function makeArticle(): articles[] {

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

function updateArticle() {
  return {
    "title": "novo título atualizado ... hehehe",
    "url": "https://www.atualizei.com",
    "imageUrl": "https://www.euamoprogramar.com",
    "newsSite": "http://github.com",
    "summary": "Quando o Papai Noel morrer, ele não estará mais em trenós."
  }
}

const articleFactory = {
  makeArticle,
  createArticle,
  updateArticle
};

export default articleFactory;