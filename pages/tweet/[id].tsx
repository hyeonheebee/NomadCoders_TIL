import React, { useEffect, useState } from "react";

import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";
import useTweetLike from "../../lib/client/useTweetLike";

export default function tweet() {
  const { data, mutate } = useTweetItem();
  const [likeClick, setLikeClick] = useState(0);
  const { data: likedata, mutate: likemutate } = useTweetLike();

  const onLikeClick = () => {
    setLikeClick((prev) => prev + 1);
    likemutate(true);
  };

  console.log(likedata);
  return (
    <div>
      hi tweet~
      {data?.singleTweet ? (
        <div>
          <SingleList
            id={data?.singleTweet?.id}
            like={likeClick}
            onClickFn={onLikeClick}
            text={data?.singleTweet?.tweet}
          />
        </div>
      ) : null}
      {likedata?.newLike?.id ? <span>like</span> : null}
      {!likedata?.newLike?.id ? <span>unlike</span> : null}
    </div>
  );
}
