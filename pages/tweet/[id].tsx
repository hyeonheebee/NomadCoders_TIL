import React, { useState } from "react";

import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";
import useTweetLike from "../../lib/client/useTweetLike";

export default function tweet() {
  const { data } = useTweetItem();
  const [clickFn] = useTweetLike();
  const [likeClick, setLikeClick] = useState(0);
  const [like, setLike] = useState(false);

  const onLikeClick = () => {
    clickFn(data);
    setLikeClick((prev) => prev + 1);
    setLike((prev) => !prev);
  };
  console.log(data);
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
      {like ? <span>Unlike</span> : <span>like</span>}
    </div>
  );
}
