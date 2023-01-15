import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "../libs/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <p className="text-gray-400">{`記事の総数：${props.totalCount}件数`}</p>
      <ul className="mt-4 space-y-4">
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className="text-xl text-blue-800 underline hover:text-blue-400">
                  {content.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      Hello!
    </div>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  console.log(data);

  return {
    props: data,
  };
};

export default Home;
