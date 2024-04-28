"use client"
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Reviews from '@/app/components/Reviews'
import React, { useState, useEffect } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import DownloadLink from './Downlink'

const Page = ({ params }) => {
  const { id } = params;

  // State variables to store mentorship profile data, comments, contact methods, and shared resources
  const [mentorshipData, setMentorshipData] = useState(null);
  const [comments, setComments] = useState([]);
  const [contactMethods, setContactMethods] = useState([]);
  const [sharedResources, setSharedResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [myuser, setUser] = useState(null);

  useEffect(() => {
    // Fetch mentorship profile data
    fetch(`http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Set mentorship profile data
        setMentorshipData(data);
        setLoading(false);

        // Extract comment IDs, contact IDs, and resource IDs from profile response
        const { comments, contact_methods, shared_resources,user } = data;

console.log(user)
        // Fetch user data
fetch(`http://127.0.0.1:8000/account/users/${user}/`)
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
})
.then(userData => setUser(userData))
.catch(error => setError(error));


        // Fetch comments
        Promise.all(comments.map(commentId =>
          fetch(`http://127.0.0.1:8000/MentorshipMatching/mentor-comments/${commentId}/`).then(response => response.json())
        ))
        .then(commentData => setComments(commentData))
        .catch(error => setError(error));

        // Fetch contact methods
        Promise.all(contact_methods.map(contactId =>
          fetch(`http://127.0.0.1:8000/MentorshipMatching/contact-methods/${contactId}/`).then(response => response.json())
        ))
        .then(contactData => setContactMethods(contactData))
        .catch(error => setError(error));

        // Fetch shared resources
        Promise.all(shared_resources.map(resourceId =>
          fetch(`http://127.0.0.1:8000/MentorshipMatching/shared-resources/${resourceId}/`).then(response => response.json())
        ))
        .then(resourceData => setSharedResources(resourceData))
        .catch(error => setError(error));
      })
      .catch(error => setError(error));
  }, [id]);

  
  return (
    <>
      <Navbar/>

      {/* component */}
      
      <div className="flex flex-col justify-center items-center ">
        <div className="relative flex flex-col items-center rounded-[20px] w-[900px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500  p-3">
          <div className=" mx-auto my-10 bg-white rounded-lg shadow-md p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={myuser && `${myuser.avatar} `}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl text-black font-semibold mt-3">{myuser && `${myuser.first_name} ${myuser.last_name}`}</h2>

            <p className="text-center text-gray-600 mt-1">{myuser && `${myuser.job_position} `}</p>
            <div className="flex justify-center mt-5">
              <a href={myuser && `${myuser.twitter} `} className="text-blue-500 hover:text-blue-700 mx-3">
                Twitter
              </a>
              <a href={myuser && `${myuser.linkedin} `} className="text-blue-500 hover:text-blue-700 mx-3">
                LinkedIn
              </a>
              <a href={myuser && `${myuser.github} `} className="text-blue-500 hover:text-blue-700 mx-3">
                GitHub
              </a>
            </div>
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-black">Bio</h3>
              <p className="text-gray-600 mt-2">
              {myuser && `${myuser.bio} `}
              </p>
            </div>
          </div>
          <div class="relative flex flex-col items-center rounded-[20px] w-[900px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500  p-3">
                <div class="mt-2 mx-auto my-10 mb-8 w-full rounded-lg shadow-md p-5">
                    <h4 class="px-2 text-xl font-bold text-gray-700">
                    General Information
                    </h4>
                    <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Expertise</p>
                    <p class="text-base font-medium text-gray-700">
                    {mentorshipData && `${mentorshipData.expertise} `}  
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Availability</p>
                    <p class="text-base font-medium text-gray-700">
                    {mentorshipData && `${mentorshipData.availability} `}  
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Phone Number</p>
                    <p class="text-base font-medium text-gray-700">
                    {myuser && `${myuser.phone_number} `}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Email</p>
                    <p class="text-base font-medium text-gray-700">
                    {myuser && `${myuser.email} `}
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Location</p>
                    <p class="text-base font-medium text-gray-700">
                    {myuser && `${myuser.city} `} ,{myuser && `${myuser.Country_name} `}
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p class="text-sm text-gray-600">Birthday</p>
                    <p class="text-base font-medium text-gray-700">
                    {myuser && `${myuser.date_of_birth} `}
                    </p>
                    </div>
                </div>
                </div> 
                
            </div>


          {/* Contact information */}
          
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-gray-700">
              Contact Information
            </h4>
            <div className="mt-2 px-2 text-base text-gray-600 p-5">
             
              {contactMethods.map(method => (
                <div key={method.id}>
                   
                  <div class="flex items-center justify-between bg-black p-3">
              <div class="flex items-center mr-auto ">
                <div class=" inline-flex w-12 h-12"><img src="https://clipground.com/images/contact-logo-png-15.png" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl"/><span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                  <span></span>
                </div>

                <div class="flex flex-col ml-3 min-w-0">
                  <div class="font-medium leading-none text-gray-100">{method.method}</div>
                  <p class="text-sm text-gray-500 leading-none mt-1 truncate"></p>
                </div>
              </div>
              <div class="flex flex-col ml-3 min-w-0">
                <div class="flex">
                  <h5 class="flex items-center font-medium text-gray-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> {method.value}
                  </h5>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            
          </div>
        </div>
             
              ))}
            </div>
          </div>

          {/* Shared resources */}
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-gray-700">
              Shared Resources
            </h4>
            <div className="mt-2 px-2 text-base text-gray-600 grid grid-cols-2">
              {/* Render shared resources */}
              {sharedResources.map(resource => (
                <div key={resource.id}>
                 <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {resource.title}
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
     {resource.content}
    </p>
  </div>
  <div class="p-6 pt-0">
  <DownloadLink href={'https://res.cloudinary.com/dp6odhftt/image/upload/v1714285979/Files/file_1.pdf'}><button
      class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true" 
    >
     Download PDF </button></DownloadLink>
   
  </div>
</div>
                
              ))}
            </div>
          </div>
        </div>
        
          {/* Reviews component */}
          <Reviews comments={comments} />
      </div>

      <Footer />
    </>
  );
};

export default Page;
