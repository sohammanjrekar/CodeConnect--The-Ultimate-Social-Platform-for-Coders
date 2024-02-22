import React from 'react'

const GithubHistory = () => {
  return (
    <div className="mx-auto">
      <>
  {/* component */}
  <div className="col-span-12 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6 ">
    {/* Card */}
    <a
      className="md:order-2 relative before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg after:absolute after:inset-x-0.5 after:bottom-0.5 after:z-10 after:w-[calc(100%-4px)] after:h-24 after:rounded-b-xl after:bg-gradient-to-t after:from-white after:via-white/[.9] after:to-white/[.4]"
      href="#"
      target="_blank"
    >
      <div className="relative overflow-hidden w-full h-full rounded-xl">
        <div className="p-6 flex bg-white flex-col justify-between md:min-h-[480px] text-center rounded-xl dark:border-gray-700">
          <div>
            <svg
              className="w-8 h-8 mx-auto mb-4"
              width={33}
              height={32}
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6991_185972)">
                <path
                  d="M16.3333 0C7.49331 0 0.333313 7.16 0.333313 16C0.333313 23.08 4.91331 29.06 11.2733 31.18C12.0733 31.32 12.3733 30.84 12.3733 30.42C12.3733 30.04 12.3533 28.78 12.3533 27.44C8.33331 28.18 7.29331 26.46 6.97331 25.56C6.79331 25.1 6.01331 23.68 5.33331 23.3C4.77331 23 3.97331 22.26 5.31331 22.24C6.57331 22.22 7.47331 23.4 7.77331 23.88C9.21331 26.3 11.5133 25.62 12.4333 25.2C12.5733 24.16 12.9933 23.46 13.4533 23.06C9.89331 22.66 6.17331 21.28 6.17331 15.16C6.17331 13.42 6.79331 11.98 7.81331 10.86C7.65331 10.46 7.09331 8.82 7.97331 6.62C7.97331 6.62 9.31331 6.2 12.3733 8.26C13.6533 7.9 15.0133 7.72 16.3733 7.72C17.7333 7.72 19.0933 7.9 20.3733 8.26C23.4333 6.18 24.7733 6.62 24.7733 6.62C25.6533 8.82 25.0933 10.46 24.9333 10.86C25.9533 11.98 26.5733 13.4 26.5733 15.16C26.5733 21.3 22.8333 22.66 19.2733 23.06C19.8533 23.56 20.3533 24.52 20.3533 26.02C20.3533 28.16 20.3333 29.88 20.3333 30.42C20.3333 30.84 20.6333 31.34 21.4333 31.18C24.6098 30.108 27.37 28.0667 29.3254 25.3435C31.2807 22.6203 32.3328 19.3525 32.3333 16C32.3333 7.16 25.1733 0 16.3333 0Z"
                  fill="currentColor"
                  className="fill-black dark:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_6991_185972">
                  <rect
                    width={32}
                    height={32}
                    fill="white"
                    transform="translate(0.333313)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Open source
            </h3>
            <p className="mt-2 text-gray-500">
              Open Source Software. Find the entire code on our GitHub.
            </p>
          </div>
          <div className="mt-8">
            {/* Timeline */}
            <ul className="flex flex-col text-left space-y-1.5">
              <li className="relative flex gap-x-4 pb-7 overflow-hidden">
                <div className="mt-0.5 relative h-full">
                  <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600" />
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8462 12.3462C16.8462 15.0226 14.6765 17.1923 12 17.1923C9.32354 17.1923 7.15385 15.0226 7.15385 12.3462M16.8462 12.3462C16.8462 9.6697 14.6765 7.5 12 7.5C9.32354 7.5 7.15385 9.6697 7.15385 12.3462M16.8462 12.3462H22.5M7.15385 12.3462H1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Mike
                  </span>{" "}
                  sent a message yesterday
                </p>
              </li>
              <li className="relative flex gap-x-4 pb-7 overflow-hidden">
                <div className="mt-0.5 relative h-full">
                  <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600" />
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.73077 8.90727C6.51507 8.90727 7.96154 7.4698 7.96154 5.69658C7.96154 3.92337 6.51507 2.4859 4.73077 2.4859C2.94646 2.4859 1.5 3.92337 1.5 5.69658C1.5 7.4698 2.94646 8.90727 4.73077 8.90727ZM4.73077 8.90727V15.3286M4.73077 15.3286C2.94646 15.3286 1.5 16.7661 1.5 18.5393C1.5 20.3125 2.94646 21.75 4.73077 21.75C6.51507 21.75 7.96154 20.3125 7.96154 18.5393C7.96154 16.7661 6.51507 15.3286 4.73077 15.3286ZM19.2692 15.3286C17.4849 15.3286 16.0385 16.7661 16.0385 18.5393C16.0385 20.3125 17.4849 21.75 19.2692 21.75C21.0535 21.75 22.5 20.3125 22.5 18.5393C22.5 16.7661 21.0535 15.3286 19.2692 15.3286ZM19.2692 15.3286V7.30193C19.2692 6.41532 18.546 5.69658 17.6538 5.69658L15.2308 5.69658M15.2308 8.74103V2.65214C15.2308 2.29459 14.7958 2.11553 14.5414 2.36835L11.4779 5.4128C11.3202 5.56953 11.3202 5.82364 11.4779 5.98037L14.5414 9.02482C14.7958 9.27764 15.2308 9.09858 15.2308 8.74103Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    John
                  </span>{" "}
                  commited on{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Calendars
                  </span>{" "}
                  component
                </p>
              </li>
              <li className="relative flex gap-x-4 pb-7 overflow-hidden">
                <div className="mt-0.5 relative h-full">
                  <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600" />
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.73077 8.90727C6.51507 8.90727 7.96154 7.4698 7.96154 5.69658C7.96154 3.92337 6.51507 2.4859 4.73077 2.4859C2.94646 2.4859 1.5 3.92337 1.5 5.69658C1.5 7.4698 2.94646 8.90727 4.73077 8.90727ZM4.73077 8.90727V15.3286M4.73077 15.3286C2.94646 15.3286 1.5 16.7661 1.5 18.5393C1.5 20.3125 2.94646 21.75 4.73077 21.75C6.51507 21.75 7.96154 20.3125 7.96154 18.5393C7.96154 16.7661 6.51507 15.3286 4.73077 15.3286ZM19.2692 15.3286C17.4849 15.3286 16.0385 16.7661 16.0385 18.5393C16.0385 20.3125 17.4849 21.75 19.2692 21.75C21.0535 21.75 22.5 20.3125 22.5 18.5393C22.5 16.7661 21.0535 15.3286 19.2692 15.3286ZM19.2692 15.3286V7.30193C19.2692 6.41532 18.546 5.69658 17.6538 5.69658L15.2308 5.69658M15.2308 8.74103V2.65214C15.2308 2.29459 14.7958 2.11553 14.5414 2.36835L11.4779 5.4128C11.3202 5.56953 11.3202 5.82364 11.4779 5.98037L14.5414 9.02482C14.7958 9.27764 15.2308 9.09858 15.2308 8.74103Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Daniel
                  </span>{" "}
                  added guides for the React framework
                </p>
              </li>
              <li className="relative flex gap-x-4 pb-7 overflow-hidden">
                <div className="mt-0.5 relative h-full">
                  <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600" />
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8462 12.3462C16.8462 15.0226 14.6765 17.1923 12 17.1923C9.32354 17.1923 7.15385 15.0226 7.15385 12.3462M16.8462 12.3462C16.8462 9.6697 14.6765 7.5 12 7.5C9.32354 7.5 7.15385 9.6697 7.15385 12.3462M16.8462 12.3462H22.5M7.15385 12.3462H1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Mike
                  </span>{" "}
                  committed on Jan 8, 2023
                </p>
              </li>
              <li className="relative flex gap-x-4 pb-7 overflow-hidden">
                <div className="mt-0.5 relative h-full">
                  <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600" />
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.07447 8.60449C7.04859 8.60449 8.64894 7.0141 8.64894 5.05224C8.64894 3.09039 7.04859 1.5 5.07447 1.5C3.10034 1.5 1.5 3.09039 1.5 5.05224C1.5 7.0141 3.10034 8.60449 5.07447 8.60449ZM5.07447 8.60449V15.709M5.07447 8.60449C5.90425 11.0939 9.79787 14.5156 15.4009 13.1667M5.07447 15.709C3.10034 15.709 1.5 17.2994 1.5 19.2612C1.5 21.2231 3.10034 22.8135 5.07447 22.8135C7.04859 22.8135 8.64894 21.2231 8.64894 19.2612C8.64894 17.2994 7.04859 15.709 5.07447 15.709ZM22.5 12.5722C22.5 14.5341 20.8997 16.1245 18.9255 16.1245C16.9514 16.1245 15.3511 14.5341 15.3511 12.5722C15.3511 10.6104 16.9514 9.01999 18.9255 9.01999C20.8997 9.01999 22.5 10.6104 22.5 12.5722Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-white border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Tania
                  </span>{" "}
                  merged v0.2.0 updates on Feb 22, 2023
                </p>
              </li>
            </ul>
            {/* End Timeline */}
          </div>
        </div>
        <div className="absolute top-1/2 -left-1/2 -z-[1] w-60 h-32 bg-purple-200 blur-[100px] -translate-y-1/2 dark:bg-violet-900/30" />
      </div>
    </a>
    {/* End Card */}
  </div>
</>

    </div>
  )
}

export default GithubHistory
