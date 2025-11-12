import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import PostForm from "./components/postForm";
import PostList from "./components/postList";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(
        "https://691226d852a60f10c820ceee.mockapi.io/posts"
      );
      setPosts(res.data);
    }
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };
  return (
    <div>
      <Header />
      <div className="contentWrapper">
        <PostList posts={posts} setPosts={setPosts} />
        <PostForm onAddPost={addPost} />
      </div>
    </div>
  );
}

export default App;
