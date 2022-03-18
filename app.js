const nameForm = document.querySelector(".name-form");
const nameInput = document.querySelector(".name-form input");

const emailForm = document.querySelector(".name-form");
const pwForm = document.querySelector(".pw-form");
const pwText = document.querySelector("h4");

function inputNameSubmit() {
  const username = nameInput.value;

  nameForm.classList.add("hidden");
  console.log(username);
  nameForm.classList.add("color");
}

nameForm.addEventListener = ("submit", inputNameSubmit);

function inputEmailSubmit(event) {
  event.preventDefault();
  emailForm.classList.add("hidden");
}

emailForm.addEventListener = ("submit", inputEmailSubmit);

function inputPwSubmit(event) {
  event.preventDefault();
  pwForm.classList.add("hidden");
}

pwForm.addEventListener = ("submit", inputPwSubmit);
