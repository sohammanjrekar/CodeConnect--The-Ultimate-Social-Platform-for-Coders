import React, { useState, useEffect } from 'react';

const FetchTags = ({ selectedTags, setSelectedTags, setSelectedLanguages, setSelectedTools }) => {
  const [tags, setTags] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page for tags
  const [currentLangPage, setCurrentLangPage] = useState(1); // Track current page for languages
  const [currentToolPage, setCurrentToolPage] = useState(1); // Track current page for tools

  useEffect(() => {
    const fetchData = async (page, endpoint, setData) => {
      try {
        const limit = 12; // Specify the limit per page
        const response = await fetch(`http://127.0.0.1:8000/codereivew/${endpoint}/?page=${page}&limit=12`);
        const data = await response.json();
        console.log(`Fetched ${endpoint}:`, data.results);

        if (Array.isArray(data.results)) {
          // Filter out duplicate items based on ID
          const uniqueItems = data.results.filter((item) => !setData.find((existingItem) => existingItem.id === item.id));
          // If it's the first page, replace the existing items
          // Otherwise, append the new unique items to the existing list
          setData((prevData) => (page === 1 ? uniqueItems : [...prevData, ...uniqueItems]));
        } else {
          console.error(`Unexpected API response format for ${endpoint}:`, data);
        }

        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${endpoint} data:`, error);
        setLoading(false);
      }
    };

    fetchData(currentPage, 'tags', setTags);
    fetchData(currentLangPage, 'languages', setLanguages);
    fetchData(currentToolPage, 'tools', setTools);
  }, [currentPage, currentLangPage, currentToolPage]);

  const handleLoadMore = (type) => {
    if (type === 'tags') {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (type === 'languages') {
      setCurrentLangPage((prevPage) => prevPage + 1);
    } else if (type === 'tools') {
      setCurrentToolPage((prevPage) => prevPage + 1);
    }
  };

  const handleSelection = (type, itemId) => {
    if (type === 'tags') {
      setSelectedTags((prevTags) => (prevTags.includes(itemId) ? prevTags.filter((id) => id !== itemId) : [...prevTags, itemId]));
    } else if (type === 'languages') {
      setSelectedLanguages((prevLangs) => (prevLangs.includes(itemId) ? prevLangs.filter((id) => id !== itemId) : [...prevLangs, itemId]));
    } else if (type === 'tools') {
      setSelectedTools((prevTools) => (prevTools.includes(itemId) ? prevTools.filter((id) => id !== itemId) : [...prevTools, itemId]));
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-3">
      <h4 className="text-white">Select Tags:</h4>
      {/* Tag selection */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={`group relative p-1 m-1 h-12 w-36 overflow-hidden rounded-lg ${
                selectedTags.includes(tag.id) ? 'bg-amber-400 text-white' : 'bg-gray-300'
              } shadow`}
              onClick={() => handleSelection('tags', tag.id)}
            >
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">{tag.name}</span>
            </button>
          ))}
          {/* Load more button for tags */}
          <button className="group relative h-8 w-26 overflow-hidden rounded-2xl p-2 bg-green-500 text-sm font-bold text-white" onClick={() => handleLoadMore('tags')}>
            Load More
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </>
      )}

      {/* Language selection */}
      <h4 className="text-white">Select Languages:</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {languages.map((lang) => (
            <button
              key={lang.id}
              className={`group relative p-1 m-1 h-12 w-36 overflow-hidden rounded-lg ${
                selectedLanguages.includes(lang.id) ? 'bg-amber-400 text-white' : 'bg-gray-300'
              } shadow`}
              onClick={() => handleSelection('languages', lang.id)}
            >
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">{lang.name}</span>
            </button>
          ))}
          {/* Load more button for languages */}
          <button className="group relative h-8 w-26 overflow-hidden rounded-2xl p-2 bg-green-500 text-sm font-bold text-white" onClick={() => handleLoadMore('languages')}>
            Load More
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </>
      )}

      {/* Tool selection */}
      <h4 className="text-white">Select Tools:</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`group relative p-1 m-1 h-12 w-36 overflow-hidden rounded-lg ${
                selectedTools.includes(tool.id) ? 'bg-amber-400 text-white' : 'bg-gray-300'
              } shadow`}
              onClick={() => handleSelection('tools', tool.id)}
            >
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">{tool.name}</span>
            </button>
          ))}
          {/* Load more button for tools */}
          <button className="group relative h-8 w-26 overflow-hidden rounded-2xl p-2 bg-green-500 text-sm font-bold text-white" onClick={() => handleLoadMore('tools')}>
            Load More
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </>
      )}
    </div>
  );
};

export default FetchTags;
