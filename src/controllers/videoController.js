//--videos controller
//search, home, see, edit, upload, deleteVideo,
//comments, comments/delete
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  const pageTitle = "home";
  return res.render("home", { pageTitle, videos });
};
export const search = (req, res) => {};
export const see = (req, res) => {};
export const getEdit = (req, res) => {};
export const postEdit = (req, res) => {};
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "upload" });
};
export const postUpload = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  return res.send("hi");
  // const { title, summary } = req.body;
  // await Video.create({
  //   title,
  //   summary,
  // });
  // return res.redirect("/");
};
export const deleteVideo = (req, res) => {};
