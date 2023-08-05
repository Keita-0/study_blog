import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";
import { Blog, CategoryType } from "src/pages/blog";

type Props = {
  data: MicroCMSListResponse<Blog>;
  categoryName: string;
};

const CategoriesId: NextPage<Props> = ({ data, categoryName }) => {
  const contents = data.contents;
  return (
    <>
      <h2>{categoryName}</h2>
      <ul className="mt-4 space-y-4">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              {content.icon}
              <Link
                href={`/blog/detail/${content.id}`}
                className="text-xl text-blue-800 underline hover:text-blue-400"
              >
                {content.title}
              </Link>
              {content.category.map((cate) => {
                return (
                  <Link
                    key={cate.id}
                    href={`/blog/categories/${cate.id}`}
                    className="text-xl text-blue-800 underline hover:text-blue-400"
                  >
                    {cate.name}
                  </Link>
                );
              })}
            </li>
          );
        })}
      </ul>
    </>
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

  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { filters: `category[contains]${params.id}` },
  });

  return { props: { data, categoryName } };
};

export default CategoriesId;
