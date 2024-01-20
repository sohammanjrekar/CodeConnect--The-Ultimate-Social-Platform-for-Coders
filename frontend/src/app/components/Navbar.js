"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import userData from "@/app/UserData";
import { useClickOutside } from "@mantine/hooks";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside(() => setIsFocused(false));
  const [searchValue, setSearchValue] = useState("");
  const [ProfileMenu, setProfileMenu] = useState(false);
  const [searchedUser, setSearchedUser] = useState(userData);
  const [searchPanel, setSearchPanel] = useState(false);

  const searchUsers = (value) => {
    let searchedUser = userData.filter((user) => {
      return user.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedUser(
      searchedUser.length === 0 ? [{ error: "User Not Found" }] : searchedUser
    );
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".userProfile")) {
        setProfileMenu(false);
      }
    });
  }, []);

  return (
    <>
      <>
  {/* component */}
  {/* Header */}
  <header>
    {/* navbar and menu */}
    <nav className="shadow mb-5">
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
            <ul className="sm:flex space-x-2 hidden items-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/Aboutus"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Message"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                 Chats
                </a>
              </li>
              <li>
                <a
                  href="/Blog"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
            Blog
                </a>
              </li>
              <li>
                <a
                  href="/Contactus"
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
      <div className="bg-gray-100 sm:grid grid-cols-5  px-4  pb-5 space-y-2 sm:space-y-0 sm:gap-4">
        <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
          <div className="ml-20 w-80">
            <h2 className="text-white text-4xl">Codeconnect</h2>
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
              Services
            </h1>
            <div className="bg-white rounded-md list-none  text-center ">
              <li className="py-3 border-b-2">
                <a href="/Courses" className="list-none  hover:text-indigo-600">
                  Courses
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="/Dashboard" className="list-none  hover:text-indigo-600">
               Dashbord
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="/FAQ" className="list-none  hover:text-indigo-600">
               FAQ
                </a>
              </li>
              <li className="py-3 border-b-2">
                <a href="/Jobportal" className="list-none  hover:text-indigo-600">
                  Hire
                </a>
              </li>
              <li className="py-3 ">
                <a
                  href="/User"
                  className="list-none border-b-2 hover:text-indigo-600"
                >
                 USer ACCOUNT
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

    </>
  );
};

export default Navbar;