import { NextApiRequest, NextApiResponse } from "next";
import { getName, getPassword } from "../../../lib/client/utils";

import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const getNameURL = "https://nickname.hwanmoo.kr/?format=json&count=2";
  let randomName;
  randomName = await getName(getNameURL);
  const { phone, email, username } = req.body;
  console.log(username, "나는 account username");
  const authMethod = email ? { email } : phone ? { phone: +phone } : null;
  if (!authMethod) return res.status(400).json({ success: false });

  const randomString = getPassword();

  const userToken = await client.token.create({
    data: {
      token: randomString,
      user: {
        connectOrCreate: {
          where: {
            ...authMethod,
          },
          create: {
            name: username ? username : randomName,
            ...authMethod,
          },
        },
      },
    },
  });

  return res.json({ success: true, token: userToken.token });
}
export default withHandler(["POST"], handler);
