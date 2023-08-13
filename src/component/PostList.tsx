import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import Link from "next/link";
import { BlogType } from "src/types/blog";

type Props = { data: (BlogType & MicroCMSContentId & MicroCMSDate)[] };

const PostList = ({ data }: Props) => {
  const contents = data;
  return (
    <div className="my-8 grid animate-track-in-animation-item grid-cols-3 gap-1 ">
      {contents.map((content) => {
        return (
          <Link key={content.id} href={`/blog/detail/${content.id}`}>
            <div className="mx-3 mb-6 flex h-64 flex-col justify-between overflow-hidden rounded-xl border transition-all duration-500 hover:scale-105 ">
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
                        <div className="mr-1 flex items-center rounded-xl border bg-gray-200 px-2 py-1 transition-all duration-500 hover:opacity-60">
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
  );
};

export default PostList;
