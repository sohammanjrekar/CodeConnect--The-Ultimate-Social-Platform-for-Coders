import React, { useState, useEffect } from "react";
import SnippetList from "../components/SnippetList";

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/snippets/")
      .then((response) => response.json())
      .then((data) => setSnippets(data));
  }, []);

  return (
    <div>
      <h1>Code Snippet Sharing Platform</h1>
      <SnippetList snippets={snippets} />
    </div>
  );
};

export default Snippets;
