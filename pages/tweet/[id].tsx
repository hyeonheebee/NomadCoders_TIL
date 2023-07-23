import React, { useEffect, useState } from "react";
import Navigator from "../../components/navigator";

import SingleList from "../../components/singleList";

import useTweetItem from "../../lib/client/useTweetItem";
import useTweetLike from "../../lib/client/useTweetLike";

export default function tweet() {
  const { data, mutate } = useTweetItem();
  const [clickFn, likeData] = useTweetLike();
  const [like, setLike] = useState(false);
  const onLikeClick = () => {
    clickFn(data);
    if (!likeData.fetchData) return;
    mutate(
      {
        ...data,
        isLiked: likeData.fetchData?.isLike,
      },
      true
    );
  };
  useEffect(() => {
    clickFn({});
  }, []);

  console.log("one:", data, "two:", likeData.fetchData);
  return (
    <div className="bg-rose-100 h-screen">
      <Navigator url="/" urlText="Home|Tweets" />
      {data?.singleTweet ? (
        <div className="flex font-dongle items-center justify-center bg-rose-200">
          <SingleList
            id={data?.singleTweet?.id}
            like={
              likeData.fetchData?.isLike
                ? likeData.fetchData?.isLike
                : data?.existedLike
            }
            onClickFn={onLikeClick}
            text={data?.singleTweet?.tweet}
          />
          <span className="font-span ml-8">by {data?.user?.name}</span>
        </div>
      ) : null}
    </div>
  );
}
