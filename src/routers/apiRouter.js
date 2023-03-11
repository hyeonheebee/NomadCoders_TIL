import express from "express";
import { postView, postComment } from "../controllers/videoController";
const apiRouter = express.Router();
apiRouter.post("/videos/:id([0-9a-f]{24})/view", postView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", postComment);
export default apiRouter;
