import React from 'react'
import Eventscard from './Eventscard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <>
      <Navbar/>
  {/* component */}
  <Eventscard/>
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Event image"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Event Name
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          Event Description
        </p>
        <p className="mt-2 text-gray-500">Event Details...</p>
      </div>
    </div>
  </div>
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        Event Name
      </div>
      <p className="block mt-1 text-lg leading-tight font-medium text-black">
        Event Date
      </p>
      <p className="mt-2 text-gray-500">Event Description</p>
      <p className="mt-2 text-gray-500">Event Details...</p>
    </div>
  </div>
  
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
    <div className="p-4 flex items-center">
      <div className="pr-4 bg-blue-500 p-2 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">18th</p>
        <p className="text-sm text-white">November, 2023</p>
      </div>
      <div className="ml-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          9:20 AM - 9:40 AM
        </div>
        <p className="mt-2 text-gray-500">Event Details...</p>
      </div>
    </div>
  </div>
  
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
    <div className="md:flex">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
       Username
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          Appointment Time: 13:00 - 14:00
        </p>
        <p className="mt-2 text-gray-500">Speaker: John Doe</p>
        <div className="mt-5 relative flex">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Avatar 1"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-4"
            src="https://randomuser.me/api/portraits/women/74.jpg"
            alt="Avatar 2"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-4"
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Avatar 3"
          />
          <span className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-4 bg-indigo-500 text-white flex items-center justify-center">
            +3
          </span>
        </div>
        <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          View Details
        </button>
        <button className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Cancel Appointment
        </button>
      </div>
    </div>
  </div>
  <Footer/>
</>

    </div>
  )
}

export default page
