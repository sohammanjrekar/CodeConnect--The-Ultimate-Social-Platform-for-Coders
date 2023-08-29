import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const TopicPage = () => {
  const router = useRouter();
  const { topicId } = router.query;
  const [topicTitle, setTopicTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    if (topicId) {
      // Fetch topic details from the backend API
      axios
        .get(`/api/discussion-topics/${topicId}`)
        .then((response) => {
          setTopicTitle(response.data.title);
        })
        .catch((error) => {
          console.error("Error fetching topic:", error);
        });

      // Fetch posts for the topic from the backend API
      axios
        .get(`/api/discussion-posts/${topicId}`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [topicId]);

  const handlePostSubmit = () => {
    // Submit new post to the backend API
    axios
      .post(`/api/discussion-posts/${topicId}`, {
        content: newPostContent,
      })
      .then((response) => {
        // Refresh the posts
        setPosts([...posts, response.data]);
        setNewPostContent("");
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });
  };

  return (
    <div>
      <h1>{topicTitle}</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <p>Posted by: {post.user}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default TopicPage;
