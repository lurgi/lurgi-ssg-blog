// import CustomMDX from "@/components/MDXComponents/CustomMDX";
// import Giscus from "@/components/customGiscus/CustomGiscus";
import styles from "./styles.module.css";
// import { notFound } from "next/navigation";
import { GetStaticPaths, GetStaticProps } from "next";
import { posts } from "@/src/data";

export default function PostDetailPage() {
  // if (!postFileName) notFound();

  return (
    <div className={styles.postDetailContainer}>
      123
      {/* <div className={styles["fade-in"]}>
        <CustomMDX postFileName={postFileName} postType={postType} />
      </div> */}
      {/* <Giscus postFileName={postFileName} /> */}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(posts).flatMap((postType) =>
    posts[postType as keyof typeof posts].contents.map((content) => ({
      params: { postType, postFileName: content.fileName },
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const { postType } = context.params as { postType: PostType };
  console.log(context.params);

  // if (!posts[postType]) {
  //   return { notFound: true };
  // }

  return {
    props: {},
  };
};
