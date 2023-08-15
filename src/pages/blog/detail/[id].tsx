import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";
import { BlogType } from "src/types/blog";

type Props = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="mt-14 w-full md:mt-20 md:w-3/4">
      <h1 className="animate-track-in-animation text-2xl font-bold md:text-4xl">
        {props.title}
      </h1>
      <div className="animate-track-in-animation-item">
        <time dateTime={props.publishedAt} className="my-4 block">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        <div className="flex">
          {props.category.map((cate) => {
            return (
              <Link
                key={cate.id}
                href={`/blog/categories/${cate.id}`}
                className="no-underline"
              >
                <div className="mr-1 flex items-center rounded-xl border bg-gray-200 px-2 py-1 transition-all duration-500 lg:hover:opacity-60">
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
        <article
          className="prose prose-sm max-w-none pt-7"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></article>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/detail/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<BlogType>({
    endpoint: "blogs",
    contentId: params.id,
  });
  return { props: data };
};

export default BlogId;
