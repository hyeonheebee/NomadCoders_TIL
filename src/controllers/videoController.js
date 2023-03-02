//--videos controller
//search, home, see, edit, upload, deleteVideo,
//comments, comments/delete
export const home = (req, res) => {
  const pageTitle = "home";
  return res.render("home", { pageTitle });
};
export const search = (req, res) => {};
export const see = (req, res) => {};
export const getEdit = (req, res) => {};
export const postEdit = (req, res) => {};
export const getUpload = (req, res) => {};
export const postUpload = (req, res) => {};
export const deleteVideo = (req, res) => {};
