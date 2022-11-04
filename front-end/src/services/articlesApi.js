import api from "./api";

async function helloWorld() {

  const response = await api.get("/");
  return response.data;
};

async function getArticles(skip, take) {

  const response = await api.get("/articles", {
    headers: {
      skip,
      take
    }
  });

  return response.data;
};

const articlesApi = {
  helloWorld,
  getArticles
};

export default articlesApi;