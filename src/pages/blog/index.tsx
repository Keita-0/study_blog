import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { client } from "src/libs/client";
import dayjs from "dayjs";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  }[];
  icon: string;
};

export type CategoryType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
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

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;
  return (
    <div className="mt-20 w-10/12">
      <form className="flex justify-end gap-x-2" onSubmit={handleSubmit}>
        <div className="flex w-2/5 flex-row rounded-xl border py-2 px-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            name="query"
            className="w-full outline-none"
            placeholder="search by name"
          />
        </div>
      </form>
      <p className="mt-4 text-gray-400">{`${
        search ? "検索結果" : "記事の総数"
      }：${totalCount}件数`}</p>
      <div className="m-auto grid grid-cols-3 gap-1">
        {contents.map((content) => {
          return (
            <Link key={content.id} href={`/blog/detail/${content.id}`}>
              <div className="mx-3 mb-6 flex flex h-64 flex-col justify-between overflow-hidden rounded-xl border transition-all duration-500 hover:opacity-80">
                <div className="flex h-3/5 w-full flex-col items-center justify-center bg-green-200 p-3">
                  <h3 className="block p-2 text-3xl">{content.icon}</h3>
                  <p className="block font-bold">{content.title}</p>
                </div>
                <div className="flex h-2/5 flex-col justify-around px-4 py-2">
                  <p>{dayjs(content.publishedAt).format("YYYY.MM.DD")}</p>
                  <div className="scrolling-touch flex overflow-x-auto whitespace-nowrap">
                    {content.category.map((cate) => {
                      return (
                        <Link
                          key={cate.id}
                          href={`/blog/categories/${cate.id}`}
                          className="no-underline"
                        >
                          <div className="mr-1 flex items-center rounded-xl border bg-gray-200 px-2 py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="mr-1 h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6h.008v.008H6V6z"
                              />
                            </svg>

                            <p className="text-xs">{cate.name}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
  });
  return {
    props: data,
    revalidate: 30,
  };
};

export default Blog;
