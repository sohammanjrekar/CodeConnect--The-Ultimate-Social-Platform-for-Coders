"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Likes from './Likes';
import Addcomments from './Addcomments';

const Page = ({ params }) => {
  const [snippet, setSnippet] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = params;
      if (id) {
        try {
          // Fetch code snippet data
          const snippetResponse = await axios.get(`http://127.0.0.1:8000/codereivew/code-snippets/${id}/`);
          setSnippet(snippetResponse.data);

          // Fetch user data
          const userId = snippetResponse.data.user;
          const userResponse = await axios.get(`http://127.0.0.1:8000/account/users/${userId}/`);
          setUserData(userResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [params]); // Include params in the dependency array

  // Function to handle like action
  const handleLike = () => {
    if (!snippet) return;
    
    // Make a PUT request to update likes count
    axios.put(`http://127.0.0.1:8000/codereivew/like/${snippet.id}/`, {
      ...snippet,
      likes: snippet.likes + 1
    })
      .then(response => {
        // Update snippet data with new likes count
        setSnippet(response.data);
      })
      .catch(error => {
        console.error('Error updating likes:', error);
      });
  };

  // Function to handle dislike action
  const handleDislike = () => {
    if (!snippet) return;
    const { id } = snippet;
    // Make a PUT request to update dislikes count
    axios.put(`http://127.0.0.1:8000/codereivew/dislike/${snippet.id}/`, {
      ...snippet,
      dislikes: snippet.dislikes + 1
    })
      .then(response => {
        // Update snippet data with new dislikes count
        setSnippet(response.data);
      })
      .catch(error => {
        console.error('Error updating dislikes:', error);
      });
  };

  // Check if snippet or user data is null before rendering
  if (!snippet || !userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section class="bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Code Review</h1>
          <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden my-4 p-5 px-40">
              <div id="header-buttons" className="py-3 px-6
               flex">
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-green-500" />
                {/* Copy Button */}
                <button
                  className="ml-auto flex items-center bg-gray-600 px-3 py-1 rounded-lg text-white hover:bg-gray-700 focus:outline-none btn-copy"
                  data-snippet-id={snippet.id}
                >
                  Copy
                </button>
              </div>
              <div id="code-area" className="py-4  px-4 mt-1 text-white text-xl">
                <pre>
                  <code className={`language-${snippet.language}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
              <div class="flex items-center justify-center px-4 py-2">
               <Likes postlike={snippet.likes} postdislike={snippet.dislikes} postId={snippet.id}/>
              </div>
            </div>
            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p class="text-sm text-blue-500 uppercase">Language: {snippet.language}</p>
              <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">{snippet.title}</a>
              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{snippet.description}</p>
              <a href={snippet.github_link} class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">GitHub Link</a>
              <div class="flex items-center mt-6">
                <img class="object-cover object-center w-20 h-20 rounded-full" src={userData.avatar} alt="" />
                <div class="mx-4">
                  <h1 class="text-sm text-gray-700 dark:text-gray-200">{userData.first_name}  {userData.last_name}</h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{userData.job_position}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
   </section>
   <Addcomments postid={snippet.id}/>
       <Footer />
    </>
  );
};

export default Page;
