import express from "express";
import {
  see,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get("/:id", see);
videoRouter.route("/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/delete", deleteVideo);

export default videoRouter;

// //--videos 루트 및 controller
// 1. videos/watch => videos/:id (see videos)
// 2. videos/edit => videos/:id/edit
// 3. videos/delete => videos/:id/delete
// 4. videos/upload
// 5. comment 부분은 일단 보류
