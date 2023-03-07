import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  gitLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/search", search);
globalRouter.get("/gitlogin", gitLogin);
export default globalRouter;

// global router 라우터루트
// /
// /join
// /login
// /search
