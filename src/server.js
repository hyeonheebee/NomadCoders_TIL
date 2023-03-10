require("dotenv").config();
import express from "express";
import morgan from "morgan";
import session from "express-session";
import { localMiddleware } from "./middlewares";
import MongoStore from "connect-mongo";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import flash from "express-flash";
const app = express();

const loggerMiddleware = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.DB_URL);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);
app.use(localMiddleware);
app.use(flash());

app.use("/uploads", express.static("uploads"));
app.use("/avatars", express.static("avatars"));
app.use("/static", express.static("assets"));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.use("/api", apiRouter);
export default app;
