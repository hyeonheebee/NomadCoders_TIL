import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../../lib/server/client";
import withHandler, { ResponseType } from "../../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  console.log(id, "req.qeury");
  let singleTweet;
  if (!id) return res.status(400).json({ success: false });

  singleTweet = await client.tweet.findUnique({
    where: {
      id: +id,
    },
  });

  return res.json({ success: true, singleTweet });
}

export default withHandler(["GET"], handler);
