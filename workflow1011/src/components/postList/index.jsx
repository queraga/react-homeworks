import Post from "../post";
import styles from "./styles.module.css";
import axios from "axios";
import { useEffect } from "react";

function PostList({ posts, setPosts }) {
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get(
          "https://691226d852a60f10c820ceee.mockapi.io/posts"
        );
        setPosts(res.data);
      } catch (error) {
        console.log("error while loading...", error);
      }
    }
    fetchPosts();
  }, [setPosts]);
  return (
    <div className={styles.postList}>
      <h2 className={styles.title}>Post List</h2>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Post
            key={post.id}
            headline={post.title}
            text={post.text}
            id={post.id}
          />
        ))}
      </div>
      <button className={styles.moreBtn}>Next</button>
    </div>
  );
}

export default PostList;
