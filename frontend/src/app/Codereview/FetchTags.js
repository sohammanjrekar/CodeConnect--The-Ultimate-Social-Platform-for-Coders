// FetchTags.js
import React, { useState, useEffect } from 'react';

const FetchTags = ({ selectedTags, setSelectedTags }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const limit = 12; // Specify the limit per page
        const tagsResponse = await fetch(`http://127.0.0.1:8000/codereivew/tags/?page=${page}&limit=12`);

        const tagsData = await tagsResponse.json();
        console.log('Fetched Tags:', tagsData.results);

        if (Array.isArray(tagsData.results)) {
          // Filter out duplicate tags based on tag ID
          const uniqueTags = tagsData.results.filter((tag) => !tags.find((existingTag) => existingTag.id === tag.id));
          // If it's the first page, replace the existing tags
          // Otherwise, append the new unique tags to the existing list
          setTags((prevTags) => (page === 1 ? uniqueTags : [...prevTags, ...uniqueTags]));
        } else {
          console.error('Unexpected API response format for tags:', tagsData);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleTagSelection = (tagId) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId) ? prevTags.filter((id) => id !== tagId) : [...prevTags, tagId]
    );
  };

  return (
    <div className="max-w-5xl mx-auto my-3">
      <h4 className='text-white'>Select Tags:</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {tags.map((tag) => (
            
            <button
            className={`group relative p-1 m-1 h-12 w-36 overflow-hidden rounded-lg ${selectedTags.includes(tag.id) ? 'bg-amber-400 text-white' : 'bg-gray-300'} shadow`}
            onClick={() => handleTagSelection(tag.id)}
          >
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">{tag.name}</span>
          </button>
          
          ))}
          <button class="group relative h-8 w-26 overflow-hidden rounded-2xl p-2 bg-green-500 text-sm font-bold text-white" onClick={handleLoadMore}>
       Load More
    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
        </>
      )}
    </div>
  );
};

export default FetchTags;
