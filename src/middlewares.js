import multer from "multer";
export const localMiddleware = (req, res, next) => {
  // Make `user` and `authenticated` available in templates
  res.locals.apptitle = "HEESTORY";
  res.locals.loggeduser = req.session.user;
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  next();
};
//who not logged in don't reach specific url
export const unlogProtectMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login");
  } else {
    return next();
  }
};
//who loggeduser can't reach specific url

export const loggedAllowMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect(`/users/${req.session.user._id}`);
  }
};
export const uploadMiddleware = multer({ dest: "uploads" });
export const avatarMiddleware = multer({ dest: "avatars" });
