import React, { useState } from 'react';
import FetchTags from './FetchTags';

const Addarticle = () => {
  const [title, setTitle] = useState(''); // State for title
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false); // State to track whether the blog post is published
  const [selectedTags, setSelectedTags] = useState([]); // State for selected tags
  const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
  const [showThanks, setShowThanks] = useState(false); // State to control the display of the "Thanks" message

  const handlePublish = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/blogs/blog-posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title, // Use the title state
          content,
          likes: 0,
          dislikes: 0,
          is_published: true,
          author: 1,
          categories: selectedCategories, // Use selected categories state
          tags: selectedTags, // Use selected tags state
        }),
      });

      if (response.ok) {
        console.log('Blog post created successfully!');
        setPublished(true); // Update published state to true
        setShowThanks(true); // Show the "Thanks" message
        setTimeout(() => {
          setShowThanks(false); // Hide the "Thanks" message after 3 seconds
          // Clear input fields
          setTitle('');
          setContent('');
          setSelectedTags([]);
          setSelectedCategories([]);
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        console.error('Error creating blog post:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto dark:bg-gray-800 rounded-t-lg">
       
        <form onSubmit={(e) => e.preventDefault()}>
          
          <div className="mb-4 p-6 w-full dark:bg-gray-800 rounded-lg border border-gray-200  dark:border-gray-600">
          <h1 className='text-center text-white text-2xl'>Add Blog</h1>
            {/* Input for title */}
            <div className="my-3 px-4 bg-white rounded-t-lg dark:bg-gray-800 py-4">
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            {/* Input for content */}
            <div className="py-2 px-4 bg-white dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">
                Publish post
              </label>
              <textarea
                id="editor"
                rows={8}
                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            {/* Select multiple tags */}
            <FetchTags
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <div className="py-2 px-4 rounded-b-lg">
              <button
                type="submit"
                onClick={handlePublish}
                className="inline-flex items-center  my-5 px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Publish post
              </button>
            </div>
          </div>
        </form>
      </div>

      {showThanks && (
        <div className="bg-green-200 text-green-800 py-2 text-center">
          <p>Thanks for publishing your post!</p>
        </div>
      )}
    </>
  );
};

export default Addarticle;
