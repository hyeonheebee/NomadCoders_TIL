const inputForm = document.querySelector("#input-form");
const nameForm = document.querySelector(".name-form");
const nameInput = document.querySelector(".name-form input");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-form input");
const emailSpan = document.querySelector(".email-form span");
const pwForm = document.querySelector(".pw-form");
const pwInput = document.querySelector(".pw-form input");
const pwSpan = document.querySelector(".pw-form span");
const pwText = document.querySelector(".pw-form h4");
const greeting = document.querySelector("h1");
const loginButton = document.querySelector("#login-btn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const USEREMAIL_KEY = "useremail";
const USERPW_KEY = "userpw";
const mainBox = document.querySelector(".main");
const mainClock = document.querySelector(".main span");
const logOut = document.querySelector(".log-out");
confirmname();
function inputNameSubmit(event) {
  event.preventDefault();
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  const savedusername = localStorage.getItem(USERNAME_KEY);

  if (savedusername === "") {
    inputForm.addEventListener("submit", inputNameSubmit);
    console.log("hi");
  } else {
    emailSpan.innerText = `${savedusername}, What is your email?`;
    nameForm.classList.add(HIDDEN_CLASSNAME);
    emailForm.classList.remove(HIDDEN_CLASSNAME);
    inputForm.addEventListener("submit", inputEmailSubmit);
    // email 제출 화면이 나타나고, 그 화면에서 email form을 submit하면
    // inputEmailSubmit함수가 실행딘다
  }
}

inputForm.addEventListener("submit", inputNameSubmit);

function logoutMomentum() {
  localStorage.clear();
  inputNameSubmit();
}
logOut.addEventListener("submit", logoutMomentum);
function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  mainClock.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
getClock();
setInterval(getClock, 1000);

function inputEmailSubmit(event) {
  event.preventDefault();
  const useremail = emailInput.value;
  localStorage.setItem(USEREMAIL_KEY, useremail);
  const saveduseremail = localStorage.getItem(USEREMAIL_KEY);
  if (saveduseremail === "") {
    emailForm.classList.remove(HIDDEN_CLASSNAME);
    inputForm.addEventListener("submit", inputEmailSubmit);
    console.log("bye");
  } else {
    pwSpan.innerText = `${saveduseremail} is that True? Please choose a password`;
    emailForm.classList.add(HIDDEN_CLASSNAME);
    nameForm.classList.add(HIDDEN_CLASSNAME);
    pwForm.classList.remove(HIDDEN_CLASSNAME);
    pwText.innerText = "PassWord need to be at least 8 characters long :)";
    inputForm.addEventListener("submit", inputPwSubmit);
    // pw 양식이 나타나고 거기서 해당 password form을 submit하면
    // inputPwSubmit함수를 실행한다
  }
}

function inputPwSubmit(event) {
  event.preventDefault();
  const userpw = pwInput.value;
  localStorage.setItem(USERPW_KEY, userpw);
  const saveduserpw = localStorage.getItem(USERPW_KEY);
  if (saveduserpw === "") {
    pwForm.classList.remove(HIDDEN_CLASSNAME);
    loginButton.classList.remove(HIDDEN_CLASSNAME);
    inputForm.addEventListener("submit", inputPwSubmit);
    console.log("hello");
  } else {
    confirmname();
  }
}
function confirmname() {
  const confirmname = localStorage.getItem(USERNAME_KEY);
  if (localStorage.length > 0) {
    greeting.innerText = `${confirmname}, Nice to meet you :)`;
    inputForm.classList.add(HIDDEN_CLASSNAME);
    mainBox.classList.remove(HIDDEN_CLASSNAME);
  } else {
    inputForm.classList.remove(HIDDEN_CLASSNAME);
    mainBox.classList.add(HIDDEN_CLASSNAME);
  }
}
