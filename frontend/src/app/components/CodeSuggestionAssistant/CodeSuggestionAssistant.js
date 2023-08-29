// components/CodeSuggestionAssistant.js
import { useState, useEffect } from "react";
import axios from "axios";

const CodeSuggestionAssistant = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    // Fetch code snippets from the backend API
    axios
      .get("/api/code-snippets/")
      .then((response) => {
        setCodeSnippets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching code snippets:", error);
      });
  }, []);

  // Function to provide code suggestions based on user's coding habits
  const provideCodeSuggestions = (programmingLanguage) => {
    // You can implement the AI-powered logic here to provide personalized code suggestions
    // For simplicity, let's just provide a random code snippet from the same programming language
    const snippetsForLanguage = codeSnippets.filter(
      (snippet) => snippet.programming_language === programmingLanguage
    );
    const randomSnippet =
      snippetsForLanguage[
        Math.floor(Math.random() * snippetsForLanguage.length)
      ];
    return randomSnippet
      ? randomSnippet.snippet_text
      : "No suggestions available";
  };

  return (
    <div>
      <h2>AI-Driven Code Suggestion Assistant</h2>
      <p>Select a programming language:</p>
      <select>
        {codeSnippets.map((snippet) => (
          <option
            key={snippet.programming_language.id}
            value={snippet.programming_language.id}
          >
            {snippet.programming_language.name}
          </option>
        ))}
      </select>
      <button onClick={() => provideCodeSuggestions(selectedLanguage)}>
        Get Code Suggestion
      </button>
      <div>
        <h3>Code Suggestion</h3>
        <p>{codeSuggestion}</p>
      </div>
    </div>
  );
};

export default CodeSuggestionAssistant;
