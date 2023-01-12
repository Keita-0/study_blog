import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { client } from "../libs/client";

type Blog = {
  title: string;
  body: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  console.log(props);

  return (
    <div>
      <p>{`記事の総数：${props.totalCount}件数`}</p>
      <ul>
        {props.contents.map((content) => {
          return <li key={content.id}>{content.title}</li>;
        })}
      </ul>
      Hello!
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList({
    endpoint: "blog",
  });
  return {
    props: { data },
  };
};

export default Home;
