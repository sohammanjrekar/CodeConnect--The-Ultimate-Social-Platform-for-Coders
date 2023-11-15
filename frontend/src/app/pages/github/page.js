import React from 'react'

const page = () => {
  return (
    <div>
        <div className="bg-gray-700">
    <div>
      {/* Navbar Component */}
      <nav className="w-full bg-indigo-500 flex justify-between px-6 py-4 shadow-md">
        <div className="flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 className="text-xl font-bold text-white cursor-pointer">
            Github Coder
          </h1>
        </div>
        <div className="flex space-x-10 items-center">
          <p className="text-lg cursor-pointer font-semibold text-white">Hom</p>
          <p className="text-lg cursor-pointer font-semibold text-white">
            About
          </p>
        </div>
      </nav>
      {/* Main Component */}
      <main className="mt-16 h-screen">
        {/* Search component */}
        <div className="flex items-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Shear"
            className="w-full text-lg px-4 py-4 rounded-md rounded-r-none outline-none"
          />
          <div className="flex space-x-1">
            <button className="bg-indigo-500 hover:bg-indigo-600 transition duration-100 text-xl py-4 px-8 rounded-md rounded-l-none text-white font-semibold">
              Go
            </button>
          </div>
          <button className="text-xl py-4 px-6 ml-4 rounded-md font-semibold hover:bg-gray-50 transition duration-100 bg-white text-gray-700">
            Clear
          </button>
        </div>
        <div className="flex flex-wrap space-x-4 justify-center">
          {/* User Results */}
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
          <div className="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            <img
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="image"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h2 className="text-white font-semibold text-xl">bradtraversy</h2>
              <p className="mt-1 text-gray-400 text-sm cursor-pointer">
                Visit Profile
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Component */}
      <footer className="bg-gray-800 items-center py-8">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-white text-md">
            Copyright © 2021 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  </div>
    </div>
  )
}

export default page
