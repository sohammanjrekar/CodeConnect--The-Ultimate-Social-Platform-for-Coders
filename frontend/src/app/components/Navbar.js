"use client"
import Link from 'next/link'
import { BrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <>
  {/* component */}
  {/* Header */}
  
  <header>
    {/* navbar and menu */}
    <nav className="shadow">
      <div className="flex justify-between items-center py-6 px-10 container mx-auto">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
           Codeconnect
          </h1>
        </div>
        <div>
          <div className="hover:cursor-pointer sm:hidden">
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
            <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600" />
          </div>
          <div className="flex items-center">
            <ul className="sm:flex space-x-4 hidden items-center">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  href="/pages/blog"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/portfolio"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
              <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">
                LOGIN
              </h1>
              <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
                SIGNUP
              </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    {/* section hero */}
    <section>
      <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-6 min-h-full  space-y-6 sm:space-y-0 sm:gap-4">
        <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
          <div className="ml-20 w-80">
            <h2 className="text-white text-4xl">Adsla</h2>
            <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              dolore?
            </p>
            <a
              href="#"
              className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
            >
              get start
            </a>
          </div>
        </div>
        <div className="h-96 col-span-1 ">
          <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
            <input
              type="text"
              placeholder="seach"
              className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-white  rounded-md">
            <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
              Service
            </h1>
            <div className="bg-white rounded-md list-none  text-center ">
              <li className="py-3 border-b-2">
                <Link href="/pages/github" className="list-none  hover:text-indigo-600">
                  github repo
                </Link>
              </li>
              <li className="py-3 border-b-2">
                <a href="#" className="list-none  hover:text-indigo-600">
                  Models
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="#" className="list-none  hover:text-indigo-600">
                  Pricing
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="#" className="list-none  hover:text-indigo-600">
                  Hire
                </a>
              </li>
              <li className="py-3 ">
                <a
                  href="#"
                  className="list-none border-b-2 hover:text-indigo-600"
                >
                  Business
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

  );
};

export default Navbar;
