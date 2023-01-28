const loginForm = document.querySelector(".login-form");
const loginUsername = loginForm.querySelector("input:first-child");
const loginPassword = loginForm.querySelector("input:nth-child(2)");
const loginButton = loginForm.querySelector("button");
const userNameSection = document.querySelector(".username-section");
const USERNAME = "username";
const HIDDEN_CLASSNAME = "hidden";

// loginForm.classList.remove(HIDDEN_CLASSNAME);
function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginUsername.value;
  const userPassword = loginPassword.value;
  localStorage.setItem(USERNAME, userName);
  localStorage.setItem("password", userPassword);
  // console.dir(event);
  // console.log(typeof localStorage.getItem("password"));
  // const savedUsername = localStorage.getItem(USERNAME);
  // console.log(typeof localStorage.getItem(USERNAME));
  const savedUserName = localStorage.getItem(USERNAME);
  // console.log(savedUserName);
  writeSavedUsername(savedUserName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  writeSavedUsername(savedUserName);
}

function writeSavedUsername(savedUserName) {
  const userNameText = document.createElement("h1");
  userNameSection.appendChild(userNameText);
  userNameText.innerText = `Hello, ${savedUserName}`;
  userNameText.classList.add("userNameText");
}
