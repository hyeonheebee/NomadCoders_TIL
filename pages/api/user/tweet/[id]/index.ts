import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../../../lib/server/client";
import withHandler, {
  ResponseType,
} from "../../../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  let singleTweet;
  let user;
  if (!id) return res.status(400).json({ success: false });

  singleTweet = await client.tweet.findUnique({
    where: {
      id: +id,
    },
  });
  if (singleTweet) {
    user = await client.user.findUnique({
      where: {
        id: singleTweet.userId,
      },
    });
  }
  return res.json({ success: true, singleTweet, user });
}

export default withHandler(["GET"], handler);
