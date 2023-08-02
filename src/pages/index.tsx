import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, FormEventHandler, useState } from "react";
import { client } from "../libs/client";

export type Blog = {
  title: string;
  icon: string;
  content: string;
  category: { name: string; id: string }[];
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    setSearch(json);
  };

  const onClickCategory = async (id: string) => {
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const json = await data.json();
    console.log(json);

    setSearch(json);
  };

  const handleClick: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;
  return (
    <div>
      <form className="flex gap-x-2" onSubmit={handleSubmit}>
        <input type="text" name="query" className="border-block border px-2" />
        <button className="border border-black p-2">検索</button>
        <button
          type="reset"
          className="border border-black p-2"
          onClick={handleClick}
        >
          リセット
        </button>
      </form>
      <p className="mt-4 text-gray-400">{`${
        search ? "検索結果" : "記事の総数"
      }：${totalCount}件数`}</p>
      <ul className="mt-4 space-y-4">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              {content.icon}
              <Link
                href={`/blog/${content.id}`}
                className="text-xl text-blue-800 underline hover:text-blue-400"
              >
                {content.title}
              </Link>
              {content.category.map((cate) => {
                return (
                  <button onClick={() => onClickCategory(cate.id)}>
                    {cate.name}
                  </button>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
  });
  return {
    props: data,
  };
};

export default Home;
