import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { ComponentProps, useState } from "react";
import PostList from "src/component/PostList";
import { client } from "src/libs/client";
import { BlogType } from "src/types/blog";

type Props = MicroCMSListResponse<BlogType>;

const Blog: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<BlogType>>();
  const contents = search ? search.contents : props.contents;

  return (
    <div className="mt-20 w-10/12">
      <div>
        <h1 className="animate-track-in-animation text-4xl font-bold">Blog</h1>
      </div>
      {contents.length === 0 ? (
        <p>データがありません</p>
      ) : (
        <PostList data={contents} />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<BlogType>({
    endpoint: "blogs",
  });
  return {
    props: data,
    revalidate: 30,
  };
};

export default Blog;
