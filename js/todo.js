const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOSKEY = "todos";

function paintTodo(usertodo) {
  const newTodoList = document.createElement("li");
  newTodoList.id = usertodo.id;
  const newTodoSpan = document.createElement("span");
  const newTodoBtn = document.createElement("button");
  newTodoSpan.innerText = usertodo.text;
  newTodoBtn.innerText = "✔";
  todoList.appendChild(newTodoList);
  newTodoList.appendChild(newTodoBtn);
  newTodoList.appendChild(newTodoSpan);
  newTodoBtn.addEventListener("click", deleteTodoList);
}

function deleteTodoList(event) {
  const deleteTodo = event.target.parentElement;
  deleteTodo.remove();
  console.log(typeof deleteTodo.id);
  todos = todos.filter(
    (userdelete) => userdelete.id !== parseInt(deleteTodo.id)
  );
  saveTodo();
}

let todos = [];
function saveTodo() {
  localStorage.setItem(TODOSKEY, JSON.stringify(todos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const usertodo = todoInput.value;
  todoInput.value = "";
  const usertodoObj = {
    text: usertodo,
    id: Date.now(),
  };
  todos.push(usertodoObj);
  paintTodo(usertodoObj);
  saveTodo();
}
todoForm.addEventListener("submit", handleTodoSubmit);

const savedUserTodo = localStorage.getItem(TODOSKEY);
console.log(savedUserTodo);
parseTodos();

function parseTodos() {
  if (savedUserTodo !== null) {
    const parsedUserTodo = JSON.parse(savedUserTodo);
    console.log(parsedUserTodo);
    todos = parsedUserTodo;
    parsedUserTodo.forEach(paintTodo);
  }
}
