import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  videos: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },

  //작성자, 내용,createAt
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
