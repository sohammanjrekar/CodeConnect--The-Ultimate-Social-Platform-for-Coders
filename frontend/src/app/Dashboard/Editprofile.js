import React from 'react'

const Editprofile = () => {
  return (
    <div><>
    {/* component */}
    <div
      style={{ backgroundColor: "#f4f4f0" }}
      className=" sm:mx-32 lg:mx-32 xl:mx-72 "
    >
      <div className="flex justify-between container mx-auto">
        <div className="w-full">
          <div className="mt-4 px-4">
            <h1 className="text-3xl font-semibold py-7 px-5">addbyme</h1>
            <h1 className="font-thinner flex text-4xl pt-10 px-5">
              Setup Your ABM Id
            </h1>
            <form className="mx-5 my-5">
              <label
                className="relative block p-3 border-2 border-black rounded"
                htmlfor="name"
              >
                <span
                  className="text-md font-semibold text-zinc-900"
                  htmlfor="name"
                >
                  Name
                </span>
                <input
                  className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </label>
              <div className="mt-5">
                <label className="input-field inline-flex items-baseline border-2 border-black rounded  p-4">
                  <span className="flex-none text-dusty-blue-darker select-none leading-none">
                    addby.me/
                  </span>
                  <div className="flex-1 leading-none">
                    <input
                      id="handle"
                      type="text"
                      className="w-full pl-1 bg-transparent focus:outline-none"
                      name="handle"
                      placeholder="username"
                    />
                  </div>
                </label>
              </div>
              <div className="shrink-0 mt-5">
                <img
                  className="h-20 w-20 object-cover rounded-full"
                  src="https://sahilnetic.xyz/sahilnetic.png"
                  alt="Current profile photo"
                />
              </div>
              <label className="block pt-2">
                <span className="sr-only t-2">Choose profile photo</span>
                <input
                  type="file"
                  className="w-full text-sm text-slate-500
  file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-pink-300 file:text-zinc-900
  hover:file:bg-rose-300
      "
                />
              </label>
              <label
                className="relative block p-3 border-2 mt-5 border-black rounded"
                htmlfor="name"
              >
                <span
                  className="text-md font-semibold text-zinc-900"
                  htmlfor="name"
                >
                  Bio
                </span>
                <input
                  className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Write Your Bio"
                />
              </label>
              <label
                className="relative block p-3 border-2  mt-5 border-black rounded"
                htmlfor="name"
              >
                <span
                  className="text-md font-semibold  text-zinc-900"
                  htmlfor="name"
                >
                  Upi Id
                </span>
                <input
                  className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="ie : lisa859sh@okaxis"
                />
                <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">
                  learn more
                </button>
              </label>
              <label
                className="relative block p-3 border-2 mt-5 border-black rounded"
                htmlfor="name"
              >
                <span
                  className="text-md font-semibold  text-zinc-900"
                  htmlfor="name"
                >
                  Paypal Me
                </span>
                <input
                  className="w-full read-only:bg-zinc-800  p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="ie : paypal.me/yubashika"
                />
                <button className="font-medium bg-blue-500 px-2 text-white text-sm rounded-md">
                  learn more
                </button>
              </label>
              <h1 className="text-2xl font-semibold mt-5">Category :</h1>
              <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Business
                </button>
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Creative
                </button>
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Education
                </button>
              </p>
              <p className="text-black text-sm font-normal flex gap gap-2 pt-2">
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Tech
                </button>
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Entertainment
                </button>
                <button className="border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2">
                  Other
                </button>
              </p>
              <button className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default Editprofile