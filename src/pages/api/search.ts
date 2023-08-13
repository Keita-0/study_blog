import { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/libs/client";
import { BlogType } from "src/types/blog";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<BlogType>({
    endpoint: "blogs",
    queries: { q: req.body.q },
  });

  res.status(200).json(data);
};

export default handler;
