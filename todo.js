const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");
// console.log(loginUsername, loginPassword, loginButton);

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
  writeTodo(objTodoItems);
  // console.log(objTodoItems.text);
  // console.log(arrTodo);
}

let arrTodo = [];
const arrTodoItems = JSON.parse(localStorage.getItem("todos"));
console.log(arrTodoItems);
if (arrTodoItems !== null) {
  arrTodo = arrTodoItems;
  // console.dir(arrTodo);
  // arrTodo.forEach(
  //   (element) => writeTodo(element.text)
  arrTodo.forEach(
    (element) => writeTodo(element)

    // // {}
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
  const newobjTodos = todos;
  // const savedtodoList = localStorage.getItem("todos");
  const todoListInput = document.createElement("li");
  todoList.appendChild(todoListInput);
  todoListInput.id = newobjTodos.id;
  // todoListInput.innerText = savedtodoList.todoitem;
  todoListInput.innerText = newobjTodos.text;
  const todoListBtn = document.createElement("button");
  todoListInput.appendChild(todoListBtn);
  todoListBtn.innerText = ` 📌`;
  // console.log(savedtodoList);
  // console.log(typeof savedtodoList.todoitem);

  todoListBtn.addEventListener("click", handleTodoDelete);
}
function handleTodoDelete(event) {
  // // console.dir(event);
  const li = event.target.parentElement;

  // arrTodo.forEach((element) => if(element.text === liText) );
  // console.log(typeof arrTodoitems);
  // // console.log(ob);
  const items = arrTodo.forEach;
  console.log(li.id);
  arrTodo = arrTodo.filter((items) => items.id !== parseInt(li.id));
  console.log(arrTodo);
  li.remove();
  saveTodoList(arrTodo);
  // arrTodo = arrTodo.filter;

  // 내가 click한 버튼에 해당하는 id를 찾아서, 해당 id를 가진
  // object를 localStorage에 있는 array 에서 delete한다
}

todoForm.addEventListener("submit", handleTodoSubmit);
