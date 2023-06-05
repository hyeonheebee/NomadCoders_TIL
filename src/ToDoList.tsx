import React, { ReactHTMLElement, useState } from "react";
import { useForm } from "react-hook-form";
/* function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("Todo should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="wirte a todo " />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
} */

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("FirstName")} placeholder="First name" />
        <input {...register("LastName")} placeholder="Last name" />
        <input {...register("UserName")} placeholder="Username" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("CfPassword")} placeholder="CfPassword" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TodoList;
