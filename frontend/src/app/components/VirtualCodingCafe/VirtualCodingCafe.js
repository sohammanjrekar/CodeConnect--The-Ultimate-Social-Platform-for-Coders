// components/VirtualCodingCafe.js
import { useState, useEffect } from "react";
import axios from "axios";

const VirtualCodingCafe = () => {
  const [codingCafeSessions, setCodingCafeSessions] = useState([]);
  const [codingLanguages, setCodingLanguages] = useState([]);

  useEffect(() => {
    // Fetch coding café sessions from the backend API
    axios
      .get("/api/coding-cafe-sessions/")
      .then((response) => {
        setCodingCafeSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coding café sessions:", error);
      });

    // Fetch coding languages from the backend API
    axios
      .get("/api/coding-languages/")
      .then((response) => {
        setCodingLanguages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coding languages:", error);
      });
  }, []);

  return (
    <div>
      <h2>Virtual Coding Café</h2>
      <h3>Coding Café Sessions</h3>
      <ul>
        {codingCafeSessions.map((session) => (
          <li key={session.id}>
            <h4>{session.topic}</h4>
            <p>Scheduled at: {session.scheduled_time}</p>
            <p>
              Participants:{" "}
              {session.participants.map((user) => user.username).join(", ")}
            </p>
          </li>
        ))}
      </ul>
      <h3>Coding Languages Enthusiasts</h3>
      <ul>
        {codingLanguages.map((language) => (
          <li key={language.id}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default VirtualCodingCafe;
