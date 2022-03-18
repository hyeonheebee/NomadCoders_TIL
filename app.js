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

function inputNameSubmit(event) {
  event.preventDefault();
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  const savedusername = localStorage.getItem(USERNAME_KEY);

  if (savedusername === "") {
    inputForm.addEventListener("submit", inputNameSubmit);
    console.log("hi");
  } else {
    emailSpan.innerText = `${username}, What is your email?`;
    nameForm.classList.add(HIDDEN_CLASSNAME);
    emailForm.classList.remove(HIDDEN_CLASSNAME);
    inputForm.addEventListener("submit", inputEmailSubmit);

    function inputEmailSubmit() {
      event.preventDefault();
      const useremail = emailInput.value;
      localStorage.setItem(USEREMAIL_KEY, useremail);
      const saveduseremail = localStorage.getItem(USEREMAIL_KEY);
      if (saveduseremail === "") {
        emailForm.classList.remove(HIDDEN_CLASSNAME);
        inputForm.addEventListener("submit", inputEmailSubmit);
        console.log("bye");
      } else {
        pwSpan.innerText = `${useremail} is that True? Please choose a password`;
        emailForm.classList.add(HIDDEN_CLASSNAME);
        nameForm.classList.add(HIDDEN_CLASSNAME);
        pwForm.classList.remove(HIDDEN_CLASSNAME);
        pwText.innerText = "PassWord need to be at least 8 characters long :)";
        inputForm.addEventListener("submit", inputPwSubmit);

        function inputPwSubmit() {
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
            greeting.innerText = `${savedusername}, Nice to meet you :)`;
            pwForm.classList.add(HIDDEN_CLASSNAME);
            loginButton.classList.add(HIDDEN_CLASSNAME);
          }
        }
      }
    }
  }
  inputForm.addEventListener("submit", inputEmailSubmit);
}

inputForm.addEventListener("submit", inputNameSubmit);

const confirmname = localStorage.getItem(USERNAME_KEY);
if (confirmname !== "") {
  greeting.innerText = `${confirmname}, Nice to meet you :)`;
  inputForm.classList.add(HIDDEN_CLASSNAME);
}
