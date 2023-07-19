import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Input from "../components/input";
import useAuth from "../lib/client/useAuth";
import useFetching from "../lib/client/useFetching";

interface IAccountForm {
  email?: string;
  phone?: string;
  username: string;
}
export default function App() {
  const AccountURL = "/api/user/account";
  const [postAccount, state] = useFetching(AccountURL);
  const { register, reset, handleSubmit } = useForm<IAccountForm>();
  const [method, setMethod] = useState<"email" | "phone">("phone");
  const router = useRouter();
  const onEmailClick = () => {
    reset(), setMethod("email");
  };
  const onPhoneClick = () => {
    reset(), setMethod("phone");
  };
  const onValid = (formData: IAccountForm) => {
    if (state.loading) return;
    postAccount(formData);
  };

  useEffect(() => {
    if (state.fetchData?.success && !state.fetchData?.user) {
      router.push("/log-in");
    }
  }, [state.fetchData?.user, state.fetchData?.success]);
  return (
    <div>
      <Button
        text={method === "email" ? "Phone-Login" : "Email-Login"}
        onClick={method === "email" ? onPhoneClick : onEmailClick}
      ></Button>

      <form onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("username", {
            required: false,
          })}
          label="User Name"
          name="username"
          type="text"
          kind="username"
          placeholder="User Name"
        />
        {method === "phone" ? (
          <Input
            register={register("phone", {
              required: "please write down phone number",
            })}
            label="Phone Number"
            name="phone"
            type="number"
            kind="phone"
            placeholder="phone"
            required
          />
        ) : null}

        {method === "email" ? (
          <Input
            register={register("email", {
              required: "please write down email address",
            })}
            label="Email Address"
            name="email"
            type="email"
            kind="email"
            placeholder="email"
            required
          />
        ) : null}
        <Button
          text={method === "email" ? "Get login link " : "Get sms Auth"}
        ></Button>
      </form>
    </div>
  );
}
