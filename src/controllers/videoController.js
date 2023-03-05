//--videos controller
//search, home, see, edit, upload, deleteVideo,
//comments, comments/delete
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdDate: "desc" });
  const pageTitle = "home";
  console.log(videos);
  return res.render("home", { pageTitle, videos });
};
export const search = (req, res) => {};
export const see = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video.genres);
  return res.render("video/see", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render("video/edit", { pageTitle: "Edit Video", video });
};
export const postEdit = (req, res) => {};
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const pageTitle = "Upload Video";
  const { title, summary, genres } = req.body;

  try {
    await Video.create({
      title,
      summary,
      hashtags,
      genres,
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    const errorMessage = error._message;
    return res.render("video/upload", { pageTitle, errorMessage });
  }
};
export const deleteVideo = (req, res) => {};
