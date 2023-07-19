import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

export default function useTweet() {
  const { data } = useSWR("/api/user/tweet");

  console.log("useUser date", data);
  return { data };
}
