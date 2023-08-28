import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [content, setContent] = useState("");

  const handlePostSubmit = async () => {
    try {
      await axios.post("http://your-django-backend-url/api/posts/", {
        content,
      });
      // Refresh posts
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default PostForm;
