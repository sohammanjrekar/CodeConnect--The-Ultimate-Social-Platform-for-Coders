// components/RecommendedConnections.js
import { useState, useEffect } from "react";
import axios from "axios";

const RecommendedConnections = () => {
  const [recommendedConnections, setRecommendedConnections] = useState([]);

  useEffect(() => {
    // Fetch recommended connections from the backend API
    axios
      .get(`/api/recommended-connections/${userId}`) // Replace userId with actual user ID
      .then((response) => {
        setRecommendedConnections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recommended connections:", error);
      });
  }, []);

  return (
    <div>
      <h2>Recommended Connections</h2>
      <ul>
        {recommendedConnections.map((connection) => (
          <li key={connection.id}>
            <h3>{connection.connection.username}</h3>
            <p>Connected at: {connection.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedConnections;
