//--users controller
// edit user-profile,see user, delete user, join, login, logout
// globalRouter.route("/join").get(getJoin).post(postJoin)
// globalRouter.route("/login").get(getLogin).post(postLogin)
import User from "../models/User";
import bcrypt from "bcrypt";

export const see = (req, res) => {};
export const getJoin = (req, res) => {
  const pageTitle = "Join";
  return res.render("user/join", { pageTitle });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Join";
  let { password } = req.body;
  const { username, nickname, email, validPassword } = req.body;
  console.log(req.body);
  if (password !== validPassword) {
    const errorMessage = "please check the password again";
    return res.status(404).render("user/join", { pageTitle, errorMessage });
    //비밀번호 일치안할때
  }
  const validation = await User.exists({ username });
  if (validation) {
    const errorMessage = "please wirte down diffrent username";
    return res.status(404).render("user/join", { pageTitle, errorMessage });
    //이미 있는 유저와 유저네임이 겹칠때
  }
  console.log(password);
  password = await User.hashingPw(password);
  await User.create({ username, email, nickname, password });
  console.log(password);
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  return res.render("user/login");
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).render("404");
  }
  bcrypt.compare(password, user.password, function (err, validation) {
    return validation;
  });
  if (!validation) {
    const errorMessage = "Password doesn't match with Username";
    return res.status(404).render("user/login", { errorMessage });
  }

  //비밀번호 비교 후 맞으면
  return res.redirect("/");
};
export const logout = (req, res) => {};
export const edit = (req, res) => {};
export const deleteUser = (req, res) => {};
