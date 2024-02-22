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
                  href="/Mentorship"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                 Mentorship
                </a>
              </li>
              <li>
                <a
                  href="/Portfolio"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Portfolio
                </a>
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
                  href="/Codereview"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                  Codereview
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
              <li>
                <a
                  href="/Events"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                 Events
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
                 projects
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
                  href="/Codechallenges"
                  className="text-gray-700 hover:text-indigo-600 text-md "
                >
           Codechallenges
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
            <a href="/Login">
              <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">
                LOGIN
              </h1>
              </a>
              <a href="/Signup">
              <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">
                SIGNUP
              </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>  
</>

    </>
  );
};

export default Navbar;