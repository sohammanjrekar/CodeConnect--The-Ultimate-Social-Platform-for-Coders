import { useState } from "react";
import axios from "axios";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleCommentSubmit = async () => {
    try {
      await axios.post(
        `http://your-django-backend-url/api/posts/${postId}/comments/`,
        { content }
      );
      // Refresh comments or update state
    } catch (error) {
      console.error("Error commenting:", error);
    }
  };

  return (
    <div className="mb-2">
      <textarea
        className="w-full p-2 border rounded"
        rows="2"
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-3 py-1 mt-1 rounded"
        onClick={handleCommentSubmit}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
