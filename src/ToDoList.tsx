import { setDefaultResultOrder } from "dns/promises";
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
interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  CfPassword: string;
  extraError?: string;
}
function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.CfPassword) {
      setError(
        "CfPassword",
        { message: "Password isn't same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server is down" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "have to fill it",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com is allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message as string}</span>
        <input
          {...register("FirstName", {
            required: "have to fill it",
            validate: {
              noHH: (value) =>
                value.includes("hyeonhee")
                  ? "you have to use another name"
                  : true,
              noHB: (value) =>
                value.includes("HyeonheeB")
                  ? "you have to use another name"
                  : true,
            },
          })}
          placeholder="First name"
        />
        <span>{errors?.FirstName?.message as string}</span>
        <input
          {...register("LastName", {
            required: "have to fill it",

            minLength: {
              value: 10,
              message: "Too short",
            },
          })}
          placeholder="Last name"
        />
        <span>{errors?.LastName?.message as string}</span>
        <input
          {...register("UserName", {
            required: "have to fill it",
            minLength: 5,
          })}
          placeholder="Username"
        />
        <span>{errors?.UserName?.message as string}</span>
        <input
          {...register("Password", {
            required: "have to fill it",
            minLength: 10,
          })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message as string}</span>
        <input
          {...register("CfPassword", {
            required: "have to fill it",
            minLength: 10,
          })}
          placeholder="CfPassword"
        />
        <span>{errors?.CfPassword?.message as string}</span>
        <button>Add</button>
      </form>
      <span>{errors?.extraError?.message as string}</span>
    </div>
  );
}
export default TodoList;
