import app from "./app.js";
import dotenv from "dotenv";
import startUpdate from "./services/fetchdata.js";

dotenv.config();

(async function () {
  await startUpdate("00 00 09 * * *");
})();

const port = process.env.PORT;
app.listen(port, () => console.log("server is running on port " + port));