import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  gitLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { loggedAllowMiddleware } from "../middlewares";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter
  .route("/join")
  .all(loggedAllowMiddleware)
  .get(getJoin)
  .post(postJoin);
globalRouter
  .route("/login")
  .all(loggedAllowMiddleware)
  .get(getLogin)
  .post(postLogin);
globalRouter.get("/search", search);
globalRouter.get("/gitlogin", gitLogin);
export default globalRouter;

// global router 라우터루트
// /
// /join
// /login
// /search
