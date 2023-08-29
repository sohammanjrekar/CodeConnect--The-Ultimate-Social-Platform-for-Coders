import React from "react";

const InternshipListingList = ({ internshipListings }) => {
  return (
    <div>
      <h2>Recommended Internship Listings</h2>
      <ul>
        {internshipListings.map((internship) => (
          <li key={internship.id}>
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
            <p>Required Skills: {internship.required_skills.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipListingList;
