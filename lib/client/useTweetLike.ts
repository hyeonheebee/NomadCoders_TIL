import { useRouter } from "next/router";
import useSWR from "swr";

export default function useTweetLike() {
  const router = useRouter();
  const id = router.query.id;

  const { data, mutate } = useSWR(`/api/user/tweet/${id}/like`);

  console.log("useTweetlike ID", id);
  return { data, mutate };
}
