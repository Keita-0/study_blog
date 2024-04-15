import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PostList from "src/component/PostList";
import { client } from "src/libs/client";
import { BlogType, CategoryType } from "src/types/blog";

type Props = {
  data: MicroCMSListResponse<BlogType>;
  categoryName: string;
};
//hoge
const CategoriesId: NextPage<Props> = ({ data, categoryName }) => {
  const contents = data.contents;
  return (
    <div className="mt-14 w-full md:mt-20 xl:w-10/12">
      <div className="flex animate-track-in-animation flex-row">
        <div className="mr-1 flex items-center px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6 w-6 md:h-8 md:w-8"
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
          <p className="text-xl font-bold md:text-3xl">{categoryName}</p>
        </div>
      </div>
      <PostList data={contents} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "categories" });
  const ids = data.contents.map((content) => `/blog/categories/${content.id}`);
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

  const category = await client.getListDetail<CategoryType>({
    endpoint: "categories",
    contentId: params.id,
  });

  const categoryName = category.name;

  const data = await client.getList<BlogType>({
    endpoint: "blogs",
    queries: { filters: `category[contains]${params.id}` },
  });

  return { props: { data, categoryName } };
};

export default CategoriesId;
