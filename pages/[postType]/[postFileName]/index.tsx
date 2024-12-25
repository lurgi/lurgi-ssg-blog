import styles from "./styles.module.css";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPaths, GetStaticProps } from "next";

import fs from "fs";
import path from "path";

import { posts } from "@/src/data";
import Giscus from "@/components/customGiscus/CustomGiscus";
import FancyLink from "@/components/MDXComponents/FancyLink/FancyLink";
import FancyCode from "@/components/MDXComponents/FancyCode/FancyCode";
import FancyImage from "@/components/MDXComponents/FancyImage/FancyImage";

interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  postFileName: string;
}

export default function PostDetailPage({ mdxSource, postFileName }: PostProps) {
  return (
    <div className={styles.postDetailContainer}>
      <div className={styles["fade-in"]}>
        <MDXRemote
          {...mdxSource}
          components={{
            a: FancyLink,
            code: FancyCode,
            img: FancyImage,
          }}
        />
      </div>
      <Giscus postFileName={postFileName} />
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
  const { postType, postFileName } = context.params as { postType: string; postFileName: string };

  const filePath = path.join(process.cwd(), "src", "statics", postType, `${postFileName}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const mdxSource = await serialize(fileContents);

  return {
    props: { mdxSource, postFileName },
  };
};
