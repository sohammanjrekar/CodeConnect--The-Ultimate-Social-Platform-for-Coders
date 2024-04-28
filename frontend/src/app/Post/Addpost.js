"use client"
import React, { useState, useContext } from 'react';
import axios from 'axios';

const AddPost = () => {

  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!imageFile) {
      setError('Please select an image file.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('content', content);
      formData.append('likes', 0);
      formData.append('dislikes', 0);
      formData.append('user', 1); // Set the user dynamically
  
      const publishResponse = await axios.post('http://localhost:8000/post/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (publishResponse.status === 201) {
        setContent('');
        setImageFile(null);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 500);
      } else {
        setError('Error creating post: ' + publishResponse.statusText);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 500);
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
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full fixed">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">
            Post Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            rows={4}
            className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
              sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="fileAttachment" className="block text-gray-700 text-sm font-bold mb-2">
            Attach File:
          </label>
          <input
             type="file"
             accept="image/*"
             onChange={handleImageUpload}
             
             id="file-upload" className=" border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out"
          />
        {imageFile && <p>Selected File: {imageFile.name}</p>}

        </div>
        <button
          type="submit"
          className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
        >
          Post
          <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" fill="#fff">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
          </svg>
        </button>
      </form>
      {showSuccess && (
        <div className="bg-green-200 text-green-800 py-2 text-center">
          <p>Post created successfully!</p>
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

export default AddPost;
