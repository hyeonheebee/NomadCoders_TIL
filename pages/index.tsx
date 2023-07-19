import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import useFetching from "../lib/client/useFetching";
import useUser from "../lib/client/useUser";

import { findTokenString } from "../lib/client/utils";

export default function App() {
  const [cookie, setCookie] = useState<string | undefined>("");
  const [tokenFn, state] = useFetching("/api/user/main");
  const router = useRouter();

  console.log("내가만든쿠키~", cookie);

  useEffect(() => {
    setCookie(document.cookie);
    tokenFn(cookie);
    //   if (state) {
    if (state.fetchData?.success && !state.fetchData?.user) {
      router.push("/log-in");
    } else if (state.fetchData?.success && state.fetchData?.user) {
      console.log("this is home success", state.fetchData);
    }
  }, [state.fetchData?.success, cookie]);

  return <div>home~</div>;
}
