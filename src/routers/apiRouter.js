import express from "express";
import {
  postView,
  postComment,
  deleteComment,
} from "../controllers/videoController";
const apiRouter = express.Router();
apiRouter.post("/videos/:id([0-9a-f]{24})/view", postView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", postComment);
apiRouter.all("/comments/:id([0-9a-f]{24})", deleteComment);

export default apiRouter;
