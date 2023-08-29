// components/PairProgrammingNetworking.js
import { useState, useEffect } from "react";
import axios from "axios";

const PairProgrammingNetworking = () => {
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [pairProgrammingSessions, setPairProgrammingSessions] = useState([]);

  useEffect(() => {
    // Fetch programming languages from the backend API
    axios
      .get("/api/programming-languages/")
      .then((response) => {
        setProgrammingLanguages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching programming languages:", error);
      });

    // Fetch pair programming sessions from the backend API
    axios
      .get("/api/pair-programming-sessions/")
      .then((response) => {
        setPairProgrammingSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pair programming sessions:", error);
      });
  }, []);

  return (
    <div>
      <h2>Pair Programming Networking</h2>
      <h3>Programming Languages</h3>
      <ul>
        {programmingLanguages.map((language) => (
          <li key={language.id}>{language.name}</li>
        ))}
      </ul>
      <h3>Pair Programming Sessions</h3>
      <ul>
        {pairProgrammingSessions.map((session) => (
          <li key={session.id}>
            <h4>{session.project_name}</h4>
            <p>
              Participants:{" "}
              {session.participants.map((user) => user.username).join(", ")}
            </p>
            <p>Start Time: {session.start_time}</p>
            <p>End Time: {session.end_time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PairProgrammingNetworking;
