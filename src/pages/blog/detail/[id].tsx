import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages/blog";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="mt-20 w-3/4">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <time dateTime={props.publishedAt} className="mt-2 block">
        {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <article
        className="prose prose-sm max-w-none pt-7"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blogs" });
  const ids = data.contents.map((content) => `/blog/detail/${content.id}`);
  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: params.id,
  });
  return { props: data, revalidate: 30 };
};

export default BlogId;
