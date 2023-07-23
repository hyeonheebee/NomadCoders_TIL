import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../../../lib/server/client";
import withHandler, {
  ResponseType,
} from "../../../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id: tweetId } = req.query;
  let newLike;
  if (!tweetId) return res.status(400).json({ success: false });
  const likeTweet = await client.tweet.findUnique({
    where: {
      id: +tweetId,
    },
  });
  const likeUser = await client.user.findUnique({
    where: {
      id: likeTweet?.userId,
    },
  });
  const existedLike = await client.like.findFirst({
    where: {
      tweetId: +tweetId,
      userId: likeUser?.id,
    },
  });
  if (existedLike) {
    await client.like.delete({
      where: {
        id: existedLike.id,
      },
    });
  } else {
    newLike = await client.like.create({
      data: {
        user: {
          connect: {
            id: likeUser?.id,
          },
        },
        tweet: {
          connect: { id: +tweetId },
        },
      },
    });
  }

  return res.json({ success: true, likeTweet, newLike });
}

export default withHandler(["GET"], handler);
