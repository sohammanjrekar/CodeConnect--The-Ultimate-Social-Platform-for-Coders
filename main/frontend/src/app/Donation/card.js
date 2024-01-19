import React from 'react'

const card = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <div className="flex justify-center pt-10">
      <div className="bg-white rounded-lg profile-card w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="ml-2 text-lg font-semibold text-gray-800">
              Donation Profile
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Donate
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="border-b-2 border-gray-200 w-full">
            <ul className="flex justify-around">
              <li className="text-center">
                <a
                  href="#"
                  className="text-blue-500 pb-2 border-b-2 border-blue-500 font-semibold"
                >
                  Overview
                </a>
              </li>
              <li className="text-center">
                <a href="#" className="text-gray-600 pb-2 hover:text-blue-500">
                  Goal
                </a>
              </li>
              <li className="text-center">
                <a href="#" className="text-gray-600 pb-2 hover:text-blue-500">
                  Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src="https://unsplash.it/64/64"
            alt="Profile"
            className="rounded-full border-2 border-green-500 p-1"
          />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Arthur Taylor</h2>
          <p className="text-gray-600">48 donations in the last year</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9l-5 5-5-5"
              />
            </svg>
            <p className="text-lg font-semibold mt-2">$12,000.00</p>
            <p className="text-sm text-gray-600">Total Donation</p>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M12 6h.01M12 14h.01"
              />
            </svg>
            <p className="text-lg font-semibold mt-2">14-month</p>
            <p className="text-sm text-gray-600">Donation Streak</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default card
