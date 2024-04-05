import React, { useState } from 'react';
import FetchTags from './FetchTags';

const Addarticle = () => {
  const [title, setTitle] = useState(''); // State for title
  const [content, setContent] = useState('');

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
          categories: [1],
          tags: [1],
        }),
      });

      if (response.ok) {
        console.log('Blog post created successfully!');
        // Update UI optimistically if needed
      } else {
        console.error('Error creating blog post:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            {/* Input for title */}
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
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
            <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <button
                type="submit"
                onClick={handlePublish}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Publish post
              </button>
            </div>
          </div>
        </form>
      </div>
      <FetchTags />
    </>
  );
};

export default Addarticle;
