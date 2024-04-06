import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [postContent, setPostContent] = useState('');
  const [fileAttachment, setFileAttachment] = useState(null);
  const [filename, setFilename] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        content: postContent,
        attach_files: filename, // Use the filename variable
        is_active: true,
        likes: 4294967295,
        comment_count: 4294967295,
        user: 0,
        hashtags: [0],
      };
  
      const response = await axios.post('http://127.0.0.1:8000/post/posts/', postData);
  
      if (response.status === 200) {
        console.log('Post created successfully!');
        setPostContent('');
        setFileAttachment(null);
        setFilename(''); // Reset filename after successful post
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  const handleFileChange = (e) => {
    setFileAttachment(e.target.files[0]);
    setFilename(e.target.files[0].name); // Save the filename
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <form onSubmit={handleSubmit}>
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
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="fileAttachment" className="block text-gray-700 text-sm font-bold mb-2">
            Attach File:
          </label>
          <input
            type="file"
            id="fileAttachment"
            name="fileAttachment"
            onChange={handleFileChange}
            className="border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out"
          />
          {filename && <p>Selected File: {filename}</p>}
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
    </div>
  );
};

export default AddPost;
