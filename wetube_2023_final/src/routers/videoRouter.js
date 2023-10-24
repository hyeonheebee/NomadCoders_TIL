import express from "express";
import {
  see,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { unlogProtectMiddleware, uploadMiddleware } from "../middlewares";
const videoRouter = express.Router();
videoRouter.get("/:id([0-9a-f]{24})", see);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(unlogProtectMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter.get(
  "/:id([0-9a-f]{24})/delete",
  unlogProtectMiddleware,
  deleteVideo
);
videoRouter
  .route("/upload")
  .all(unlogProtectMiddleware)
  .get(getUpload)
  .post(uploadMiddleware.single("video"), postUpload);

export default videoRouter;

// //--videos 루트 및 controller
// 1. videos/watch => videos/:id (see videos)
// 2. videos/edit => videos/:id/edit
// 3. videos/delete => videos/:id/delete
// 4. videos/upload
// 5. comment 부분은 일단 보류
