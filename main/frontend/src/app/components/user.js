import React from 'react'

const EachUser = () => {
  return (
    <div>
      <>
  {/* component */}
  {/* This is an example component */}
  <div className="w-11/12">
    <div className="flex justify-center pb-10">
      <img
        src="https://images.pexels.com/photos/3278968/pexels-photo-3278968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        className="h-40 w-40 rounded-full object-cover"
        alt="username"
      />
      <div className="ml-10">
        <div className="flex items-center">
          <h2 className="block leading-relaxed font-light text-gray-700 text-3xl">
            Darcy
          </h2>
          <a className="cursor-pointer h-7 px-3 ml-3 outline-none border-transparent text-center rounded border bg-blue-500 hover:bg-blue-600 text-white bg-transparent font-semibold">
            Enviar mensaje
          </a>
          <a className="cursor-pointer h-7 px-3 ml-3 focus:outline-none hover:border-transparent text-center rounded border border-gray-400 hover:bg-blue-500 hover:text-white bg-transparent text-gray-500 font-semibold">
            Editar perfil
          </a>
          <button className="flex items-center ml-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded outline-none focus:outline-none bg-transparent text-blue-600 text-sm py-1 px-2">
            <span className="block">Seguir</span>
            <svg
              className="block h-5 w-5 pl-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <a
            className="cursor-pointer ml-2 p-1 border-transparent text-gray-700 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
            aria-label="Notifications"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>
        <ul className="flex justify-content-around items-center">
          <li>
            <span className="block text-base flex">
              <span className="font-bold mr-2">23 </span> Posts
            </span>
          </li>
          <li>
            <span className="cursor-pointer block text-base flex ml-5">
              <span className="font-bold mr-2">102k </span> Followers
            </span>
          </li>
          <li>
            <span className="cursor-pointer block text-base flex ml-5">
              <span className="font-bold mr-2">654 </span> followed
            </span>
          </li>
        </ul>
        <br />
        <div className="">
          <h1 className="text-base font-bold font-light">Darcy</h1>
          <span className="text-base">
            I am Darcy, I like music, and record videos
          </span>
          <a className="block text-base text-blue-500 mt-2" target="_blank">
            https://tailwindcomponents.com/
          </a>
        </div>
      </div>
    </div>
    <div className="border-b border-gray-300" />
    <article className="mt-5 grid grid-cols-3 gap-10">
      <div
        className="cursor-pointer relative"
        style={{ width: 300, height: 300 }}
      >
        <img
          src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          className="foto w-full h-full object-cover"
          alt="description"
        />
      </div>
      <div
        className="cursor-pointer relative"
        style={{ width: 300, height: 300 }}
      >
        <img
          src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          className="foto w-full h-full object-cover"
          alt="description"
        />
      </div>
      <div
        className="cursor-pointer relative"
        style={{ width: 300, height: 300 }}
      >
        <img
          src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          className="foto w-full h-full object-cover"
          alt="description"
        />
      </div>
    </article>
  </div>
</>

    </div>
  )
}

export default EachUser
