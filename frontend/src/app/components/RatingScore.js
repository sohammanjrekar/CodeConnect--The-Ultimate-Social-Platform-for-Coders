import React from 'react'

const RatingScore = ({ blogData, handleLike, handleDislike }) => {
  const handleLikeClick = () => {
    // Check if the user has already liked the post
    if (!blogData.liked && !blogData.disliked) {
      handleLike();
    }
  };

  const handleDislikeClick = () => {
    // Check if the user has already disliked the post
    if (!blogData.disliked && !blogData.liked) {
      handleDislike();
    }
  };
  return (
   
  <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5  mx-auto">
    <section className="bg-white p-5 m-3 rounded">
    <h4 className="text-xl">Rating Score</h4>
    <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
    <div
            className={`flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded ${
              blogData.liked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            onClick={handleLikeClick}
          >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-green-400 w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">{blogData.likes}</h2>
          <h4 className="inline text-gray-500 text-md">Very Satisfied</h4>
        </div>
      </div>
     
      <div
            className={`flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded ${
              blogData.disliked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            onClick={handleDislikeClick}
          >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-red-300 w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">{blogData.dislikes}</h2>
          <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default RatingScore
