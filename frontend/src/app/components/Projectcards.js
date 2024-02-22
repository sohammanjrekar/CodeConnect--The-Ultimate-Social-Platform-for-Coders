import React from 'react'

const Projectcards = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="bg-white flex items-center justify-center mb-5">
    <div className="w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-sm border-violet-200 border">
      <div className="w-full flex justify-between items-center p-3">
        <h2 className="text-xl font-semibold">My Project</h2>
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
        {/* Card 1 */}
        <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">Project 1</h2>
          <img
            src="https://i.ytimg.com/vi/CQZxeoQeo5c/maxresdefault.jpg"
          
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
          />
          <p className="text-gray-700">
            Description of Project 2 goes here. You can provide more details
            about the project.
          </p>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img
                src="https://placekitten.com/48/48"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/49/49"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/50/50"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/51/51"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/52/52"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
            </dd>
          </div>
        </div>
        {/* Card 2 */}
        <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">Project 2</h2>
          <img
            src="https://s.tmimgcdn.com/scr/110900/110911-original.jpg"
          
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
          />
          <p className="text-gray-700">
            Description of Project 2 goes here. You can provide more details
            about the project.
          </p>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img
                src="https://placekitten.com/48/48"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/49/49"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/50/50"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/51/51"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/52/52"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
            </dd>
          </div>
        </div>
        {/* Card 3 */}
        <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">Project 3</h2>
          <img
            src="https://img.freepik.com/free-vector/mathematics-tiny-persons-vector-illustration-landing-page-template-design_1995-410.jpg?size=626&ext=jpg"
          
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
          />
          <p className="text-gray-700">
            Description of Project 2 goes here. You can provide more details
            about the project.
          </p>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img
                src="https://placekitten.com/48/48"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/49/49"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/50/50"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/51/51"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/52/52"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
            </dd>
          </div>
        </div>
        {/* Card 4 */}
        <div className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">Project 4</h2>
          <img
            src="https://th.bing.com/th/id/OIP.17GxaszCqXO11i_92m1_gAHaEH?w=740&h=411&rs=1&pid=ImgDetMain"
          
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
          />
          <p className="text-gray-700">
            Description of Project 2 goes here. You can provide more details
            about the project.
          </p>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <img
                src="https://placekitten.com/48/48"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/49/49"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/50/50"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/51/51"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
              <img
                src="https://placekitten.com/52/52"
                alt=""
                className="w-6 h-6 rounded-full bg-violet-100"
                loading="lazy"
              />
            </dd>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      id="myModal"
      className="fixed inset-0 z-10 overflow-hidden backdrop-blur-lg hidden flex items-center justify-center transition-transform duration-300"
    >
      <div className="modal-container p-6 backdrop-blur-sm bg-white/90 w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Create New Project</h2>
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          className="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
        />
        {/* Flex layout for lg and md screens */}
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:pr-4">
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <input
              id="projectDescription"
              className="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
            />
          </div>
          <div className="lg:w-1/2">
            <label
              htmlFor="inviteFriend"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Invite Friend
            </label>
            <input
              type="text"
              id="inviteFriend"
              className="w-full p-2 mb-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md mr-2"
            onclick="createProject()"
          >
            Create
          </button>
          <button
            className="bg-gradient-to-r from-gray-100 to-slate-200  border border-fuchsia-00 hover:border-violet-100 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            onclick="closeModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Projectcards
