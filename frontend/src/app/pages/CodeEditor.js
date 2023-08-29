// components/CodeEditor.js
import { useState, useEffect } from "react";
import axios from "axios";

const CodeEditor = ({ projectID }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    // Fetch code for the project from the backend API
    axios
      .get(`/api/code-editor/?project_id=${projectID}`)
      .then((response) => {
        setCode(response.data.code);
      })
      .catch((error) => {
        console.error("Error fetching code:", error);
      });
  }, [projectID]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);

    // Update code in the backend API
    axios
      .post("/api/code-editor/", {
        project_id: projectID,
        code: newCode,
      })
      .then((response) => {
        console.log("Code saved successfully");
      })
      .catch((error) => {
        console.error("Error saving code:", error);
      });
  };

  return (
    <textarea
      value={code}
      onChange={(e) => handleCodeChange(e.target.value)}
      rows={20}
      cols={80}
    />
  );
};

export default CodeEditor;
