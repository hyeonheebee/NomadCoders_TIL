import express from "express";
import {
  see,
  getEdit,
  postEdit,
  deleteUser,
  logout,
  getChangePW,
  postChangePW,
  gitfinish,
} from "../controllers/userController";
import { unlogProtectMiddleware, avatarMiddleware } from "../middlewares";
const userRouter = express.Router();

userRouter.get("/:id([0-9a-f]{24})", unlogProtectMiddleware, see);
userRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(unlogProtectMiddleware)
  .get(getEdit)
  .post(avatarMiddleware.single("avatarUrl"), postEdit);
userRouter.get("/delete", unlogProtectMiddleware, deleteUser);
userRouter.get("/logout", unlogProtectMiddleware, logout);
userRouter
  .route("/changePW")
  .all(unlogProtectMiddleware)
  .get(getChangePW)
  .post(postChangePW);
userRouter.get("/github/finish", gitfinish);

export default userRouter;

// 6. users/:id  (see users)
// 7. users/edit-profile
// 8. users/delete
// 9. users/logout
