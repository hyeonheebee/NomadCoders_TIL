const inputForm = document.querySelector("#input-form");
const nameForm = document.querySelector(".name-form");
const nameInput = document.querySelector(".name-form input");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-form input");
const emailSpan = document.querySelector(".email-form span");
const pwForm = document.querySelector(".pw-form");
const pwSpan = document.querySelector(".pw-form span");
const pwText = document.querySelector(".pw-form h4");
const greeting = document.querySelector("h1");
const loginButton = document.querySelector("#login-btn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function inputNameSubmit(event) {
  event.preventDefault();
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  emailSpan.innerText = `${username}, What is your email?`;

  nameForm.classList.add(HIDDEN_CLASSNAME);
  emailForm.classList.remove(HIDDEN_CLASSNAME);

  function inputEmailSubmit() {
    event.preventDefault();
    const useremail = emailInput.value;
    pwSpan.innerText = `${useremail} is that True? Please choose a password`;
    emailForm.classList.add(HIDDEN_CLASSNAME);
    nameForm.classList.add(HIDDEN_CLASSNAME);
    pwForm.classList.remove(HIDDEN_CLASSNAME);
    pwText.innerText = "PassWord need to be at least 8 characters long :)";

    function inputPwSubmit() {
      event.preventDefault();
      const savedusername = localStorage.getItem(USERNAME_KEY);
      greeting.innerText = `${savedusername}, Nice to meet you :)`;
      pwForm.classList.add(HIDDEN_CLASSNAME);
      loginButton.classList.add(HIDDEN_CLASSNAME);
    }
    inputForm.addEventListener("submit", inputPwSubmit);
  }
  inputForm.addEventListener("submit", inputEmailSubmit);
}

inputForm.addEventListener("submit", inputNameSubmit);
