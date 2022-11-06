import { Router } from "express";

import wellcomeRouter from "./wellcome.js";
import articlesRouter from "./articles.js";
import searchRouter from "./search.js";

const router = Router();

router.use(wellcomeRouter);
router.use(articlesRouter);
router.use(searchRouter);

export default router;