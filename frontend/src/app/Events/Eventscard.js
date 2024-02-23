import React from 'react'

const Eventscard = () => {
  return (
    <div>
      <>
  {/* component */}
 
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
    <div className="min-h-28 ">
      <div className="max-w-screen-lg mx-auto py-4">
        <h2 className="font-bold text-center text-6xl text-slate-700 font-display">
        Events
        </h2>
        <p className="text-center mt-4 font-medium text-slate-500">
          - Connect to Same Minds -
        </p>
        <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
          <img
            src="https://loremflickr.com/320/240?random=1"
            className="absolute z-10 object-cover h-80 w-full h-full"
            alt=""
          />
          <a
            href=""
            className="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </a>
          <div className="relative z-20 p-10 h-full w-1/2">
            <h2 className="text-white text-3xl font-semibold">
              ASA fitoriana ny filazantsara iarivo avaradrano
            </h2>
            <h3 className="text-white text-xl">
              Docteur Irako Andriamahasoa Ammi
            </h3>
            <p className="text-sm text-slate-200 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              veritatis officiis cupiditate sed sint natus alias placeat,
              asperiores tempore reiciendis.
            </p>
            <div className="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
              <span className="flex gap-1 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                35
              </span>
              <span className="flex gap-1 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-sky-400 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                20
              </span>
              <span className="flex gap-1 items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-lime-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                15
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="https://loremflickr.com/320/240?random=1"
              className="object-cover h-52 w-full"
              alt=""
            />
            <div className="p-6 flex flex-col flex-1">
              <span className="block text-slate-400 font-semibold text-sm">
                16 Juillet 2016
              </span>
              <h3 className="mt-3 mb-2 font-bold text-lg">
                <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                  Fiofanana FLM SPIA 19 11 Fevrier 2023
                </a>
              </h3>
              <h2 className="text-xs text-slate-400 mb-3">
                Docteur Irako Andriamahasoa Ammi
              </h2>
              <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  35
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-sky-400 w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  20
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-lime-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  15
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="https://loremflickr.com/320/240?random=1"
              className="object-cover h-52 w-full"
              alt=""
            />
            <div className="p-6 flex flex-col flex-1">
              <span className="block text-slate-400 font-semibold text-sm">
                16 Juillet 2016
              </span>
              <h3 className="mt-3 mb-2 font-bold text-lg">
                <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                  Fiofanana FLM SPIA 19 11 Fevrier 2023
                </a>
              </h3>
              <h2 className="text-xs text-slate-400 mb-3">
                Docteur Irako Andriamahasoa Ammi
              </h2>
              <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  35
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-sky-400 w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  20
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-lime-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  15
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="https://loremflickr.com/320/240?random=1"
              className="object-cover h-52 w-full"
              alt=""
            />
            <div className="p-6 flex flex-col flex-1">
              <span className="block text-slate-400 font-semibold text-sm">
                16 Juillet 2016
              </span>
              <h3 className="mt-3 mb-2 font-bold text-lg">
                <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                  Fiofanana FLM SPIA 19 11 Fevrier 2023
                </a>
              </h3>
              <h2 className="text-xs text-slate-400 mb-3">
                Docteur Irako Andriamahasoa Ammi
              </h2>
              <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  35
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-sky-400 w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  20
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-lime-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  15
                </span>
              </div>
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

export default Eventscard
