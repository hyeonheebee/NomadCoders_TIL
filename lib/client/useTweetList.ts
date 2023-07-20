import useSWR from "swr";

export default function useTweetList() {
  const { data, mutate } = useSWR("/api/user/tweet");

  console.log("useUser date", data);
  return { data, mutate };
}
