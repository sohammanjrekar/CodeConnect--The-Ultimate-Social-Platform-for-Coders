import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="h-screen w-full flex overflow-hidden">
    <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
      {/* SideNavBar */}
      <div className="flex flex-row border-b items-center justify-between pb-2">
        {/* Hearder */}
        <span className="text-lg font-semibold capitalize dark:text-gray-300">
          my admin
        </span>
        <span className="relative ">
          <a
            className="hover:text-green-500 dark-hover:text-green-300
					text-gray-600 dark:text-gray-300"
            href="inbox/"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </a>
          <div
            className="absolute w-2 h-2 rounded-full bg-green-500
					dark-hover:bg-green-300 right-0 mb-5 bottom-0"
          />
        </span>
      </div>
      <div className="mt-8">
        {/* User info */}
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
          alt="enoshima profile"
        />
        <h2 className="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
          Hello Enoshima
        </h2>
        <span className="text-sm dark:text-gray-300">
          <span className="font-semibold text-green-600 dark:text-green-300">
            Admin
          </span>
          id789038
        </span>
      </div>
      <button
        className="mt-8 flex items-center justify-between py-3 px-2 text-white
			dark:text-gray-200 bg-green-400 dark:bg-green-500 rounded-lg shadow"
      >
        {/* Action */}
        <span>Add user</span>
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <ul className="mt-2 text-gray-600">
        {/* Links */}
        <li className="mt-8">
          <a href="#home" className="flex ">
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"
              />
            </svg>
            <span
              className="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
            >
              dashboard
            </span>
          </a>
        </li>
        <li className="mt-8">
          <a href="#home" className="flex">
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"
              />
            </svg>
            <span
              className="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
            >
              calendar
            </span>
          </a>
        </li>
        <li
          className="mt-8 shadow py-2 bg-white dark:bg-gray-200 rounded-lg
				-ml-4"
        >
          <a href="#home" className="flex pl-4">
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"
              />
            </svg>
            <span className="ml-2 capitalize font-medium">users</span>
          </a>
        </li>
        <li className="mt-8">
          <a href="#home" className="flex">
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"
              />
            </svg>
            <span
              className="ml-2 capitalize font-medium text-black
						dark:text-gray-300"
            >
              tasks
            </span>
          </a>
        </li>
      </ul>
      <div className="mt-auto flex items-center text-red-700 dark:text-red-400">
        {/* important action */}
        <a href="#home" className="flex items-center">
          <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"
            />
          </svg>
          <span className="ml-2 capitalize font-medium">log out</span>
        </a>
      </div>
    </nav>
    <main
      className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto"
    >
      <div className="mx-10 my-2">
        <nav
          className="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out"
        >
          <div className="flex">
            {/* Top NavBar */}
            <a
              href="users-dashboard/"
              className="py-2 block text-green-500 border-green-500
						dark:text-green-200 dark:border-green-200
						focus:outline-none border-b-2 font-medium capitalize
						transition duration-500 ease-in-out"
            >
              users
            </a>
            <button
              className="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
            >
              role
            </button>
            <button
              className="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
            >
              access rights
            </button>
          </div>
          <div className="flex items-center select-none">
            <span
              className="hover:text-green-500 dark-hover:text-green-300
						cursor-pointer mr-3 transition duration-500 ease-in-out"
            >
              <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                <path
                  d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </span>
            <input
              className="w-12 bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div>
        </nav>
        <h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
          User list
        </h2>
        <div
          className="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600"
        >
          {/* Header */}
          <div>
            <span>
              <span className="text-green-500 dark:text-green-200">431</span>
              users;
            </span>
            <span>
              <span className="text-green-500 dark:text-green-200">22</span>
              projects;
            </span>
            <span>
              <span className="text-green-500 dark:text-green-200">33</span>
              roles
            </span>
          </div>
          <div>
            <span className="capitalize">
              project
              <span
                className="text-green-500 dark:text-green-200
							cursor-pointer"
              >
                all
              </span>
            </span>
            <span className="capitalize ml-12">
              date added
              <span
                className="text-green-500 dark:text-green-200
							cursor-pointer"
              >
                all time
              </span>
            </span>
            <span className="capitalize ml-12">
              role
              <span
                className="text-green-500 dark:text-green-200
							cursor-pointer"
              >
                all
              </span>
            </span>
          </div>
        </div>
        <div className="mt-6 flex justify-between text-gray-600 dark:text-gray-400">
          {/* List sorting */}
          <div className="ml-10 pl-2 flex capitalize">
            {/* Left side */}
            <span className="ml-8 flex items-center">
              name
              <svg
                className="ml-1 h-5 w-5 fill-current text-green-500
							dark:text-green-200"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
            <span className="ml-24 flex items-center">
              login
              <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
          </div>
          <div className="mr-12 flex capitalize">
            {/* Right side */}
            <span className="mr-16 pr-1 flex items-center">
              project
              <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
            <span className="mr-16 pr-2 flex items-center">
              role
              <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
            <span className="mr-12 flex items-center">
              status
              <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
            <span className="mr-16 flex items-center">
              date
              <svg className="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className="mt-2 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer "
        >
          {/* Card */}
          <div className="flex justify-between">
            {/* Left side */}
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://inews.gtimg.com/newsapp_match/0/8693739867/0"
              alt=""
            />
            <div
              className="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>name</span>
              <span className="mt-2 text-black dark:text-gray-200">
                carmen beltran
              </span>
            </div>
            <div
              className="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>login</span>
              <span className="mt-2 text-black dark:text-gray-200">
                carmen.bel
              </span>
            </div>
          </div>
          <div className="flex">
            {/* Rigt side */}
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>project</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Aero treck
              </span>
              <span className="text-red-600 dark:text-red-400">search</span>
              <span>2 more...</span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>role</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Designer
              </span>
              <span className="text-red-600 dark:text-red-400">Designer</span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>status</span>
              <span className="mt-2 text-black dark:text-gray-200">None</span>
              <span className="text-red-600 dark:text-red-400">in work</span>
            </div>
            <div
              className="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>final date</span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                20.02.2020
              </span>
              <span className="text-red-600 dark:text-red-400">
                07.02.2020 11:00
              </span>
            </div>
          </div>
        </div>
        <div
          className="mt-8 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer"
        >
          {/* Card */}
          <div className="flex justify-between">
            {/* Left side */}
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
              alt=""
            />
            <div
              className="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>name</span>
              <span className="mt-2 text-black dark:text-gray-200">
                enoshima junko
              </span>
            </div>
            <div
              className="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>login</span>
              <span className="mt-2 text-black dark:text-gray-200">
                zetsbuo
              </span>
            </div>
          </div>
          <div className="flex">
            {/* Rigt side */}
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>project</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Aero treck
              </span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>role</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Front-End
              </span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>status</span>
              <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                in work
              </span>
            </div>
            <div
              className="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>final date</span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                20.02.2020 11:00
              </span>
            </div>
          </div>
        </div>
        <div
          className="mt-8 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer"
        >
          {/* Card */}
          <div className="flex justify-between">
            {/* Left side */}
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://www.hdwallpapers.in/download/2012_darksiders_ii-1920x1080.jpg"
              alt=""
            />
            <div
              className="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>name</span>
              <span className="mt-2 text-black dark:text-gray-200">
                dark siders
              </span>
            </div>
            <div
              className="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>login</span>
              <span className="mt-2 text-black dark:text-gray-200">
                dark siders
              </span>
            </div>
          </div>
          <div className="flex">
            {/* Rigt side */}
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>project</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Aero treck
              </span>
              <span className="text-black dark:text-gray-200">Grass Max</span>
              <span className="text-black dark:text-gray-200">Mental</span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>role</span>
              <span className="mt-2 text-black dark:text-gray-200">
                designer
              </span>
              <span className="text-black dark:text-gray-200">designer</span>
              <span className="text-black dark:text-gray-200">illustrator</span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>status</span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                on check
              </span>
              <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                in work
              </span>
              <span className="mt-2 text-black dark:text-gray-200">none</span>
            </div>
            <div
              className="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>final date</span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                20.02.2020 11:00
              </span>
              <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                20.02.2020 13:00
              </span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                20.02.2020 11:00
              </span>
            </div>
          </div>
        </div>
        <div
          className="mt-8 mb-4 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer"
        >
          {/* Card */}
          <div className="flex justify-between">
            {/* Left side */}
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-3-keyart.jpg.adapt.crop1x1.767p.jpg"
              alt=""
            />
            <div
              className="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>name</span>
              <span className="mt-2 text-black dark:text-gray-200">crysis</span>
            </div>
            <div
              className="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>login</span>
              <span className="mt-2 text-black dark:text-gray-200">crysis</span>
            </div>
          </div>
          <div className="flex">
            {/* Rigt side */}
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>project</span>
              <span className="mt-2 text-black dark:text-gray-200">
                Killing
              </span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>role</span>
              <span className="mt-2 text-black dark:text-gray-200">hunter</span>
            </div>
            <div
              className="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>status</span>
              <span className="mt-2 text-yellow-600 dark:text-yellow-400">
                in work
              </span>
            </div>
            <div
              className="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400"
            >
              <span>final date</span>
              <span className="mt-2 text-green-400 dark:text-green-200">
                20.02.2020 11:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    </div>
  )
}

export default AdminDashboard
