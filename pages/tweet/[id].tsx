import Link from "next/link";
import React from "react";
import Navigator from "../../components/navigator";

import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";
import useTweetLike from "../../lib/client/useTweetLike";

export default function tweet() {
  const { data, mutate } = useTweetItem();
  const [clickFn, likeData] = useTweetLike();
  const onLikeClick = () => {
    clickFn(data);
    if (!likeData.fetchData) return;
    mutate({ ...data, isLiked: likeData.fetchData?.isLike }, true);
  };

  console.log(data);
  return (
    <div>
      <Navigator url="/" urlText="Home|Tweets" />
      hi tweet~
      {data?.singleTweet ? (
        <div>
          <SingleList
            id={data?.singleTweet?.id}
            like={
              data?.isLiked !== undefined
                ? data?.isLiked
                : likeData.fetchData?.isLike
            }
            onClickFn={onLikeClick}
            text={data?.singleTweet?.tweet}
          />
        </div>
      ) : null}
      <Link href="/">Go Home</Link>
    </div>
  );
}
