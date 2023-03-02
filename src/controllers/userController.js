import User from "../models/User";
import bcrypt from "bcrypt";
// import userRouter from "../routers/userRouter";
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const pageTitle = "join";
  const { email, username, password, validPassword, name, location } = req.body;
  if (password !== validPassword) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "password doesn't match",
    });
  }
  const userExists = await User.exists({ $or: [{ username }, { email }] });
  if (userExists) {
    return res
      .status(400)
      .render("join", { pageTitle, errorMessage: "already exist" });
  }
  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    return res.redirect("login");
  } catch (error) {
    return res.render("join", { pageTitle, errorMessage: error._message });
  }
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const existUser = await User.findOne({ username, socialOnly: false });
  if (!existUser) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "this username doesn't exist",
    });
  }

  const existPassword = await bcrypt.compare(password, existUser.password);
  if (!existPassword) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "this password doesn't correct",
    });
  }
  req.session.loggedIn = true;
  req.session.user = existUser;
  res.redirect("/");

  //유저가 로그인 되는 부분
};

export const startGithubLogin = (req, res) => {
  //- https://github.com/login/oauth/authorize?client_id=b6f558f3cf99abbfa5db&allow_signup=false&scope=user:email read:user
  const baseUrl = `https://github.com/login/oauth/authorize`;
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "user:email read:user",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
    })
  ).json();

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();

    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary == true && email.verified == true
    );

    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        email: emailObj.email,
        avatarUrl: userData.avatar_url,
        socialOnly: true,
        username: userData.login,
        password: "",
        name: userData.name,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
    //create account
  } else {
    return res.redirect("/login");
  }
};
export const logOut = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const getEdit = (req, res) => {
  return res.render("edit-profile", { pageTitle: "edit-Profile" });
};
export const postEdit = async (req, res) => {
  // const {id} = req.session.user
  const {
    session: {
      user: { _id },
    },
    body: { name, email, username, location },
  } = req;
  // const { name, email, username, location } = req.body;
  // const existUser = await User.findById(_id);
  // 지금 유저 session의 값과 내가 req.body에 입력한 값이 다를때
  // req.body에 입력한값이 findone으로 찾은 애들이랑 같으면 에러메시지, 아니면 진행할것
  const existNameUser = await User.findOne({ username });
  if (username !== req.session.user.username && existNameUser != null) {
    if (existNameUser.username === username) {
      const errorMessage = "This is already exist username";
      return res.status(400).render("edit-profile", {
        pageTitle: "edit-Profile",
        errorMessage,
      });
    }
  }
  const existEmailUser = await User.findOne({ email });
  if (email !== req.session.user.email && existEmailUser != null) {
    console.log("hi");
    if (existEmailUser.email === email) {
      const errorMessage = "This is already exist email";
      return res.status(400).render("edit-profile", {
        pageTitle: "edit-Profile",
        errorMessage,
      });
    }
  }
  // const existUser = await User.findOne({name})
  // if(existUser.name === name)
  const upadatedUser = await User.findByIdAndUpdate(
    _id,
    {
      name,
      email,
      username,
      location,
    },
    { new: true }
  );
  req.session.user = upadatedUser;
  console.log(req.session.user);
  // req.session.user = {
  //   ...req.session.user,
  //   name,
  //   email,
  //   username,
  //   location,
  // };
  return res.redirect("/users/edit");
};
export const getChangePassword = (req, res) => {
  if (req.session.socialOnly === true) {
    return res.redirect("/");
  }
  return res.render("users/change-password", { pageTitle: "Change Password" });
};
export const postChangePassword = async (req, res) => {
  //send notification
  // const { oldPassword, newPassword, validPassword } = req.body;
  const {
    session: {
      user: { _id },
    },
    body: { oldPassword, newPassword, validPassword },
  } = req;
  const user = await User.findById(_id);
  const validation = await bcrypt.compare(oldPassword, user.password);
  if (!validation) {
    return res.status(400).render("users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "Current password doesn't match",
    });
  }
  if (newPassword !== validPassword) {
    return res.status(400).render("users/change-password", {
      pageTitle,
      errorMessage: "New password doesn't match",
    });
  }
  user.password = newPassword;
  await user.save();
  // console.log("finish hashing", user.password);
  // req.session.user.password = user.password;
  return res.redirect("/users/logout");
};
export const see = (req, res) => res.send("see users id");
