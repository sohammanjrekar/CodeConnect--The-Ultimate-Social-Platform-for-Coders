import React, { useState, useEffect } from "react";
import JobListingList from "../components/JobListingList";
import InternshipListingList from "../components/InternshipListingList";

const Recommendations = () => {
  const [jobListings, setJobListings] = useState([]);
  const [internshipListings, setInternshipListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs/")
      .then((response) => response.json())
      .then((data) => setJobListings(data));

    fetch("http://localhost:8000/api/internships/")
      .then((response) => response.json())
      .then((data) => setInternshipListings(data));
  }, []);

  return (
    <div>
      <h1>Job and Internship Recommendations</h1>
      <JobListingList jobListings={jobListings} />
      <InternshipListingList internshipListings={internshipListings} />
    </div>
  );
};

export default Recommendations;
