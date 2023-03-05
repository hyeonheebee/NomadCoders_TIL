import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: String,
  nickname: { type: String, required: true, uniqud: true },
  socialLogin: { type: Boolean, default: false },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  avatarUrl: String,
  blog: String,
});

const User = mongoose.model("User", userSchema);

export default User;
