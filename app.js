const loginForm = document.querySelector(".login-form");
const loginUsername = loginForm.querySelector("input:first-child");
const loginPassword = loginForm.querySelector("input:nth-child(2)");
const loginButton = loginForm.querySelector("button");
const USERNAME = "username";
const HIDDEN_CLASSNAME = "hidden";
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");
// console.log(loginUsername, loginPassword, loginButton);

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
  document.body.appendChild(userNameText);
  userNameText.innerText = savedUserName;
  userNameText.classList.add("userNameText");
}

function writeClock() {
  const nowTime = new Date();
  // console.log(typeof nowTime);
  // console.log(nowTime);
  // console.log(nowTime.getFullYear());
  // console.log(nowTime.getDate());
  const nowMonth = nowTime.getMonth();
  const options = { month: "long" };
  const optionsMonth = new Intl.DateTimeFormat("en-US", options).format(
    nowTime
  );
  const nowDate = String(nowTime.getDate()).padStart(2, "0");
  const nowHour = String(nowTime.getHours()).padStart(2, "0");
  const nowMinute = String(nowTime.getMinutes()).padStart(2, "0");
  const nowSecond = String(nowTime.getSeconds()).padStart(2, "0");
  const now = `${optionsMonth} ${nowDate}, ${nowHour}:${nowMinute}:${nowSecond}`;
  writtenTime.innerText = now;

  // console.log(optionsMonth);
}
const writtenTime = document.createElement("h2");
document.body.appendChild(writtenTime);
writtenTime.classList.add("nowtime");
writeClock();
setInterval(writeClock, 1000);

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodoItem = todoInput.value;
  todoInput.value = "";
  // newtodo.push(todoInput.value);
  // console.log(newtodo);
  // let todos = {};
  // // console.log(typeof todoInput.value);
  // todos = { id: Date.now(), todoitem: newtodo };
  // console.log(todos);
  // localStorage.setItem("todos", JSON.stringify(todos));
  // // /새로고침했을때 아이템이 그대로 있도록 저장한 값을 불러와서 list에 표시
  const objTodoItems = { id: Date.now(), text: newTodoItem };
  arrTodo.push(objTodoItems);
  saveTodoList(arrTodo);
  writeTodo(newTodoItem);
  // console.log(objTodoItems.text);
  // console.log(arrTodo);
}

let arrTodo = [];
const arrTodoItems = JSON.parse(localStorage.getItem("todos"));
console.log(arrTodoItems);
if (arrTodoItems !== null) {
  arrTodo = arrTodoItems;
  console.dir(arrTodo);
  arrTodo.forEach(
    (element) => writeTodo(element.text)
    // {}
    // {}
    // {}
    // writeTodo
  );
} else {
}

function saveTodoList(arrTodo) {
  localStorage.setItem("todos", JSON.stringify(arrTodo));
  console.log(arrTodoItems);
  // // writeTodo(arrTodo);
  // console.log(localStorage.getItem("todos"));
}
function writeTodo(todos) {
  // const savedtodoList = localStorage.getItem("todos");
  const todoListInput = document.createElement("li");
  document.body.appendChild(todoListInput);
  // todoListInput.innerText = savedtodoList.todoitem;
  todoListInput.innerText = todos;
  const todoListBtn = document.createElement("button");
  todoListInput.appendChild(todoListBtn);
  todoListBtn.innerHTML = "🥕";
  // console.log(savedtodoList);
  // console.log(typeof savedtodoList.todoitem);
  todoListBtn.addEventListener("click", handleTodoDelete);
}
function handleTodoDelete(event) {
  console.dir(event.target);
  const li = event.target.parentElement;
  console.log(event.target.text);
  li.remove();

  // 내가 click한 버튼에 해당하는 id를 찾아서, 해당 id를 가진
  // object를 localStorage에 있는 array 에서 delete한다
}

todoForm.addEventListener("submit", handleTodoSubmit);
