import cors from "cors";
import express from "express";
import "express-async-errors";

import appRouter from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(appRouter);
app.use(errorHandler);

export default app;