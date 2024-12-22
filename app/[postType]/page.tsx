import styles from "./page.module.css";
import { posts } from "@/src/data";
import PostPreview from "@/components/preview/PostPreview";

export default async function PostListPage({ params }: { params: Promise<{ postType: PostType }> }) {
  const { postType } = await params;

  return (
    <div className={styles.postPartList}>
      <h1>{postType}</h1>
      <small className={styles.description}>{posts[postType]?.description}</small>
      <ul className={styles.postPartList}>
        {posts[postType]?.contents.map((post) => (
          <li key={post.fileName}>
            <PostPreview url={`/${post.type}/${post.fileName}`} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
