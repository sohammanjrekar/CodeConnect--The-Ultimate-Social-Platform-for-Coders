"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; 
const Jobcard = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Fetch job postings data
    axios.get('http://127.0.0.1:8000/jobportal/job-postings/')
      .then(response => {
        setJobPostings(response.data);
      })
      .catch(error => {
        console.error('Error fetching job postings:', error);
      });
  }, []);

  return (
    <div>
       {jobPostings.map(job => (

      <div key={job.id}  className="rounded-md w-full bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
        <div className="flex flex-col justify-start">
          <div className="flex justify-between items-center w-96">
            <div className="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
              <svg
                className="w-7 h-7 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
              <span>{job.title}</span>
            </div>
            <span className="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
              {" "}
              Remote{" "}
            </span>
          </div>
          <div className="text-sm text-gray-500 flex space-x-1 items-center">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Location Icon */}
            </svg>
            <span>{job.location}</span>
          </div>
          <div className="mt-3">
            <p className="text-gray-600">{job.description}</p>
          </div>
          <div className="text-sm text-gray-500 mt-3">
            <p>Requirements: {job.requirements}</p>
            <p>Salary Range: ${job.salary_min} - ${job.salary_max}</p>
            <p>Posted By: {job.company_name}</p>
            <p>Posted At: {new Date(job.posted_at).toLocaleDateString()}</p>
            <p>Application Deadline: {new Date(job.application_deadline).toLocaleDateString()}</p>
          </div>
          <div>
            <div className="mt-5">
            <Link href={`/Jobportal/${job.id}`}>
                
              <button className="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                Apply
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Jobcard;
