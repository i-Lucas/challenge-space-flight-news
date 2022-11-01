import { Router } from "express";
import wellcomeController from "../controllers/welcome.js";

const wellcomeRouter = Router();

wellcomeRouter.get("/", wellcomeController);

export default wellcomeRouter;