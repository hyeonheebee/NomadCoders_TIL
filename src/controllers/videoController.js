//--videos controller
//search, home, see, edit, upload, deleteVideo,
//comments, comments/delete
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdDate: "desc" });
  const pageTitle = "home";

  return res.render("home", { pageTitle, videos });
};
export const search = (req, res) => {
  console.log(req.query);
  return res.render("video/search");
};
export const see = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  console.log(video);
  return res.render("video/see", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  return res.render("video/edit", { pageTitle: "Edit Video", video });
};
export const postEdit = async (req, res) => {
  const { title, summary, genres, hashtags } = req.body;
  const { id } = req.params;
  const validation = await Video.exists({ _id: id });
  if (!validation) {
    const errorMessage = "Sorry, we can't find any Video";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    summary,
    hashtags: Video.hashFormatting(hashtags),
    genres: Video.genreFormatting(genres),
  });

  return res.redirect("/");
};
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const pageTitle = "Upload Video";
  const { title, summary, genres, hashtags } = req.body;

  try {
    await Video.create({
      title,
      summary,
      hashtags: Video.hashFormatting(hashtags),
      genres: Video.genreFormatting(genres),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    const errorMessage = error._message;
    return res.render("video/upload", { pageTitle, errorMessage });
  }
};
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findOneAndDelete({ _id: id });
  return res.redirect("/");
};
