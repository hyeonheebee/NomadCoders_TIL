//--videos controller
//search, home, see, edit, upload, deleteVideo,
//comments, comments/delete
import Video from "../models/Video";
import User from "../models/User";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  const videos = await Video.find({})
    .sort({ createdDate: "desc" })
    .populate("owner");
  const pageTitle = "home";
  return res.render("home", { pageTitle, videos });
};
export const search = async (req, res) => {
  const pageTitle = "Search Video";
  const { title } = req.query;
  if (!title) {
    const errorMessage = "please write your keyword";
    return res.status(400).render("video/search", { pageTitle, errorMessage });
  }
  const videos = await Video.find({
    title: {
      $regex: new RegExp(title, "i"),
    },
  }).populate("owner");
  if (!videos) {
    req.flash("error", "No Video ⏳");
    return res.status(404).redirect("/");
  }
  return res.render("video/search", { pageTitle, videos });
};

// if (hashtags) {
//   const hashtag = hashtags.startsWith("#") ? hashtags : "#" + hashtags;
//   console.log(hashtag);
//   const videos = await Video.find({
//     hashtags,
//   }).in(hashtag, [hashtags]);
//   if (!videos) {
//     return res.status(404).redirect("/");
//   }
//   return res.render("video/search", { pageTitle, videos });
// }
// if (genres) {
//   const videos = await Video.find({
//     genres: {
//       $gex: new RegExp("$genres", "i"),
//     },
//   });
//   if (!videos) {
//     return res.status(404).redirect("/");
//   }
//   return res.render("video/search", { pageTitle, videos });
// }

//   const errorMessage = "please write your keyword";
//   return res.status(400).render("video/search", { pageTitle, errorMessage });
// }
// if (hashtags) {
//   const hashtag = Video.hashFormatting(hashtags);
//   console.log(hashtag);
//   // const videos = await Video.find({ hashtags });
//   // return res.render("video/search", { pageTitle, videos });
// }
// if (genres) {
//   const genreArray = Video.genreFormatting(genres);
//   const genre = genreArray.forEach();
//   console.log(genre);
//   const videos = await Video.find({});
//   videos.genres.
//   console.log(video);
//   // const videos = await Video.find({ genres });
//   // return res.render("video/search", { pageTitle, videos });
// }

export const see = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner").populate("comments");
  // const user = await User.findById(id).populate("video");
  console.log(video);
  if (!video) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  return res.render("video/see", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { _id } = req.session.user;
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video);
  if (!video) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "Authorized User Only Allows");
    return res.status(403).redirect("/");
  }

  return res.render("video/edit", { pageTitle: "Edit Video", video });
};
export const postEdit = async (req, res) => {
  const { _id } = req.session.user;
  const { title, summary, genres, hashtags } = req.body;
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "Authorized User Only Allows");
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    title,
    summary,
    hashtags: Video.hashFormatting(hashtags),
    genres: Video.genreFormatting(genres),
  });
  req.flash("success", "Your Video's Updated✨");
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const pageTitle = "Upload Video";
  const { title, summary, genres, hashtags } = req.body;
  const { path } = req.file;
  const { _id } = req.session.user;
  try {
    const uploadedVideo = await Video.create({
      title,
      summary,
      hashtags: Video.hashFormatting(hashtags),
      genres: Video.genreFormatting(genres),
      fileUrl: path,
      owner: _id,
    });
    const user = await User.findById(_id);
    user.videos.push(uploadedVideo);
    user.save();
    req.flash("success", "Your Video's Uploaded! 🌠");
    //유저에게도 해당비디오를 넣어줌
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    const errorMessage = error._message;
    return res.render("video/upload", { pageTitle, errorMessage });
  }
};
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.session.user;
  const video = await Video.findById(id).populate({
    path: "owner",
    populate: {
      path: "videos",
      model: "Video",
    },
  });

  if (String(video.owner.id) !== String(_id)) {
    req.flash("error", "Authorized User Only Allows");
    return res.status(403).redirect("/");
  }
  await Video.findOneAndDelete({ _id: id });
  // video.owner.videos.splice(video.owner.videos.indexOf(id), 0);
  // video.owner.save();
  return res.redirect("/");
};
export const postView = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  video.views = video.views + 1;
  await video.save();
  return res.sendStatus(200);
};

export const postComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const { user } = req.session;
  const userDb = await User.findById(user._id);
  console.log(userDb);
  console.log(user);
  const video = await Video.findById(id);
  console.log(video);
  if (!video) {
    res.flash("error", "No video ⏳");
    return res.sendStatus(404);
  }
  const comment = await Comment.create({
    text,
    owner: userDb._id,
    videos: id,
  });
  userDb.comments.push(comment);
  userDb.save();
  video.comments.push(comment);
  video.save();
  // req.flash("success", "Your comment is uploaded! 📨 ");
  return res.status(201).json({ id: comment._id });
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  const { user } = req.session;
  const comment = await Comment.findById(id)
    .populate("owner")
    .populate("videos");
  console.log(comment);
  if (String(user._id) !== String(comment.owner._id)) {
    req.flash("error", "Denied ❌");
    return res.sendStatus(403);
    // 세션유저와 작성자 다를때 삭제불가능
    //owner > comments [] : id
    //videos > comments [] : id
  }

  // video.owner.videos.splice(video.owner.videos.indexOf(id), 0);
  // video.owner.save();

  comment.owner.comments.splice(comment.owner.comments.indexOf(id), 1);
  comment.owner.save();
  comment.videos.comments.splice(comment.videos.comments.indexOf(id), 1);
  comment.videos.save();
  // const video = await Video.findById();
  await Comment.findOneAndDelete({ _id: id });
  // userArray.save();
  // videoArray.save();
  // 삭제가능
  return res.sendStatus(200);
};
