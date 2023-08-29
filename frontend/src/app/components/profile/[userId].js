// pages/profile/[userId].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (userId) {
      // Fetch user profile details from the backend API
      axios
        .get(`/api/developer-profiles/${userId}`)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });

      // Fetch user's projects from the backend API
      axios
        .get(`/api/projects/${userId}`)
        .then((response) => {
          setProjects(response.data);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    }
  }, [userId]);

  return (
    <div>
      <h1>{profile.user.username}'s Profile</h1>
      <h2>About Me</h2>
      <p>{profile.bio}</p>
      <h2>Skills</h2>
      <p>{profile.skills}</p>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
