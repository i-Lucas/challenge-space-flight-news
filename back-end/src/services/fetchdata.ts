import { CronJob } from "cron";

import api from "../api/newsapi.js";
import articleServices from "./articles.js";

export default async function startUpdate(start: string) {

  new CronJob(start, async function () {

    let STAGE = 1;
    while (STAGE <= 5) {

      // todo: efficient way to pull so much data
      console.log(`fetching data, wait a moment ... STEP ${STAGE}/5`);
      const data = await api.getAllArticles(STAGE);
      await articleServices.updateDatabase(data);
      STAGE++;

    };

  }, null, true, 'America/Sao_Paulo').start();
};