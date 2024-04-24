"use client"
import React, { useEffect,useState } from 'react'
import Eventscard from './Eventscard'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'


const page = ({params}) => {
  const { id } = params;
  // State to hold the event data
  const [eventData, setEventData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch event data when the component mounts
  useEffect(() => {
    // Fetch event data from the API
    fetch(`http://127.0.0.1:8000/events/events/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched event data in state
        setEventData(data);
        const user_id = data.organizer;
        // Fetch user data
        return fetch(`http://127.0.0.1:8000/account/users/${user_id}/`);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched user data in state
        setUserData(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        // Set error state if there's an error
        setError(error.message);
        setLoading(false); // Set loading to false in case of error
      });
  }, [id]); // Include id as a dependency to refetch data when id changes

  // Function to format date string
  const formatDate = dateString => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC',
    };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      
      <Navbar/>
      {eventData && (
  <div className="px-4 py-4 m-5 w-1/2 mx-auto text-gray-800">
    <div className="hidden xl:flex flex-row justify-between shadow-md border rounded-md">
      <div className="flex flex-col items-center justify-between w-1/4 px-4 py-2 bg-white border-r-2 border-gray-500 border-dashed rounded-l-md">
        <div className="flex-col">
          <img src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a" />
          <p className="my-2 text-xs italic font-light text-gray-500">
            Scan here to check in!
          </p>
          <div className="text-xs mb-2 text-gray-600">
            <span className="text-gray-500">Valid until :</span>
            <br />
            {eventData.start_date && formatDate(eventData.start_date)}
          </div>
        </div>
        <div className="text-left">
          <p className="pb-2 text-xs italic">Powered By</p>
          <img src="https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png" />
        </div>
      </div>
      <div className="relative flex flex-col w-3/4">
        <img src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/Events/${eventData.image}`} />
        <div className="absolute p-1 bottom-24">
          <div className="flex flex-row px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
            <span className="mr-2 font-normal text-gray-500">Organizer :</span>
            <p className="font-semibold text-red-800">{userData.first_name}  {userData.last_name}</p>
          </div>
        </div>
        <div className="absolute self-end mr-1 mt-1">
          <p className="px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
            <span className="font-normal text-gray-500">Ticket Number :</span>
            12
          </p>
        </div>
        <div className="absolute bottom-0 flex flex-col w-full h-24">
          <div className="w-full h-full bg-white opacity-75 rounded-br-md" />
          <div className="absolute flex flex-row p-2 text-gray-800 opacity-100">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="mb-1 text-xs text-gray-500">Start Date :</p>
                <p className="text-xs font-semibold text-red-800">
                {eventData.start_date && formatDate(eventData.start_date)}
                </p>
              </div>
              <div className="hidden md:flex flex-col mt-1">
                <p className="mb-1 text-xs text-gray-500">End Date :</p>
                <p className="text-xs font-semibold text-red-800">
                {eventData.start_date && formatDate(eventData.end_date)}
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <div className="hidden md:flex flex-col">
                <p className="mb-1 text-xs text-gray-500">Type of event :</p>
                <p className="text-xs font-semibold text-red-800">Seminar</p>
              </div>
              <div className="flex flex-col mt-1">
                <p className="mb-1 text-xs text-gray-500">Location :</p>
                <p className="text-xs font-semibold text-red-800">
                  Banua Coder Coworking Space, Palu Timur, Kota Palu, Sulawesi
                  Tengah
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div className="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
      <div className="py-2 px-4 flex-col flex text-center">
        <img
          className="mx-auto"
          src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a"
        />
        <p className="font-bold text-lg md:text-3xl">Scan here to check in!</p>
      </div>
      <hr className="border-dashed border-2 border-gray-400" />
      <img src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png" />
      <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
        <p className="self-start font-bold text-gray-500">Mulai</p>
        <div className="flex text-sm justify-between my-2 md:text-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="font-bold text-red-800">Senin, 29 September 2020</p>
        </div>
        <div className="flex text-sm justify-between my-2 md:text-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-bold text-red-800">10:30</p>
        </div>
      </div>
      <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
        <p className="self-start font-bold text-gray-500">Selesai</p>
        <div className="flex text-sm md:text-xl justify-between my-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="font-bold text-red-800">Senin, 29 September 2020</p>
        </div>
        <div className="flex text-sm md:text-xl justify-between my-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-bold text-red-800">15:30</p>
        </div>
      </div>
      <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
        <p className="self-start font-bold text-gray-500">Lokasi</p>
        <div className="flex text-sm md:text-xl justify-between my-2">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="font-bold text-red-800">
            Banua Coder Coworking Space, Palu, Sulawesi Tengah, Indonesia
          </p>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
        <p className="self-start font-bold text-gray-500">Powered By</p>
        <img
          className="mx-auto my-2"
          src="https://ad-venture.org.uk/wp-content/uploads/2017/05/logo-placeholder.png"
        />
      </div>
    </div>
  </div>

      )}
 
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/User/${userData.avatar}`}
          alt="Event image"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {userData.first_name}      {userData.last_name}
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
        {userData.bio}
        </p>
        <p className="mt-2 text-gray-500">{userData.email}</p>
        <p className="mt-2 text-gray-500">{userData.phone_number}</p>
      </div>
    
 
  
    <div className="p-4 flex items-center">
      <div className="pr-4 bg-blue-500 p-2 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">18th</p>
        <p className="text-sm text-white">November, 2023</p>
      </div>
      
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


    </div>
  )
}

export default page
