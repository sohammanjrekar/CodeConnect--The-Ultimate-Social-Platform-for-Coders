import React from 'react'

const calender = () => {
  return (
    <div>
      <>
  {/* component */}
  {/* https://dribbble.com/shots/14959823-Dashboard-UI-Elements */}
  <div classname="h-screen bg-gray-100 p-6">
    {/* { /*variation dark set* / } */}
    {/* { /*variation dark set* / } */}
    <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Sun{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              11{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Mon{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              12{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Tue{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              13
            </p>
          </div>
        </div>
      </div>
      <div className="flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16">
        <span className="flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 " />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100" />
        </span>
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-100 text-sm"> Wed </p>
            <p className="text-gray-100  mt-3 font-bold"> 14 </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Thu{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              15{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Fri{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              16{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
              {" "}
              Sat{" "}
            </p>
            <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              17{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    {/* { /*variation light set* / } */}
    <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Sun{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              11{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Mon{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              12{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Tue{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              13
            </p>
          </div>
        </div>
      </div>
      <div className="flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center">
        <span className="flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 " />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
        </span>
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-purple-900 text-sm"> Wed </p>
            <p className="text-purple-900  mt-3 font-bold"> 14 </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Thu{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              15{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Fri{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              16{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
        <div className="flex items-center px-4 py-4">
          <div className="text-center">
            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
              {" "}
              Sat{" "}
            </p>
            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
              {" "}
              17{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default calender
