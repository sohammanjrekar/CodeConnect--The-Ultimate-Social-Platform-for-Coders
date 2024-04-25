import React from 'react'

const dash = () => {
  return (
    <div className="h-full bg-gray-200 p-8">
  <div className="bg-white rounded-lg shadow-xl pb-8">
    <div
      x-data="{ openSettings: false }"
      className="absolute right-12 mt-4 rounded"
    >
      <button
        className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
        title="Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </button>
      <div
        className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
        style={{ display: "none" }}
      >
        <div className="py-2 border-b">
          <p className="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
          <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="text-sm text-gray-700">Share Profile</span>
          </button>
          <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span className="text-sm text-gray-700">Block User</span>
          </button>
          <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
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
            <span className="text-sm text-gray-700">More Info</span>
          </button>
        </div>
        <div className="py-2">
          <p className="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
          <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-sm text-gray-700">Report</span>
          </button>
        </div>
      </div>
    </div>
    <div className="w-full h-[250px]">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
        className="w-full h-full rounded-tl-lg rounded-tr-lg"
      />
    </div>
    <div className="flex flex-col items-center -mt-20">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
        className="w-40 border-4 border-white rounded-full"
      />
      <div className="flex items-center space-x-2 mt-2">
        <p className="text-2xl">Amanda Ross</p>
        <span className="bg-blue-500 rounded-full p-1" title="Verified">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-100 h-2.5 w-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </div>
      <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
      <p className="text-sm text-gray-500">New York, USA</p>
    </div>
    <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
      <div className="flex items-center space-x-4 mt-2">
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
          <span>Connect</span>
        </button>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clipRule="evenodd"
            />
          </svg>
          <span>Message</span>
        </button>
      </div>
    </div>
  </div>
  <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
    <div className="w-full flex flex-col 2xl:w-1/3">
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
        <ul className="mt-2 text-gray-700">
          <li className="flex border-y py-2">
            <span className="font-bold w-24">Full name:</span>
            <span className="text-gray-700">Amanda S. Ross</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Birthday:</span>
            <span className="text-gray-700">24 Jul, 1991</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Joined:</span>
            <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Mobile:</span>
            <span className="text-gray-700">(123) 123-1234</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Email:</span>
            <span className="text-gray-700">amandaross@example.com</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Location:</span>
            <span className="text-gray-700">New York, US</span>
          </li>
          <li className="flex border-b py-2">
            <span className="font-bold w-24">Languages:</span>
            <span className="text-gray-700">English, Spanish</span>
          </li>
          <li className="flex items-center border-b py-2 space-x-2">
            <span className="font-bold w-24">Elsewhere:</span>
            <a href="#" title="Facebook">
              <svg
                className="w-5 h-5"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 506.86 506.86"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: ".cls-1{fill:#1877f2;}.cls-2{fill:#fff;}"
                    }}
                  />
                </defs>
                <path
                  className="cls-1"
                  d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                />
                <path
                  className="cls-2"
                  d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                />
              </svg>
            </a>
            <a href="#" title="Twitter">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                  fill="#1da1f2"
                />
              </svg>
            </a>
            <a href="#" title="LinkedIn">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 333333 333333"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                  fill="#0077b5"
                />
              </svg>
            </a>
            <a href="#" title="Github">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width={0}
                height={0}
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
        <div className="relative px-4">
          <div className="absolute h-full border border-dashed border-opacity-20 border-secondary" />
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">Profile informations changed.</p>
              <p className="text-xs text-gray-500">3 min ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">
                Connected with{" "}
                <a href="#" className="text-blue-600 font-bold">
                  Colby Covington
                </a>
                .
              </p>
              <p className="text-xs text-gray-500">15 min ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">
                Invoice{" "}
                <a href="#" className="text-blue-600 font-bold">
                  #4563
                </a>{" "}
                was created.
              </p>
              <p className="text-xs text-gray-500">57 min ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">
                Message received from{" "}
                <a href="#" className="text-blue-600 font-bold">
                  Cecilia Hendric
                </a>
                .
              </p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">
                New order received{" "}
                <a href="#" className="text-blue-600 font-bold">
                  #OR9653
                </a>
                .
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
          {/* start::Timeline item */}
          <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full" />
            </div>
            <div className="w-11/12">
              <p className="text-sm">
                Message received from{" "}
                <a href="#" className="text-blue-600 font-bold">
                  Jane Stillman
                </a>
                .
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          {/* end::Timeline item */}
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full 2xl:w-2/3">
      <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
        <h4 className="text-xl text-gray-900 font-bold">About</h4>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla
          ad incidunt laboriosam, laudantium est unde natus cum numquam, neque
          facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at
          maxime, iste id dicta autem odio laudantium eligendi commodi
          distinctio!
        </p>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <h4 className="text-xl text-gray-900 font-bold">Posts</h4>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>





        <>
  <li>
    {/*second tweet*/}
    <article className="bg-gray-800 transition duration-350 ease-in-out">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-white ">
                Sonali Hirave
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @ShonaDesign . 16 April
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium text-white flex-shrink">
          Day 07 of the challenge{" "}
          <a href="#" className="text-blue-400">
            #100DaysOfCode
          </a>
          I was wondering what I can do with{" "}
          <a href="#" className="text-blue-400">
            #tailwindcss
          </a>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion. [07/100]
          <a href="#" className="text-blue-400">
            {" "}
            #WomenWhoCode #CodeNewbie
          </a>
        </p>
        <div className="md:flex-shrink pr-6 pt-3">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64"
            style={{
              height: 200,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)"
            }}
          >
            <img
              className="opacity-0 w-full h-full"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center py-4">
          <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
              </g>
            </svg>
            12.3 k
          </div>
          <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <g>
                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
              </g>
            </svg>
            14 k
          </div>
          <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <g>
                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
              </g>
            </svg>
            14 k
          </div>
          <div className="flex-1 flex items-center text-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <g>
                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z" />
                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <hr className="border-gray-800" />
    </article>
  </li>
  <li></li>
</>


        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-xl p-8">
    <div className="flex items-center justify-between">
      <h4 className="text-xl text-gray-900 font-bold">Connections (532)</h4>
      <a href="#" title="View All">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-700"
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
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
        title="View Profile"
      >
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
          className="w-16 rounded-full"
        />
        <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
        <p className="text-xs text-gray-500 text-center">
          UI/UX Design at Upwork
        </p>
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
        title="View Profile"
      >
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
          className="w-16 rounded-full"
        />
        <p className="text-center font-bold text-sm mt-1">Frances Mather</p>
        <p className="text-xs text-gray-500 text-center">
          Software Engineer at Facebook
        </p>
      </a>
    </div>
  </div>
</div>

  )
}

export default dash