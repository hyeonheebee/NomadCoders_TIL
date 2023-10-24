import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "eu-north-1",
  credentials: {
    apiVersion: "2023-03-12",
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const useHeroku = process.env.NODE_ENV === "production";

const s3ImageUploader = multerS3({
  s3: s3,
  bucket: "honeeypot",
  acl: "public-read",
  key: function (request, file, ab_callback) {
    const newFileName = Date.now() + "-" + file.originalname;
    const fullPath = "images/" + newFileName;
    ab_callback(null, fullPath);
  },
});

const s3VideoUploader = multerS3({
  s3: s3,
  bucket: "honeeypot",
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: function (request, file, ab_callback) {
    const newFileName = Date.now() + "-" + file.originalname;
    const fullPath = "videos/" + newFileName;
    ab_callback(null, fullPath);
  },
});

export const localMiddleware = (req, res, next) => {
  // Make `user` and `authenticated` available in templates
  res.locals.apptitle = "HONEY POT";
  res.locals.loggeduser = req.session.user || {};
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.useHeroku = useHeroku;
  next();
};
//who not logged in don't reach specific url
export const unlogProtectMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    req.flash("error", "LogIn Please🔑");
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
    req.flash("error", "You can use your Account 😉");
    return res.redirect(`/users/${req.session.user._id}`);
  }
};
export const avatarMiddleware = multer({
  dest: "avatars",
  storage: useHeroku ? s3ImageUploader : undefined,
});
export const uploadMiddleware = multer({
  dest: "uploads",
  storage: useHeroku ? s3VideoUploader : undefined,
});
