import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import PostList from "src/component/PostList";
import { client } from "src/libs/client";
import { BlogType } from "src/types/blog";

type Props = MicroCMSListResponse<BlogType>;

const Blog: NextPage<Props> = (props) => {
  const contents = props.contents;

  return (
    <div className="mt-14 w-full md:mt-20 xl:w-10/12">
      <div>
        <h1 className="animate-track-in-animation text-3xl font-bold md:text-4xl">
          Blog
        </h1>
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
  };
};

export default Blog;
