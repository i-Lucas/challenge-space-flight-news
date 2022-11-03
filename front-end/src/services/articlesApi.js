import api from "./api";

async function helloWorld() {

    const response = await api.get("/");
    return response.data;
};

const articlesApi = {
    helloWorld
};

export default articlesApi;