import CustomMDX from "@/components/MDXComponents/CustomMDX";
import Giscus from "@/components/customGiscus/CustomGiscus";
import styles from "./page.module.css";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ postFileName: string; postType: PostType }>;
}) {
  const { postFileName, postType } = await params;
  if (!postFileName || !postType) throw new Error("라우트 설정을 제대로 해야지!");

  return (
    <div className={styles.postDetailContainer}>
      <div className={styles["fade-in"]}>
        <CustomMDX postFileName={postFileName} postType={postType} />
      </div>

      <Giscus postFileName={postFileName} />
    </div>
  );
}
