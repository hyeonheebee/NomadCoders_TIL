// require("dotenv").config();
import "dotenv/config";
import "./db";
//import 어쩌구 는 어쩌구를 이 파일안에서 쓸때 써주면 된다
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 9030;
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🌠 `);
app.listen(PORT, handleListening);
// http는 서버가 우리와 소통하는, 서버끼리 소통하는 방법이다
// console.log(process.cwd());
