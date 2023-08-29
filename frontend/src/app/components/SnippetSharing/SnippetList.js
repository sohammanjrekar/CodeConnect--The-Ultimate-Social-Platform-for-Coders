import React from "react";

const SnippetList = ({ snippets }) => {
  return (
    <div>
      <h2>Code Snippets</h2>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet.id}>
            <h3>{snippet.title}</h3>
            <pre>{snippet.code}</pre>
            <p>Tags: {snippet.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;
