import React from 'react'

const JobAD = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="bg-gray-300 h-screen flex items-center justify-center">
    <card className="w-1/4 grid grid-col bg-white text-center gap-4 p-4 rounded-lg">
      <div className="justify-right flex flex-row-reverse text-xs text-gray-800 items-center gap-3">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
        Ad
      </div>
      <div className="text-gray-500 text-xs">
        Get the latest job and industry news
      </div>
      <div className="flex flex-row justify-center gap-3">
        <img
          src="https://picsum.photos/100/100"
          className="rounded-full w-20 h-20"
        />
        <img src="https://picsum.photos/200/200" className="w-20 h-20" />
      </div>
      <div className="text-gray-700">
        Nadia, explore relevant opportunities with
        <span className="font-semibold">Google</span>
      </div>
      <div>
        <button className="hover:border-2 hover:bg-blue-200 delay-100 duration-100 text-blue-700 border border-blue-700 px-4 py-1 rounded-full">
          Follow
        </button>
      </div>
    </card>
  </div>
</>

    </div>
  )
}

export default JobAD
