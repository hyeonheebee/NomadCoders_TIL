import { useRouter } from "next/router";
import useSWR from "swr";

export default function useTweetItem() {
  const router = useRouter();
  const id = router.query.id;

  const { data, mutate } = useSWR(`/api/user/tweet/${id}`);

  console.log("useTweetItem ID", id);
  return { data, mutate };
}
