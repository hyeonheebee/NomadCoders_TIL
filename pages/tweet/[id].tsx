import React, { useEffect } from "react";
import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";

export default function tweet() {
  const { data, mutate } = useTweetItem();
  const onLikeClick = () => {};
  console.log(data?.singleTweet);
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
