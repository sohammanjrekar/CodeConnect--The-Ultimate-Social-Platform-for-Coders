"use client"
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Clipboard from "clipboard";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const Page = ({ params }) => {
  const { id } = params;
  const [challenge, setChallenge] = useState(null);
  const [userData, setUserData] = useState(null);
  const [sol ,setsol] = useState(null);
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          // Fetch code challenge data
          const challengeResponse = await axios.get(
            `http://127.0.0.1:8000/codingchallenges/coding-challenges/${id}/`
          );
          setChallenge(challengeResponse.data);

          // Fetch user data
          const userId = challengeResponse.data.author;
          const userResponse = await axios.get(
            `http://127.0.0.1:8000/account/users/${userId}/`
          );
          setUserData(userResponse.data);

          // Fetch solutions data
          const solutionsResponse = await axios.get(
            `http://127.0.0.1:8000/codingchallenges/solution/${id}/${userId}/`
          );
          setSolutions(solutionsResponse.data[0]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    Prism.highlightAll(); // Highlight code syntax

    const clipboard = new Clipboard(".btn-copy", {
      text: function (trigger) {
        const snippetId = trigger.getAttribute("data-snippet-id");
        const snippet = solutions.find((item) => item.id === Number(snippetId));
        return snippet ? snippet.allsolution : "";
      },
    });
    

    clipboard.on("success", function (e) {
      e.clearSelection();
      const originalText = e.trigger.textContent;
      e.trigger.textContent = "Copied";
      setTimeout(() => {
        e.trigger.textContent = originalText;
      }, 2000); // Change back to original text after 2 seconds
    });

    clipboard.on("error", function (e) {
      console.error("Clipboard error:", e.action);
    });

    return () => clipboard.destroy();
  }, [id]); // Include id in the dependency array

  // Function to handle like action
  const handleLike = () => {
    if (!challenge) return;
    const { id } = challenge;
    // Make a PUT request to update likes count
    axios
      .put(`http://127.0.0.1:8000/codereview/code-reviews/${id}/`, {
        ...challenge,
        likes: challenge.likes + 1,
      })
      .then((response) => {
        // Update challenge data with new likes count
        setChallenge(response.data);
      })
      .catch((error) => {
        console.error("Error updating likes:", error);
      });
  };

  // Function to handle dislike action
  const handleDislike = () => {
    if (!challenge) return;
    const { id } = challenge;
    // Make a PUT request to update dislikes count
    axios
      .put(`http://127.0.0.1:8000/codereview/code-reviews/${id}/`, {
        ...challenge,
        dislikes: challenge.dislikes + 1,
      })
      .then((response) => {
        // Update challenge data with new dislikes count
        setChallenge(response.data);
      })
      .catch((error) => {
        console.error("Error updating dislikes:", error);
      });
  };

// Check if challenge or user data is null before rendering
if (!challenge || !userData) {
  return <div>Loading...</div>;
}

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Challenge {challenge.id}
          </h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-blue-500 uppercase">
                Language: {challenge.language}
              </p>
              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
              >
                {challenge.title}
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {challenge.description}
              </p>
              <a
                href={challenge.github_link}
                className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
              >
                GitHub Link
              </a>
            </div>
            <div className="mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden my-4 ">
              <div
                id="header-buttons"
                className="py-3 px-6 flex"
              >
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-green-500" />
                {/* Copy Button */}
                <button
                  className="ml-auto flex items-center bg-gray-600 px-3 py-1 rounded-lg text-white hover:bg-gray-700 focus:outline-none btn-copy"
                  data-challenge-id={challenge.id}
                >
                  Copy
                </button>
              </div>
              <div
                id="code-area"
                className="py-4 text-sm px-4 mt-1 text-white text-xl"
              >
                <pre>
                  <code className={`language-${challenge.language}`}>
                    {solutions.allsolution}
                  </code>
                </pre>
              </div>
              <div className="flex items-center justify-center px-4 py-2">
                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-20 h-20 rounded-full"
                    src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713680848/User/${userData.avatar}`}
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      {userData.first_name} {userData.last_name}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lead Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLike}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-4"
                >
                  Like ({challenge.likes})
                </button>
                <button
                  onClick={handleDislike}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Dislike ({challenge.dislikes})
                </button>
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
