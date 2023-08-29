import React from "react";

const JobListingList = ({ jobListings }) => {
  return (
    <div>
      <h2>Recommended Job Listings</h2>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Required Skills: {job.required_skills.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingList;
