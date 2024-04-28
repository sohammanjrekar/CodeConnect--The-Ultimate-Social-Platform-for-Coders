import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Clipboard from "clipboard";
import axios from "axios";
import Link from "next/link";

const Codecard = () => {
  const [codeData, setCodeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(true);

  function formatTimeAgo(timestamp) {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
  
    const timeDifference = currentTime.getTime() - postTime.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    if (daysDifference > 30) {
      const monthsDifference = Math.floor(daysDifference / 30);
      if (monthsDifference > 12) {
        const yearsDifference = Math.floor(monthsDifference / 12);
        return `Posted ${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
      }
      return `Posted ${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference > 0) {
      return `Posted ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else if (hoursDifference > 0) {
      return `Posted ${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference > 0) {
      return `Posted ${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    } else {
      return `Posted just now`;
    }
  }
  const fetchCodeSnippets = async (page) => {
    try {
      const limit = 10; // Specify the limit of code snippets per page
      const response = await axios.get(`http://127.0.0.1:8000/codereivew/code-snippets/?page=${page}&limit=${limit}`);
      const snippetsWithUserData = await Promise.all(response.data.results.map(async (snippet) => {
        const userResponse = await axios.get(`http://127.0.0.1:8000/account/users/${snippet.user}`);
        const userData = userResponse.data;
        return { ...snippet, userData };
      }));
      setCodeData(snippetsWithUserData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching code snippets:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCodeSnippets(currentPage); // Call fetch function when component mounts
  
    Prism.highlightAll(); // Highlight code syntax
  
    const clipboard = new Clipboard(".btn-copy", {
      text: function (trigger) {
        const snippetId = trigger.getAttribute("data-snippet-id");
        const snippet = codeData.find((item) => item.id === Number(snippetId));
        return snippet ? snippet.code : "";
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
  }, []); // Empty dependency array to run only once
  
  const handlePagination = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
       {loading ? (
        <p>Loading...</p>
      ) : (
      codeData.map((snippet) => (
        <div key={snippet.id} className="max-w-screen-md mx-auto my-4 w-full">
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <span className="font-light text-gray-600">{formatTimeAgo(snippet.created_at)}</span>
              <a
                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 ml-2"
                href="#"
              >
                {snippet.language}
              </a>
            </div>
            <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden mx-5 ">
              <div className="py-3 px-4 flex">
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-green-500" />
                <button
                  className="ml-auto flex items-center bg-gray-600 px-3 py-1 rounded-lg text-white hover:bg-gray-700 focus:outline-none btn-copy"
                  data-snippet-id={snippet.id}
                >
                  Copy
                </button>
              </div>
              <Link href={`/Codereview/${snippet.id}`}>
                <div className="py-4 text-sm px-4 mt-1 text-white text-xl max-h-60 overflow-hidden">
  <pre>
    <code className={`language-${snippet.language}`} >
      {snippet.code}
    </code>
  </pre>
</div>

              </Link>
            </div>
            <Link href={`/Codereview/${snippet.id}`}>
              <div className="px-6 py-4">
                 <div className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                  {snippet.title}
               </div>
                <p className="mt-2 text-gray-600">{snippet.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a className="text-blue-600 hover:underline" href="#">
                    Read more
                  </a>
                  <div>
                  <img
          className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          src={snippet.userData.avatar} // Accessing user avatar URL
          alt="avatar"
        />
                    <h1 className="text-gray-700 font-bold">{snippet.userData.first_name}  {snippet.userData.last_name}</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )))}
   {/* Pagination controls */}
   <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => handlePagination("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => handlePagination("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Codecard;
