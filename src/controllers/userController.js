//--users controller
// edit user-profile,see user, delete user, join, login, logout
// globalRouter.route("/join").get(getJoin).post(postJoin)
// globalRouter.route("/login").get(getLogin).post(postLogin)
import User from "../models/User";
import bcrypt from "bcrypt";
import { response } from "express";

export const see = (req, res) => {};
export const getJoin = (req, res) => {
  const pageTitle = "Join";
  return res.render("user/join", { pageTitle });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Join";
  let { password } = req.body;
  const { username, nickname, email, validPassword } = req.body;
  if (password !== validPassword) {
    const errorMessage = "please check the password again";
    return res.status(400).render("user/join", { pageTitle, errorMessage });
  }
  const validation = await User.exists({ $or: [{ username }, { email }] });
  if (validation) {
    const errorMessage = "Please Wirte Down diffrent Username or Email";
    return res.status(400).render("user/join", { pageTitle, errorMessage });
    //이미 있는 유저와 유저네임이 겹칠때
  }
  password = await User.hashingPw(password);
  await User.create({ username, email, nickname, password });
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  //   https://github.com/login/oauth/authorize?client_id=9574da7f78fbbb933186
  // 갈수있도록
  return res.render("user/login");
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  const user = await User.findOne({ username });
  console.log(user.password);
  if (!user) {
    const errorMessage = "That account doens't exist";
    return res.status(404).render("user/login", { errorMessage });
  }
  const validation = await bcrypt.compare(password, user.password);
  console.log(validation);
  if (!validation) {
    const errorMessage = "Password doesn't match with Username";
    return res.status(404).render("user/login", { errorMessage });
  }
  req.session.user = user;
  req.session.loggedIn = true;

  return res.redirect("/");
};
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const edit = (req, res) => {};
export const deleteUser = (req, res) => {};
export const gitLogin = (req, res) => {
  const baseURL = "https://github.com/login/oauth/authorize";
  const client_id = `${process.env.CLIENT_ID}`;
  const scope1 = "read:user";
  const scope2 = "user:email";
  const finalURL = `${baseURL}?client_id=${client_id}&scope=${scope1}%20${scope2}`;
  console.log(finalURL);
  // https://github.com/login/oauth/authorize?client_id=9574da7f78fbbb933186&scope=read:user%20user:email
  //만약 github login 버튼을 누르면 바로 redirect로
  //   https://github.com/login/oauth/authorize?client_id=9574da7f78fbbb933186
  // 갈수있도록
  return res.redirect(finalURL);
};
export const gitfinish = async (req, res) => {
  const baseURL = "https://github.com/login/oauth";
  const { code } = req.query;
  const client_id = `${process.env.CLIENT_ID}`;
  const client_secret = `${process.env.CLIENT_SECRET}`;
  const finalURL = `${baseURL}/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

  const authData = await (
    await fetch(finalURL, {
      method: "post",
      headers: { Accept: "application/json" },
    })
  ).json();
  const { access_token } = authData;
  const apiBaseURL = "https://api.github.com";
  const authFinalURL = `${apiBaseURL}/user`;
  const authUser = await (
    await fetch(authFinalURL, {
      headers: { Authorization: `bearer ${access_token}` },
    })
  ).json();
  const authEmailArray = await (
    await fetch(`${authFinalURL}/emails`, {
      primary: true,
      verified: true,
      headers: { Authorization: `bearer ${access_token}` },
    })
  ).json();
  const authEmail = authEmailArray.filter(
    (x) => x.primary === true && x.verified === true
  );
  console.log(authUser);
  console.log(authEmail);
  const { login, name, avatar_url } = authUser;
  const { email } = authEmail;
  const user = await User.create({
    username: login,
    avatarUrl: avatar_url,
    password: "",
    nickname: name,
    email,
    socialLogin: true,
  });
  req.session.user = user;
  req.session.loggedIn = true;
  return res.redirect("/");
};
