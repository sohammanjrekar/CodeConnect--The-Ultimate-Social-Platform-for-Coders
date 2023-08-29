// components/CodeStorytellingComics.js
import { useState, useEffect } from "react";
import axios from "axios";

const CodeStorytellingComics = () => {
  const [codeStories, setCodeStories] = useState([]);

  useEffect(() => {
    // Fetch code stories from the backend API
    axios
      .get("/api/code-stories/")
      .then((response) => {
        setCodeStories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching code stories:", error);
      });
  }, []);

  return (
    <div>
      <h2>Code-Based Storytelling and Comics</h2>
      <ul>
        {codeStories.map((story) => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
            <p>Created by: {story.user.username}</p>
            <p>Created at: {story.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeStorytellingComics;
