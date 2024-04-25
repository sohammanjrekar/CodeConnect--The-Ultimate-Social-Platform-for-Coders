import React, { useState } from 'react';
import FetchTags from './FetchTags';

const AddArticle = ({ galleryId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (!imageFile) {
      setError('Please select an image file.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('likes', 0);
      formData.append('dislikes', 0);
      formData.append('is_published', true);
      formData.append('featured_image', imageFile);
  
      // Convert selectedTags and selectedCategories to JSON strings and append them to formData
      formData.append('categories', JSON.stringify(selectedCategories));
      formData.append('tags', JSON.stringify(selectedTags));
  
      const response = await fetch('http://localhost:8000/blogs/blog-posts/', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setShowSuccess(true);
        setTitle('');
        setContent('');
        setImageUrl(null);
        setTimeout(() => {
          setShowSuccess(false);
        }, 500);
      } else {
        setError('Error sending data to backend: ' + response.statusText);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 500);
        console.error('Error sending data to backend:', response.statusText);
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
      console.error('An error occurred:', error);
    }
  };
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file);
    setError(null);
    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-5xl mx-auto dark:bg-gray-800 rounded-t-lg">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4 p-6 w-full dark:bg-gray-800 rounded-lg border  dark:border-gray-600">
          <h1 className="text-center text-white text-2xl">Add Blog Post</h1>
          <div className="py-2 px-4 dark:bg-gray-800">
            <label htmlFor="title" className="sr-only">Title</label>
            <input
              id="title"
              type="text"
              className="block px-0 w-full text-sm text-white  border-0 bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="py-2 px-4  dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">Content</label>
            <textarea
              id="editor"
              rows={8}
              className="block px-0 w-full text-sm text-white  border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          {/* Image upload */}
          <div className="py-2 px-4  dark:bg-gray-800">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-full flex justify-center items-center px-4 py-6  text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Select a file</span>
            </label>
            {/* Display image preview */}
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Uploaded Image Preview" className="w-64 h-64 object-cover" />
              </div>
            )}
          </div>
          <FetchTags
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <div className="py-2 px-4 rounded-b-lg">
            <button
              type="submit"
              className="inline-flex items-center my-5 px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
        </div>
      </form>
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

export default AddArticle;
