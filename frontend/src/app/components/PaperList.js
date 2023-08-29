import React from "react";

const PaperList = ({ papers }) => {
  return (
    <div>
      <h2>Published Papers</h2>
      <ul>
        {papers.map((paper) => (
          <li key={paper.id}>
            <h3>{paper.title}</h3>
            <p>{paper.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaperList;
