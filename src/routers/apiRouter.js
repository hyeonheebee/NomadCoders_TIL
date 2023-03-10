import express from "express";
import { postView } from "../controllers/videoController";
const apiRouter = express.Router();
apiRouter.post("/videos/:id([0-9a-f]{24})/view", postView);
export default apiRouter;
