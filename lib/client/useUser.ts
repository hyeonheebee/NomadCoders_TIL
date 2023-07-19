import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

export default function useUser() {
  const router = useRouter();
  const { data, error, mutate } = useSWR("/api/user/main");

  console.log("useUser datat", data);
  return { data, mutate };
}
