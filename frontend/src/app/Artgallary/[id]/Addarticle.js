import React, { useState } from 'react';

const AddArticle = ({ galleryId }) => {
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null); // State to store uploaded image file
  const [imageUrl, setImageUrl] = useState(null); // State to store uploaded image URL
  const [error, setError] = useState(null); // State to store error messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false); // State to manage the visibility of error message

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check if an image file is selected
    if (!imageFile) {
      setError('Please select an image file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', imageFile); // Append the file object to the FormData
      console.log(formData)
     
      // Upload the image to the backend
      const imageUploadResponse = await fetch('http://localhost:8000/artgallery/images/', {
        method: 'POST',
        body: formData,
      });

      // Check if the image upload was successful
      if (!imageUploadResponse.ok) {
        setError('Failed to upload image: ' + imageUploadResponse.statusText);
        return;
      }

      const imageUploadData = await imageUploadResponse.json();
      setImageUrl(imageUploadData.image); // Set the uploaded image URL

      // Send other data along with the image URL to your backend API
      const articleData = {
        image: imageUploadData.image,
        description: content,
        likes: 0,
        dislikes: 0,
        gallery:1,
        designer: 18,
      };
      console.log(JSON.stringify(articleData))
      const publishResponse = await fetch('http://localhost:8000/artgallery/images/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (publishResponse.ok) {
        console.log('Data sent successfully!', publishResponse);
        setContent('');
        setImageUrl(null);
        setShowSuccess(true); // Show success message
        setTimeout(() => {
          setShowSuccess(false); // Hide success message after 0.5 seconds
        }, 500);
      } else {
        setError('Error sending data to backend: ' + publishResponse.statusText);
        setShowError(true); // Show error message
        setTimeout(() => {
          setShowError(false); // Hide error message after 0.5 seconds
        }, 500);

        console.error('Error sending data to backend:', publishResponse.statusText);
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
      console.error('An error occurred:', error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file); // Store the file object in state
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
        <div className="mb-4 p-6 w-full dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
          <h1 className="text-center text-white text-2xl">Add UI Design</h1>
          <div className="py-2 px-4 bg-white dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">Publish post</label>
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
          <div className="py-2 px-4 bg-white dark:bg-gray-800">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-full flex justify-center items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
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
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Uploaded Image Preview" className="w-64 h-64 object-cover" />
              </div>
            )}
          </div>
          <div>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          </div>
          <div className="py-2 px-4 rounded-b-lg">
            <button
              type="submit"
              className="inline-flex items-center my-5 px-8 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              // disabled={!imageUrl}
            >
              Publish post
            </button>
          </div>
        </div>
      </form>
      {showSuccess && (
        <div className="bg-green-200 text-green-800 py-2 text-center">
          <p>Art published successfully!</p>
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
