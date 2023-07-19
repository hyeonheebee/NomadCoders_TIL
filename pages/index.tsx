import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import Button from "../components/button";
import Input from "../components/input";
import useFetching from "../lib/client/useFetching";
import useTweet from "../lib/client/useTweet";

interface ITextForm {
  text: string;
  like?: boolean;
}
export default function App() {
  const [cookie, setCookie] = useState<string | undefined>("");
  const [tokenFn, state] = useFetching("/api/user/main");
  const [tweetFn, tweet] = useFetching("/api/user/tweet");
  const { data: tweets } = useTweet();

  const router = useRouter();
  const { register, handleSubmit } = useForm<ITextForm>();

  const onLikeClick = () => {};
  const onValid = (data: ITextForm) => {
    tweetFn({ data, user: state.fetchData?.user });
  };

  useEffect(() => {
    setCookie(document.cookie);
    tokenFn(cookie);
    if (state.fetchData?.success && !state.fetchData?.user) {
      router.push("/log-in");
      console.log(state.fetchData?.user);
    } else if (state.fetchData?.success && state.fetchData?.user) {
      console.log("this is home success", state.fetchData);
    }
  }, [state.fetchData?.success, cookie]);

  return (
    <div>
      home~
      {state.fetchData?.user ? (
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            register={register("text", {
              required: false,
            })}
            label="Tweeeeeets"
            name="text"
            type="text"
            kind="text"
            placeholder="Tweeeeeets"
          />
          <Button
            text={true ? "Unlike" : "like"}
            onClick={onLikeClick}
          ></Button>
        </form>
      ) : (
        <span>please waiting..</span>
      )}
      {tweets ? (
        <div>
          {tweets.tweets.map((tweet: any) => (
            <div>
              <span>{tweet?.tweet}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
