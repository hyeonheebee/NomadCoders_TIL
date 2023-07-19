import { NextApiRequest, NextApiResponse } from "next";
import { decodeURIToken, findTokenString } from "../../../lib/client/utils";

import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  let user;
  let token;
  let tokenObj;

  const cookie = req.body;

  if (!cookie) return res.status(400).json({ success: false });
  const cookieToken = findTokenString(cookie);
  token = decodeURIToken(cookieToken);
  console.log(cookieToken);
  tokenObj = await client.token.findUnique({
    where: { token },
  });
  if (tokenObj) {
    user = await client.user.findUnique({
      where: { id: tokenObj?.userId },
    });
  }

  return res.json({
    success: true,
    token,
    user,
    id: user?.id,
    name: user?.name,
  });
}

export default withHandler(["POST"], handler);
