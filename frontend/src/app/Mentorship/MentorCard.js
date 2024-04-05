"use client"
import React, { useState, useEffect } from 'react';

const MentorshipProfilesPage = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    expertise: "",
    availability: "",
    feedback: ""
  });

  // State variables to store mentorship profiles data
  const [mentorshipProfiles, setMentorshipProfiles] = useState([]);

  // State variable to store the ID of the profile being updated
  const [editProfileId, setEditProfileId] = useState(null);

  // Function to fetch mentorship profiles from the server
  const fetchMentorshipProfiles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/");
      const data = await response.json();
      setMentorshipProfiles(data);
    } catch (error) {
      console.error("Error fetching mentorship profiles:", error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission for creating or updating a profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/";
      let method = "POST";
      if (editProfileId) {
        url += `${editProfileId}/`;
        method = "PUT";
      }
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // If successful, fetch updated list of profiles
        fetchMentorshipProfiles();
        // Reset form data and editProfileId
        setFormData({
          expertise: "",
          availability: "",
          feedback: ""
        });
        setEditProfileId(null);
      } else {
        console.error("Failed to save mentorship profile");
      }
    } catch (error) {
      console.error("Error saving mentorship profile:", error);
    }
  };

  // Function to handle deletion of a profile
  const handleDeleteProfile = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/${id}/`, {
        method: "DELETE"
      });
      if (response.ok) {
        // If successful, fetch updated list of profiles
        fetchMentorshipProfiles();
      } else {
        console.error("Failed to delete mentorship profile");
      }
    } catch (error) {
      console.error("Error deleting mentorship profile:", error);
    }
  };

  // Function to handle editing a profile
  const handleEditProfile = (profile) => {
    setFormData({
      expertise: profile.expertise,
      availability: profile.availability,
      feedback: profile.feedback
    });
    setEditProfileId(profile.id);
  };

  useEffect(() => {
    // Fetch mentorship profiles when the component mounts
    fetchMentorshipProfiles();
  }, []);
  return (
    <div className="container mx-auto px-4 w-full">
      <h1 className="text-3xl font-semibold mb-6">Mentorship Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentorshipProfiles.map(profile => (
          <div key={profile.id} className="mb-6 rounded-lg bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="mr-2 h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                />
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {profile.user}
                  </h3>
                  <span className="block text-xs font-normal text-gray-500">
                    {profile.expertise}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-indigo-500">
                <span className="mr-0.5">+</span>Follow
              </p>
            </div>
            <p className="my-6 text-sm font-normal text-gray-500">
              {profile.feedback}
            </p>
            <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-2 h-5 w-5 text-base text-gray-500"
                >
                  {/* Task icon */}
                </svg>
                <span className="mr-1">{profile.total_ratings}</span> Task
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-1 h-5 w-6 text-yellow-500"
                >
                  {/* Star icon */}
                </svg>
                {profile.total_stars} ({profile.total_ratings} Reviews)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorshipProfilesPage;
