export const localMiddleware = (req, res, next) => {
  // Make `user` and `authenticated` available in templates
  res.locals.loggeduser = req.session.user;
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  next();
};
