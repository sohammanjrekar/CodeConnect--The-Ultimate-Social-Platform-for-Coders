// components/TechStackAndRecommendations.js
import { useState, useEffect } from "react";
import axios from "axios";

const TechStackAndRecommendations = () => {
  const [techStacks, setTechStacks] = useState([]);
  const [recommendedProjects, setRecommendedProjects] = useState([]);

  useEffect(() => {
    // Fetch tech stacks from the backend API
    axios
      .get("/api/tech-stacks/")
      .then((response) => {
        setTechStacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tech stacks:", error);
      });

    // Fetch recommended projects from the backend API
    axios
      .get(`/api/project-recommendations/${userId}`) // Replace userId with actual user ID
      .then((response) => {
        setRecommendedProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recommended projects:", error);
      });
  }, []);

  return (
    <div>
      <h2>Tech Stack and Project Recommendations</h2>
      <h3>Tech Stacks</h3>
      <ul>
        {techStacks.map((stack) => (
          <li key={stack.id}>{stack.name}</li>
        ))}
      </ul>
      <h3>Recommended Projects</h3>
      <ul>
        {recommendedProjects.map((project) => (
          <li key={project.id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>
              Required Tech Stacks: {project.required_tech_stack.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackAndRecommendations;
