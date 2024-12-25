import styles from "./styles.module.css";
import { posts } from "@/src/data";
import PostPreview from "@/components/preview/PostPreview";
import { notFound } from "next/navigation";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostListPage({ postType }: { postType: PostType }) {
  const postData = posts[postType];

  if (!postType) notFound();

  return (
    <div className={styles.postPartList}>
      <h1>{postType}</h1>
      <small className={styles.description}>{postData?.description}</small>
      <ul className={styles.postPartList}>
        {postData?.contents.map((post) => (
          <li key={post.fileName}>
            <PostPreview url={`/${post.type}/${post.fileName}`} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(posts).map((postType) => ({
    params: { postType },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { postType } = context.params as { postType: PostType };

  if (!posts[postType]) {
    return { notFound: true };
  }

  return {
    props: { postType },
  };
};
