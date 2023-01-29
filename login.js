const loginForm = document.querySelector(".login-form");
const loginUsername = loginForm.querySelector("input:first-child");
const loginPassword = loginForm.querySelector("input:nth-child(2)");
const loginButton = loginForm.querySelector("button");
const userNameSection = document.querySelector(".username-section");
const USERNAME = "username";
const HIDDEN_CLASSNAME = "hidden";
const loginClockSection = document.querySelector(
  ".clock-section span:last-child"
);
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
  const userNameHi = document.createElement("span");
  const userNameText = document.createElement("span");
  userNameSection.appendChild(userNameHi);
  userNameSection.appendChild(userNameText);
  console.log(typeof loginClockSection.innerText);
  const nowloginHour = loginClockSection.innerText.slice(0, 2);
  if (parseInt(nowloginHour) < 12) {
    userNameHi.innerText = `Good Morning`;
    userNameText.innerText = `${savedUserName}`;
  } else if (parseInt(nowloginHour) < 18) {
    userNameHi.innerText = `Good Afternoon`;
    userNameText.innerText = `${savedUserName}`;
  } else if (parseInt(nowloginHour) <= 24 && parseInt(nowloginHour) > 5) {
    userNameHi.innerText = `Good night`;
    userNameText.innerText = `${savedUserName}`;
  }

  userNameText.classList.add("userNameText");
}
