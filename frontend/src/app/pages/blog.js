import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleCreatePost = (newPost) => {
    fetch("http://localhost:8000/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN", // Include the token
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => setPosts([...posts, data]));
  };

  return (
    <div>
      <h1>Blog</h1>
      <PostForm onSubmit={handleCreatePost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Blog;
