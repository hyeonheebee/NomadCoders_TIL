require("dotenv").config();
import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL);
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1

const db = mongoose.connection;
const handleOpenDB = () => {
  console.log("🌠DB connection succeed🌠");
};
db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpenDB);
