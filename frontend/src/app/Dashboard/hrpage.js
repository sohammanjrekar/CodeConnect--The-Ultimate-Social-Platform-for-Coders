import React from 'react'

const hrpage = () => {
  return (
    <div>
      <>
  <header className="bg-white ">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        SafariHR
      </h1>
    </div>
  </header>
  <div className="min-h-full">
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  My info
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Employees
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blogs
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div className="md:block lg:block sm:hidden max-w-md mx-auto">
                  <div className="relative  flex items-center w-full h-8 border border-gray-500 rounded-sm  bg-gray-600 overflow-hidden">
                    <div className="grid place-items-center w-12 bg-gray-600 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 bg-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      className="bg-gray-600 outline-none text-sm text-gray-300 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search something.."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              My info
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Employees
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Blogs
            </a>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="md:block lg:block sm:hidden max-w-md mx-auto">
                <div className="relative  flex items-center w-full h-8 border border-gray-500 rounded-sm  bg-gray-600 overflow-hidden">
                  <div className="grid place-items-center w-12 bg-gray-600 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 bg-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className="bg-gray-600 outline-none text-sm text-gray-300 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="bg-blue-300 flex justify-between">
      <div className=" max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">
        <img
          className=" flex-1 w-48 h-48 rounded-full shadow-lg"
          src="https://static.independent.co.uk/2023/09/14/15/WOLFPACK_Gallery_Kristin_10232022_FO_0064_aprRT.jpg?width=1200&height=1200&fit=crop"
          alt=""
        />
      </div>
      <div className="bg-blue-300  max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className=" text-3xl font-sans tracking-tight text-gray-900">
          Charlot Daniel Abbot
        </h1>
        <p className="ml-10">Sr. HR Administrator</p>
      </div>
      <div className="bg-blue-300 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Content */}
          <div className="flex-1">{/* Rest of content */}</div>
          {/* Buttons */}
          <div className="flex space-x-4 hidden lg:block md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">
              Request a Change
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div className=" max-w-7xl py-0 ">
        <div className="md:flex no-wrap md:-mx-2  ">
          {/* Left Side */}
          <div className=" w-full md:w-3/12 ">
            <div className=" p-3 ">
              <ul className="-mt-3 text-sm font-semibold text-gray-500 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded bg-white ">
                <li className="items-center py-3">
                  <span>801-724-6600 Ext.1272</span>
                  <br />
                  <span className="ml-auto">415-555-8965</span>
                </li>
                <li className="items-center py-3">
                  <h1>Hire date</h1>
                  <span>Jan 19 2017</span>
                  <br />
                  <span className="ml-auto">10m - 15d</span>
                </li>
                <li className=" items-center py-3">
                  <span>Full-time</span>
                  <br />
                  <span className="ml-auto">Human Resources</span>
                  <span className="ml-auto">North America</span>
                  <span className="ml-auto">Lindon , Utah</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full mx-2   md:block lg:block md:-mt-24 sm:mt-0">
            {/* Profile tab */}
            {/* About Section */}
            <div className="hidden md:block lg:block">
              <ul className="flex bg-white ">
                <li className=" mr-1">
                  <a
                    className="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold shadow-md"
                    href="#"
                  >
                    Personal
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Job
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="rounded-sm bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    leave
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="rounded-sm bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Emergency
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="rounded-sm bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t py-2 px-1 text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Document
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="rounded-sm bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t py-2 px-1 text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Notes
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Benefits
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Training
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    performance
                  </a>
                </li>
                <li className="mr-1">
                  <a
                    className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold"
                    href="#"
                  >
                    Assets
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-3  rounded-sm ">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide px-2">Personal</span>
              </div>
              <div className="flex my-2 py-1">
                <span className="tracking-wide px-2 bg-blue-500 text-white rounded-md shadow-xl">
                  Upload
                </span>
                <span className="tracking-wide px-2">Files</span>
              </div>
              {/* the document logo and stuff */}
            </div>
            {/* End of about section */}
            <div className="my-1 " />
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 sm:block ">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium ">
                        <div>
                          <h2 className="font-medium text-gray-800  ">
                            Resume and Applications
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800  ">
                            Signed Documents
                          </h2>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800  ">
                            Tasklist Attachments
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800  ">
                            Workflow Attachments
                          </h2>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    </div>
  )
}

export default hrpage
