import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import { rootRouter } from "./routers/rootRouter";
import { userRouter } from "./routers/userRouter";
import { videoRouter } from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const morganMiddleware = morgan("dev");
app.use(morganMiddleware);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use(localsMiddleware);

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// const Home = (req, res) => {
//   return res.send(`<h1>You are in PORT ${PORT} right now, welcome</h1>`);
// };
// const handleLogin = (req, res) => {
//   return res.send({ message: "Login here" });
// };
// app.get("/", Home);
// app.get("/login", handleLogin);
// // 이름은 상관없지만 두가지 인자가 필요하고 request와 response이다
export default app;
