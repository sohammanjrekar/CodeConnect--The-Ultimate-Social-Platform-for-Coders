"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ListOfChallenge = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/codingchallenges/coding-challenges/');
        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);
  return (
    <div>
      <>
  {/* Component */}
  <div className="bg-white p-8 rounded-md w-full">
    <div className="flex items-center justify-between pb-6">
      <div>
        <h2 className="text-gray-600 font-semibold">Challenges List</h2>
        <span className="text-xs">All challenge items</span>
      </div>



      <div className="flex items-center justify-between">
        <div className="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="bg-gray-50 outline-none ml-1 block"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-8">
          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
            New Challenge
          </button>
          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
            Create
          </button>
        </div>
      </div>
    </div>
    <div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Created at
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Submissions
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Language
                </th>
              </tr>
            </thead>
            <tbody>
            {challenges.map((challenge) => (
              <tr>
                <Link href={`/Codechallenges/${challenge.id}`}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                  {challenge.title}
                  </p>
                </td>
                </Link>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{challenge.difficulty}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                  {challenge.created_at}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">43</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden=""
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative">{challenge.language}</span>
                  </span>
                </td>
              </tr>
            ))};
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default ListOfChallenge
