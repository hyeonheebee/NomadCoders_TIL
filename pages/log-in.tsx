import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Input from "../components/input";
import useAuth from "../lib/client/useAuth";
import useFetching from "../lib/client/useFetching";

import { setTokenCookie } from "../lib/client/utils";

interface ILoginForm {
  email?: string;
  phone?: string;
}
export default function App() {
  const AccountURL = "/api/user/login";
  const AuthURL = "/api/user/auth";

  const [postLogin, state] = useFetching(AccountURL);
  const [getAuth, authState] = useAuth(AuthURL);

  const { register, reset, handleSubmit } = useForm<ILoginForm>();
  const [method, setMethod] = useState<"email" | "phone">("phone");
  const [token, setToken] = useState<string | undefined>("");

  const router = useRouter();
  const onEmailClick = () => {
    reset(), setMethod("email");
  };
  const onPhoneClick = () => {
    reset(), setMethod("phone");
  };
  const onValid = (formData: ILoginForm) => {
    if (state.loading) return;
    postLogin(formData);
  };
  useEffect(() => {
    if (state.fetchData?.success && !state.fetchData?.user) {
      router.push("/create-account");
    } else if (state.fetchData?.success && state.fetchData?.user) {
      setToken(state.fetchData?.token);
      if (token) {
        setTokenCookie(token);
        getAuth(state.fetchData?.token);
      }
      getAuth(state.fetchData?.token);
      if (authState.fetchData?.user) {
        router.push({
          pathname: "/",
        });
      }
    }
    console.log("this is login success", state.fetchData);
  }, [state.fetchData?.success, authState.fetchData?.user]);

  return (
    <div>
      <Button
        text={method === "email" ? "Phone-Login" : "Email-Login"}
        onClick={method === "email" ? onPhoneClick : onEmailClick}
      ></Button>

      <form onSubmit={handleSubmit(onValid)}>
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
