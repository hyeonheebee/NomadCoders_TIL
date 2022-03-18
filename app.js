const inputForm = document.querySelector("#input-form");
const nameForm = document.querySelector(".name-form");
const nameInput = document.querySelector(".name-form input");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-form input");
const emailSpan = document.querySelector(".email-form span");
const pwForm = document.querySelector(".pw-form");
const pwSpan = document.querySelector(".pw-form span");
const pwText = document.querySelector("h4");
const HIDDEN_CLASSNAME = "hidden";
function inputSubmit(event) {
  if (nameInput.value !== "") {
    const username = nameInput.value;
    emailSpan.innerText = `${username}, What is your email?`;
    event.preventDefault();
    nameForm.classList.add(HIDDEN_CLASSNAME);
    emailForm.classList.remove(HIDDEN_CLASSNAME);
  } else if (emailInput.value !== "") {
    const useremail = emailInput.value;
    pwSpan.innerText = `${useremail} is that True? Please choose a password`;
    emailForm.classList.add(HIDDEN_CLASSNAME);
    nameForm.classList.add(HIDDEN_CLASSNAME);
    pwForm.classList.remove(HIDDEN_CLASSNAME);
  } else {
    pwText.innerText = "PassWord need to be at least 8 characters long :)";
  }
}

inputForm.addEventListener("submit", inputSubmit);
