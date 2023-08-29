// components/CareerPortal.js
import { useState, useEffect } from "react";
import axios from "axios";

const CareerPortal = () => {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    // Fetch job openings from the backend API
    axios
      .get("/api/job-openings/")
      .then((response) => {
        setJobOpenings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job openings:", error);
      });
  }, []);

  return (
    <div>
      <h2>Career Portal</h2>
      <ul>
        {jobOpenings.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Skills Required: {job.skills_required}</p>
            <p>Posted by: {job.posted_by}</p>
            <p>Posted at: {job.posted_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerPortal;
