import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  email: String,
  nickname: { type: String, required: true, uniqud: true },
  socialLogin: { type: Boolean, default: false },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  avatarUrl: { type: String, default: "" },
  blog: String,
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});
// userSchema.static("hashingPw", async function (password) {
//   password = await bcrypt.hash(password, 5);
//   return password;
// });

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 5);
// });
const User = mongoose.model("User", userSchema);

export default User;
