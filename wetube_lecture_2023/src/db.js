import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL);
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB 🌠");
const handleError = (error) => console.log("DB Error ❗", error);
db.on("error", handleError);
db.once("open", handleOpen);
