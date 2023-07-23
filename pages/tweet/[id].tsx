import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";

export default function tweet() {
  const { data, mutate } = useTweetItem();
  const onLikeClick = () => {};
  console.log(data?.singleTweet);
  // const router = useRouter();
  // const id = router.query.id;
  // const state = useSWR(`/api/user/tweet/${id}/like`);
  // console.log(state);
  return (
    <div>
      hi tweet~
      {data?.singleTweet ? (
        <div>
          <SingleList
            id={data?.singleTweet?.id}
            like={true}
            text={data?.singleTweet?.tweet}
          />
        </div>
      ) : null}
    </div>
  );
}
