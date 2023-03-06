//--users controller
// edit user-profile,see user, delete user, join, login, logout
// globalRouter.route("/join").get(getJoin).post(postJoin)
// globalRouter.route("/login").get(getLogin).post(postLogin)
import User from "../models/User";

export const see = (req, res) => {};
export const getJoin = (req, res) => {
  const pageTitle = "Join";
  return res.render("user/join", { pageTitle });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Join";
  const { username, password, nickname, email, validPassword } = req.body;
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
  await User.create({ username, email, nickname, password });
  return res.redirect("login");
};
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
export const logout = (req, res) => {};
export const edit = (req, res) => {};
export const deleteUser = (req, res) => {};
