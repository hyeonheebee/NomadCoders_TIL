import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  const [tokenFn, mainState] = useFetching("/api/user/main");
  const [tweetFn, userTweet] = useFetching("/api/user/tweet");
  const { data: tweets } = useTweet();

  const router = useRouter();
  const { register, handleSubmit } = useForm<ITextForm>();

  const onLikeClick = () => {};
  const onValid = (data: ITextForm) => {
    tweetFn({ data, user: mainState.fetchData?.user });
  };

  useEffect(() => {
    setCookie(document.cookie);
    tokenFn(cookie);
    if (mainState.fetchData?.success && !cookie) {
      router.push("/log-in");
      setCookie("");
    }
  }, [router, mainState.fetchData?.success]);
  console.log("this is home success", mainState.fetchData);
  console.log(userTweet.fetchData, "fetchData");
  return (
    <div>
      home~
      {mainState.fetchData?.user ? (
        <>
          <h2>{mainState.fetchData?.name} 님, 어서오세요 ✨</h2>
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
        </>
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
