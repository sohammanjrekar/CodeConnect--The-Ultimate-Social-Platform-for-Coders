"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MentorshipProfilesPage = () => {
  

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Mentorship Profiles</h1>
        {/* Form for creating or updating a mentorship profile */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="expertise">Expertise:</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="availability">Availability:</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="feedback">Feedback:</label>
            <input
              type="text"
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">{editProfileId ? "Update Profile" : "Add Profile"}</button>
        </form>

        {/* Display existing mentorship profiles */}
        <div>
          <h2>Existing Profiles</h2>
          <ul>
            {mentorshipProfiles.map((profile) => (
              <li key={profile.id}>
                <div>Expertise: {profile.expertise}</div>
                <div>Availability: {profile.availability}</div>
                <div>Feedback: {profile.feedback}</div>
                <button onClick={() => handleEditProfile(profile)}>Edit</button>
                <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentorshipProfilesPage;
