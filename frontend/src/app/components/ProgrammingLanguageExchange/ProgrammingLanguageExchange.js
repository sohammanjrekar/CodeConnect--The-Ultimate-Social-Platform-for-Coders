// components/ProgrammingLanguageExchange.js
import { useState, useEffect } from "react";
import axios from "axios";

const ProgrammingLanguageExchange = () => {
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [multilingualProjects, setMultilingualProjects] = useState([]);

  useEffect(() => {
    // Fetch programming languages from the backend API
    axios
      .get("/api/programming-languages/")
      .then((response) => {
        setProgrammingLanguages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching programming languages:", error);
      });

    // Fetch multilingual projects from the backend API
    axios
      .get("/api/multilingual-projects/")
      .then((response) => {
        setMultilingualProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching multilingual projects:", error);
      });
  }, []);

  return (
    <div>
      <h2>Programming Language Exchange</h2>
      <h3>Programming Languages</h3>
      <ul>
        {programmingLanguages.map((language) => (
          <li key={language.id}>{language.name}</li>
        ))}
      </ul>
      <h3>Multilingual Projects</h3>
      <ul>
        {multilingualProjects.map((project) => (
          <li key={project.id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>
              Participants:{" "}
              {project.participants.map((user) => user.username).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingLanguageExchange;
