//--users controller
// edit user-profile,see user, delete user, join, login, logout
// globalRouter.route("/join").get(getJoin).post(postJoin)
// globalRouter.route("/login").get(getLogin).post(postLogin)
import User from "../models/User";
import bcrypt from "bcrypt";
import Video from "../models/Video";

export const see = async (req, res) => {
  // return res.render("user/see");
  const { id } = req.params;
  const user = await User.findById(id)
    .populate({
      path: "videos",
      populate: {
        path: "owner",
        model: "User",
      },
    })
    .populate({
      path: "comments",
      populate: {
        path: "owner",
        model: "User",
      },
    });
  console.log(user);
  if (!user) {
    const errorMessage = "Sorry, we can't find your profile";
    return res
      .status(404)
      .render("404", { pageTitle: "404 ERROR", errorMessage });
  }
  return res.render(`user/see`, { pageTitle: user.name, user });
};
export const getEdit = async (req, res) => {
  return res.render("user/edit");
};
export const postEdit = async (req, res) => {
  const { _id } = req.session.user;
  let { file } = req;
  const { nickname } = req.body;
  console.log("this is", file);
  // path = req.session.user.avatarUrl;
  const user = await User.findByIdAndUpdate(
    _id,
    {
      nickname,
      avatarUrl: file ? `/${file.path}` : req.session.user.avatarUrl,
    },
    { new: true }
  );
  req.session.user = user;
  req.flash("success", "Your Profile's Updated✨");
  return res.redirect(`/users/${_id}`);
};

export const getJoin = (req, res) => {
  const pageTitle = "Join";
  return res.render("user/join", { pageTitle });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Join";
  // let { password } = req.body;
  const { username, nickname, email, validPassword, password } = req.body;
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
  // password = await User.hashingPw(password);
  await User.create({ username, email, nickname, password });
  req.flash("info", "Welcome💗");
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  //   https://github.com/login/oauth/authorize?client_id=9574da7f78fbbb933186
  // 갈수있도록
  return res.render("user/login");
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, socialLogin: false });
  // if (user.socialOnly === true) {
  //   console.log("you have to login with github");
  // }
  if (!user) {
    const errorMessage = "That account doens't exist";
    return res.status(404).render("user/login", { errorMessage });
  }
  const validation = await bcrypt.compare(password, user.password);
  if (!validation) {
    const errorMessage = "Password doesn't match with Username";
    return res.status(404).render("user/login", { errorMessage });
  }
  req.session.user = user;
  req.session.loggedIn = true;
  req.flash("info", "Good to see you again!💗");
  return res.redirect("/");
};
export const logout = (req, res) => {
  req.flash("info", "See you next time 🖐");
  req.session.destroy();
  return res.redirect("/");
};

export const gitLogin = (req, res) => {
  const baseURL = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.CLIENT_ID,
    scope: "read:user user:email",
    allow_signup: false,
  };
  const gitLoginParams = new URLSearchParams(params).toString();
  const finalURL = `${baseURL}?${gitLoginParams}`;
  // const client_id = `${process.env.CLIENT_ID}`;
  // const scope1 = "read:user";
  // const scope2 = "user:email";
  // const finalURL = `${baseURL}?client_id=${client_id}&allow_signup=false&scope=${scope1}%20${scope2}`;
  console.log("bye");
  return res.redirect(finalURL);
};
export const gitfinish = async (req, res) => {
  const baseURL = "https://github.com/login/oauth/access_token";
  const { code } = req.query;
  const client_id = `${process.env.CLIENT_ID}`;
  const client_secret = `${process.env.CLIENT_SECRET}`;
  const finalURL = `${baseURL}?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;
  const authData = await (
    await fetch(finalURL, {
      method: "post",
      headers: { Accept: "application/json" },
    })
  ).json();
  if ("access_token" in authData) {
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
        headers: { Authorization: `bearer ${access_token}` },
      })
    ).json();
    const authEmail = authEmailArray.find(
      (x) => x.primary === true && x.verified === true
    );
    if (!authEmail) {
      return res.redirect("/login");
    }
    const { login, name, avatar_url } = authUser;
    const { email } = authEmail;
    let existUser = await User.findOne({ email: authEmail.email });
    if (!existUser) {
      existUser = await User.create({
        username: login,
        avatarUrl: avatar_url,
        password: "",
        nickname: name ? name : "BLANK NAME",
        email,
        socialLogin: true,
      });
    }
    req.session.user = existUser;
    req.session.loggedIn = true;
    req.flash("info", "Welcome💗");
    return res.redirect("/");
  } else {
    return res.status(400).redirect("/login");
  }
};

export const getChangePW = (req, res) => {
  return res.render("user/changePW");
};
export const postChangePW = async (req, res) => {
  const { _id } = req.session.user;
  let { newPassword } = req.body;
  const { nowPassword, validPassword } = req.body;
  const user = await User.findById(_id);
  const validation = await bcrypt.compare(nowPassword, user.password);
  if (!validation) {
    const errorMessage = "Current password doesn't correct";
    req.flash("error", "Please Try again ! 😉");
    return res.status(404).render("user/changePW", { errorMessage });
  } else {
    if (newPassword !== validPassword) {
      const errorMessage = "please check new password again";
      req.flash("error", "Please Try again ! 😉");
      return res.status(400).render("user/changePW", { errorMessage });
    }
    // newPassword = await User.hashingPw(newPassword);
    // const user = await User.findByIdAndUpdate(
    //   _id,
    //   { password: newPassword },
    //   { new: true }
    // );
    user.password = newPassword;
    await user.save();
    req.flash("info", "🔑Please login New Password");
    req.session.destroy();
    return res.redirect("/login");
  }
};
