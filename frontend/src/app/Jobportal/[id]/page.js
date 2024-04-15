"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const jobcall = ({ params }) => {
  const [jobPosting, setJobPosting] = useState(null);
  const [persons, setPersons] = useState([]);
  const [uniquePersonIds, setUniquePersonIds] = useState(new Set()); // Initialize a Set to store unique person IDs

  useEffect(() => {
    const { id } = params;

    // Fetch job posting details
    axios.get(`http://127.0.0.1:8000/jobportal/job-postings/${id}`)
      .then(response => {
        setJobPosting(response.data);

        // Iterate over each person ID in the jobPosting
        response.data.persons.forEach(personId => {
          // Check if the person ID is unique
          if (!uniquePersonIds.has(personId)) {
            uniquePersonIds.add(personId); // Add the person ID to the Set
            // Fetch person details only if it's not already fetched
            axios.get(`http://127.0.0.1:8000/jobportal/persons/${personId}/`)
              .then(personResponse => {
                setPersons(prevPersons => [...prevPersons, personResponse.data]);
              })
              .catch(error => {
                console.error('Error fetching person details:', error);
              });
          }
        });
      })
      .catch(error => {
        console.error('Error fetching job postings:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  

  return (
    <div>
      <Navbar/>
      {jobPosting && (
  <div key={jobPosting.id} className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            {jobPosting.title}
          </h2>
          <p className="text-black text-base md:text-lg mb-4">
            {jobPosting.description}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Company:</strong> {jobPosting.company_name}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Location:</strong> {jobPosting.location}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Requirements:</strong> {jobPosting.requirements}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Posted At:</strong> {new Date(jobPosting.posted_at).toLocaleDateString()}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Salary:</strong> ₹{jobPosting.salary_min} - ₹{jobPosting.salary_max}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Application Email:</strong> <a href={`mailto:${jobPosting.application_email}`} className="text-blue-500 underline hover:text-blue-400">{jobPosting.application_email}</a>
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Application Deadline:</strong> {new Date(jobPosting.application_deadline).toLocaleDateString()}
          </p>
          <p className="text-black text-base md:text-lg">
            <strong>Application Tracking Link:</strong> <a href={jobPosting.application_tracking_link} className="text-blue-500 underline hover:text-blue-400">{jobPosting.application_tracking_link}</a>
          </p>
        </div>
        <div className="space-x-4">
  <a href={`mailto:${jobPosting.application_email}`} className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium inline-flex items-center">
    <span>Apply Now</span>
  </a>
</div>

      </div>
      <img
        alt="Company Logo"
        width={420}
        height={120}
        src="https://i.pinimg.com/474x/38/ac/23/38ac23db2dd632589508894049b6beb6.jpg"
        className="object-cover object-center w-full lg:w-96"
      />
    </div>
  </div>
)}
  <div className="max-w-7xl mx-auto my-5">
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {persons.map(person => (
          <li key={person.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                    {person.role}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{person.role}</p>
              </div>
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
                alt=""
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    Email: {person.email}
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.phone_number}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>
              Call : {person.phone_number}
            </a>
          </div>
        </div>
      </div>
    </li>
    ))}
  </ul>
  </div>
<Footer/>
    </div>
  )
}

export default jobcall
