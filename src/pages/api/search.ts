import { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages/blog";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { q: req.body.q },
  });

  res.status(200).json(data);
};

export default handler;
