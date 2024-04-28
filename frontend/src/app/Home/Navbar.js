"use client";
import Link from "next/link";
const Navbar = () => {
  

  return (
    <>
      <>
  {/* component */}
  {/* Header */}
  <header>
    {/* navbar and menu */}
    <nav className="shadow mb-5 fixed bg-black w-full mt-0 text-white z-50">
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
                  className="text-white hover:text-indigo-600 text-md "
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/Mentorship"
                  className="text-white hover:text-indigo-600 text-md "
                >
                 Mentorship
                </a>
              </li>
              <li>
                <a
                  href="/Portfolio"
                  className="text-white hover:text-indigo-600 text-md "
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/Aboutus"
                  className="text-white hover:text-indigo-600 text-md "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Codereview"
                  className="text-white hover:text-indigo-600 text-md "
                >
                  Codereview
                </a>
              </li>
              <li>
                <a
                  href="/Contactus"
                  className="text-white hover:text-indigo-600 text-md "
                >
                 Contact
                </a>
              </li>
              <li>
                <a
                  href="/Events"
                  className="text-white hover:text-indigo-600 text-md "
                >
                 Events
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="text-white hover:text-indigo-600 text-md "
                >
                 projects
                </a>
              </li>
              <li>
                <a
                  href="/Message"
                  className="text-white hover:text-indigo-600 text-md "
                >
                 Chats
                </a>
              </li>


              <li>
                <a
                  href="/Artgallary"
                  className="text-white hover:text-indigo-600 text-md "
                >
                Artgallary
                </a>
              </li>
              <li>
                <a
                  href="/Blog"
                  className="text-white hover:text-indigo-600 text-md "
                >
            Blog
                </a>
              </li>
              <li>
                <a
                  href="/Codechallenges"
                  className="text-white hover:text-indigo-600 text-md "
                >
           Codechallenges
                </a>
              </li>
              <li>
                <a
                  href="/Contactus"
                  className="text-white hover:text-indigo-600 text-md "
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