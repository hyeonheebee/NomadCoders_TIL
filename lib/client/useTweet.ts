import useSWR from "swr";

export default function useTweet() {
  const { data, mutate } = useSWR("/api/user/tweet");

  console.log("useUser date", data);
  return { data, mutate };
}
