"use client"
import React, { useState } from 'react';
import axios from 'axios';
import FetchTags from './FetchTags';

const Addproject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePost = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/codereivew/code-snippets/', {
        title,
        description,
        code,
        github_link: githubLink,
        tags: selectedTags.map(tag => tag.id), // Extract ids of selected tags
        languages: selectedLanguages.map(lang => lang.id), // Extract ids of selected languages
        tools: selectedTools.map(tool => tool.id), // Extract ids of selected tools
        user: 1 // Assuming user ID is hardcoded for now
      });

      // Reset form inputs and tags after successful post
      setTitle('');
      setDescription('');
      setCode('');
      setGithubLink('');
      setSelectedTags([]);
      setSelectedLanguages([]);
      setSelectedTools([]);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 500);
    } catch (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 500);
      console.error('Error posting code snippet:', error);
    }
  };

  return (
    <div>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className="description bg-gray-100 sec p-3 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Github Link"
          type="text"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />
        <textarea
          className="description bg-gray-100 sec p-3 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FetchTags
        selectedTags={selectedTags} // Pass down selectedTags state
        setSelectedTags={setSelectedTags} // Pass down setSelectedTags function
        selectedLanguages={selectedLanguages} // Pass down selectedLanguages state
        setSelectedLanguages={setSelectedLanguages} // Pass down setSelectedLanguages function
        selectedTools={selectedTools} // Pass down selectedTools state
        setSelectedTools={setSelectedTools} // Pass down setSelectedTools function
      />
      {/* Rest of the component */}
    </div>
      
        <div className="selected-languages">
          {selectedLanguages.map((lang, index) => (
            <div key={index} className="selected-language">
              <span>{lang.name}</span>
              <button onClick={() => removeLanguage(index)}>Remove</button>
            </div>
          ))}
        </div>
       
        <div className="selected-tools">
          {selectedTools.map((tool, index) => (
            <div key={index} className="selected-tool">
              <span>{tool.name}</span>
              <button onClick={() => removeTool(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="buttons grid grid-cols-2 justify left-28 mt-5">
          <button
            className="middle none center  mx-5 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true" 
          >
            Cancel
          </button>
          <button
            className="middle none center rounded-lg mx-5 bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
        {showSuccess && (
          <div className="bg-green-200 text-green-800 py-2 text-center">
            <p>Blog post published successfully!</p>
          </div>
        )}
        {showError && (
          <div className="bg-red-200 text-red-800 py-2 text-center">
            <p>{error}</p>
          </div>
        )}
      </div>
 
  );
};

export default Addproject;
