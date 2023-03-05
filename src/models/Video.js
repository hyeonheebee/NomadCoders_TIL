import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, minLenght: 5 },
  // FileUrl: { type: String, required: true },
  summary: { type: String, required: true, minLenght: 10 },
  // owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  hashtags: [{ type: String, required: true, trim: true }],
  genres: [{ type: String, required: true, trim: true }],
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,

    // {
    //   year: new Date().getFullYear(),
    //   month: new Date().getMonth(),
    //   day: new Date().getDate(),
    //   hour: new Date().getHours(),
    //   minute: new Date().getMinutes(),
    //   second: new Date().getSeconds(),
    // },
    // `${new Date().getFullYear()}. ${new Date().getMonth()}. ${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
  },
  views: { type: String, required: true, default: 0 },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
