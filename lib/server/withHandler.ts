import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  success: boolean;
  [key: string]: any;
}
export default function withHandler(
  method: "GET" | "POST",
  handlerFn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await handlerFn(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
