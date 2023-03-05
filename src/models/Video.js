import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // FileUrl: { type: String, required: true },
  summary: { type: String, required: true },
  // owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  // genres: [{ type: String, required: true, trim: true }],
  // createdDate: {
  //   type: String,
  //   required: true,
  //   default: `${new Date().getFullYear()}. ${new Date().getMonth()}. ${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  // },
  // views: { type: String, required: true, default: 0 },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
