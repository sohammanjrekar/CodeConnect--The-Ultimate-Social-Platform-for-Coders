"use client"
import React, { useEffect, useState } from 'react'

const Projectcards = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Initial page number
 const limit=8

  useEffect(() => {
    fetchProjects();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const fetchProjects = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/projects/projects/?page=${page}&limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        // Update projects state with fetched data
        setProjects(prevProjects => [...prevProjects, ...data]); // Append new projects to existing ones
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1); // Increment page number
  };

  return (
    <div className="bg-white flex items-center justify-center my-5">
      <div className="w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-sm border-violet-200 border">
        <div className="w-full flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            id="openModalBtn"
            className="flex items-center bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="text-white">New Project</p>
          </button>
        </div>
        <div className="w-full flex justify-center p-1 mb-4">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
              <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
              <img src={project.image} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-" alt="Project Image" />
              <p className="text-gray-700">{project.description}</p>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                {/* Add your additional content here */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={handleLoadMore} className="bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectcards
