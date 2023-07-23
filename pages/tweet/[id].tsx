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

  return (
    <div>
      <Navigator url="/" urlText="Home|Tweets" />
      {data?.singleTweet ? (
        <div className="flex font-dongle">
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
      <span>by {data?.user?.name}</span>
    </div>
  );
}
