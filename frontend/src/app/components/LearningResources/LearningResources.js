// components/LearningResources.js
import { useState, useEffect } from "react";
import axios from "axios";

const LearningResources = () => {
  const [resources, setResources] = useState([]);
  const [newResourceTitle, setNewResourceTitle] = useState("");
  const [newResourceContent, setNewResourceContent] = useState("");

  useEffect(() => {
    // Fetch learning resources from the backend API
    axios
      .get("/api/learning-resources/")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
      });
  }, []);

  const handleResourceSubmit = () => {
    // Submit new resource to the backend API
    axios
      .post("/api/learning-resources/", {
        title: newResourceTitle,
        content: newResourceContent,
      })
      .then((response) => {
        setResources([...resources, response.data]);
        setNewResourceTitle("");
        setNewResourceContent("");
      })
      .catch((error) => {
        console.error("Error submitting resource:", error);
      });
  };

  return (
    <div>
      <h2>Learning Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.content}</p>
            <p>Contributed by: {resource.contributor}</p>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newResourceTitle}
          onChange={(e) => setNewResourceTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={newResourceContent}
          onChange={(e) => setNewResourceContent(e.target.value)}
        />
        <button onClick={handleResourceSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LearningResources;
