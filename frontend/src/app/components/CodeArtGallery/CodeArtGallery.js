// components/CodeArtGallery.js
import { useState, useEffect } from "react";
import axios from "axios";

const CodeArtGallery = () => {
  const [codeArtworks, setCodeArtworks] = useState([]);

  useEffect(() => {
    // Fetch code artworks from the backend API
    axios
      .get("/api/code-artworks/")
      .then((response) => {
        setCodeArtworks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching code artworks:", error);
      });
  }, []);

  return (
    <div>
      <h2>Code Art Gallery</h2>
      <ul>
        {codeArtworks.map((artwork) => (
          <li key={artwork.id}>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
            <pre>{artwork.code}</pre>
            <p>Created by: {artwork.user.username}</p>
            <p>Created at: {artwork.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeArtGallery;
