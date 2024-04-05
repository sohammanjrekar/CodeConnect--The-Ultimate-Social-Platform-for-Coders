"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Page = ({ params }) => {
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    const { id } = params;
    if (id) {
      // Fetch code snippet data
      axios.get(`http://127.0.0.1:8000/codereivew/code-snippets/${id}/`)
        .then(response => {
          setSnippet(response.data);
        })
        .catch(error => {
          console.error('Error fetching code snippet:', error);
        });
    }
  }, [params]); // Include params in the dependency array

  // Function to handle like action
  const handleLike = () => {
    const { id } = params;
    // Make a PUT request to update likes count
    axios.put(`http://127.0.0.1:8000/codereivew/code-reviews/${id}/`, {
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
    // Make a PUT request to update dislikes count
    axios.put(`http://127.0.0.1:8000/codereview/code-reviews/${snippet.id}/`, {
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

  // Check if snippet is null before rendering
  if (!snippet) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Code Review</h1>
          <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden my-4">
              <div id="header-buttons" className="py-3 px-4 flex">
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
              <div id="code-area" className="py-4 text-sm px-4 mt-1 text-white text-xl">
                <pre>
                  <code className={`language-${snippet.language}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
              <div class="flex items-center justify-center px-4 py-2">
                <button onClick={handleLike} class="bg-green-500 text-white px-4 py-2 rounded-md mr-4">
                  Like ({snippet.likes})
                </button>
                <button onClick={handleDislike} class="bg-red-500 text-white px-4 py-2 rounded-md">
                  Dislike ({snippet.dislikes})
                </button>
              </div>
            </div>
            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p class="text-sm text-blue-500 uppercase">Language: {snippet.language}</p>
              <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">{snippet.title}</a>
              <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{snippet.description}</p>
              <a href={snippet.github_link} class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">GitHub Link</a>
              <div class="flex items-center mt-6">
                <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                <div class="mx-4">
                  <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
       
  <div className="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4  max-w-md md:max-w-2xl">
    <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div className="flex flex-wrap -mx-3 mb-6">
        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
          Add a new comment
        </h2>
        <div className="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required=""
            defaultValue={""}
          />
        </div>
        <div className="w-full md:w-full flex items-start md:w-full px-3">
          <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
            <svg
              fill="none"
              className="w-5 h-5 text-gray-600 mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
          </div>
          <div className="-mr-1">
            <input
              type="submit"
              className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              defaultValue="Post Comment"
            />
          </div>
        </div>
      </div>
    </form>

  </div>
 
  <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto  max-w-md md:max-w-2xl ">
    {/*horizantil margin is just for display*/}
    <div className="flex items-start px-4 py-6">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
            Brad Adams{" "}
          </h2>
          <small className="text-sm text-gray-700">22h ago</small>
        </div>
        <p className="text-gray-700">Joined 12 SEP 2012. </p>
        <p className="mt-3 text-gray-700 text-sm">
          Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
          amet!
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex mr-2 text-gray-700 text-sm mr-3">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>12</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-8">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>8</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-4">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span>share</span>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
