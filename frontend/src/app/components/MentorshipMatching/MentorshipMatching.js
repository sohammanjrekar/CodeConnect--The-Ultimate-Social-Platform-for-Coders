// components/MentorshipMatching.js
import { useState, useEffect } from "react";
import axios from "axios";

const MentorshipMatching = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    // Fetch available mentors from the backend API
    axios
      .get("/api/mentorship-profiles/")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleRequestSubmit = () => {
    const mentorId = selectedMentor.user.id;

    // Submit mentorship request to the backend API
    axios
      .post("/api/mentorship-requests/", {
        mentor_id: mentorId,
      })
      .then((response) => {
        console.log("Mentorship request sent successfully");
      })
      .catch((error) => {
        console.error("Error sending mentorship request:", error);
      });
  };

  return (
    <div>
      <h2>Mentorship Matching</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.user.id} onClick={() => handleMentorSelect(mentor)}>
            <h3>{mentor.user.username}</h3>
            <p>{mentor.bio}</p>
          </li>
        ))}
      </ul>
      {selectedMentor && (
        <div>
          <h3>Selected Mentor: {selectedMentor.user.username}</h3>
          <p>{selectedMentor.bio}</p>
          <button onClick={handleRequestSubmit}>Send Mentorship Request</button>
        </div>
      )}
    </div>
  );
};

export default MentorshipMatching;
