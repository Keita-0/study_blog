import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { client } from "src/libs/client";

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
    console.log(q);

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
      <div className="m-4 flex flex-row flex-wrap justify-start">
        {contents.map((content) => {
          return (
            <Link key={content.id} href={`/blog/detail/${content.id}`}>
              <div className="mx-3 mb-6 flex h-40 w-96 items-center justify-evenly rounded-xl border transition-all duration-500 hover:opacity-80">
                <div className="flex h-16 w-12 items-center justify-center rounded-2xl">
                  <p className="text-3xl">{content.icon}</p>
                </div>
                <div className="flex h-3/5 w-2/3 flex-col justify-between">
                  <div>
                    <p className="font-bold">{content.title}</p>
                  </div>
                  <div className="scrolling-touch overflow-x-auto whitespace-nowrap">
                    <div className="flex">
                      {content.category.map((cate) => {
                        return (
                          <Link
                            key={cate.id}
                            href={`/blog/categories/${cate.id}`}
                            className="no-underline"
                          >
                            <div className="mr-1 flex items-center rounded-xl border bg-green-500 px-2 py-1">
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

                              <p className="text-xs text-white">{cate.name}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
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
