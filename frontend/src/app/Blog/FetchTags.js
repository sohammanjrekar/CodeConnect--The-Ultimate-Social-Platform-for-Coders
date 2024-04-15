import React, { useState, useEffect } from 'react';

const FetchTags = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const tagsResponse = await fetch(`http://127.0.0.1:8000/blogs/tags/?page=${page}`);
        const categoriesResponse = await fetch(`http://127.0.0.1:8000/blogs/categories/?page=${page}`);
    
        const tagsData = await tagsResponse.json();
        const categoriesData = await categoriesResponse.json();
    
        console.log('Fetched Tags:', tagsData);
        console.log('Fetched Categories:', categoriesData);
    
        // Check if the response is an object, and if so, extract the array from it
        if (Array.isArray(tagsData.results)) {
          setTags(tagsData.results);
        } else {
          console.error('Unexpected API response format for tags:', tagsData);
        }
  
        if (Array.isArray(categoriesData.results)) {
          setCategories(categoriesData.results);
        } else {
          console.error('Unexpected API response format for categories:', categoriesData);
        }
  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    
    fetchData(1);
  }, []);
  

  const handleTagSelection = (tagId) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId) ? prevTags.filter((id) => id !== tagId) : [...prevTags, tagId]
    );
  };

  const handleCategorySelection = (categoryId) => {
    setSelectedCategory(categoryId);
  };



  return (
    <div>
  <link
    rel="stylesheet"
    href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
  />
 
 <div className="max-w-5xl mx-auto my-3">
            <h4 className='text-white'>Select Tags:</h4>
            {tags.map((tag) => (
              <button
                key={tag.id}
                className={`p-2 m-1 ${selectedTags.includes(tag.id) ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handleTagSelection(tag.id)}
              >
                {tag.name}
              </button>
            ))}
          </div>
          <div className="max-w-5xl mx-auto">
            <h4 className='text-white'>Select Category:</h4>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`p-2 m-1 ${selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handleCategorySelection(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div> </div>


  )
}

export default FetchTags
