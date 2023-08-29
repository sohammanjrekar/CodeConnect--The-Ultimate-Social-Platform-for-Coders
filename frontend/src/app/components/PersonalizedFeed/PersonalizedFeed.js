// components/PersonalizedFeed.js
import { useState, useEffect } from "react";
import axios from "axios";

const PersonalizedFeed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    // Fetch personalized feed posts from the backend API
    axios
      .get(`/api/personalized-feed/${userId}`) // Replace userId with actual user ID
      .then((response) => {
        setFeedPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching personalized feed:", error);
      });
  }, []);

  return (
    <div>
      <h2>Personalized Feed</h2>
      <ul>
        {feedPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.author.username}</h3>
            <p>{post.content}</p>
            <p>Posted at: {post.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedFeed;
