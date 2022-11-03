import { articles } from "@prisma/client";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3"
});

async function getAllArticles(stage: number): Promise<articles[]> {

  const step = {
    1: { start: 0, limit: 3000 },
    2: { start: 3000, limit: 6000 },
    3: { start: 6000, limit: 9000 },
    4: { start: 9000, limit: 12000 },
    5: { start: 12000, limit: 15000 }
  };

  const config = `/articles/?_start=${step[stage].start}&&_limit=${step[stage].limit}`
  const res = await api.get(config);
  return res.data;
};

const articlesApi = {
  getAllArticles
};

export default articlesApi;