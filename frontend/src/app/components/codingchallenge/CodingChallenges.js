// components/CodingChallenges.js
import { useState, useEffect } from "react";
import axios from "axios";

const CodingChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [submissionCode, setSubmissionCode] = useState("");

  useEffect(() => {
    // Fetch coding challenges from the backend API
    axios
      .get("/api/coding-challenges/")
      .then((response) => {
        setChallenges(response.data);
      })
      .catch((error) => {
        console.error("Error fetching challenges:", error);
      });
  }, []);

  const handleChallengeSelect = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleSubmit = () => {
    // Submit code to the backend API
    axios
      .post(`/api/submissions/${selectedChallenge.id}`, {
        code: submissionCode,
      })
      .then((response) => {
        console.log("Code submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting code:", error);
      });
  };

  return (
    <div>
      <h2>Coding Challenges</h2>
      <ul>
        {challenges.map((challenge) => (
          <li
            key={challenge.id}
            onClick={() => handleChallengeSelect(challenge)}
          >
            {challenge.title}
          </li>
        ))}
      </ul>
      {selectedChallenge && (
        <div>
          <h3>{selectedChallenge.title}</h3>
          <p>{selectedChallenge.description}</p>
          <textarea
            value={submissionCode}
            onChange={(e) => setSubmissionCode(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default CodingChallenges;
