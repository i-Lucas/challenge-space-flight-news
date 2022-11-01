import { Router } from "express";
import wellcomeRouter from "./wellcome.js";

const router = Router();

router.use(wellcomeRouter);

export default router;