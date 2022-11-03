import { Router } from "express";
import wellcomeRouter from "./wellcome.js";
import articlesRouter from "./articles.js";

const router = Router();

router.use(wellcomeRouter);
router.use(articlesRouter);

export default router;