"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MentorCard from "./MentorCard";
import AddMentor from "./AddMentor";

const page = () => {
  return (
    <div>
      <>
      <Navbar/>
        {/* component */}
        <div className="min-h-screen bg-gray-50 pb-10">
          {/* Navigation */}
          <div className="mx-auto">
       
           
            <main className="">
              <div className="bg-white px-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Explore Mentors
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="my-6 mr-4 flex w-full items-center justify-between rounded-lg border px-3 py-3 sm:w-[350px] sm:flex-initial">
                      <input
                        className="w-full text-sm outline-none"
                        type="text"
                        placeholder="Search Mentors"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                          />
                        </svg>
                        <span className="hidden sm:block">Category</span>
                      </div>
                      <div className=" md:flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                          />
                        </svg>
                        <span className="hidden sm:block">
                          Sort By : Popular
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3my- ">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Mentors
                  </h2>
                  <div className="flex">
                  
                  
                  </div>
                </div>
                <div className="mb-6 my-5 rounded-lg bg-white p-6 grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 ">
                {/* <MentorCard/>
                <MentorCard/>
                <MentorCard/>
                <MentorCard/> */}

                <div className="mb-5 relative justify-center items-center">
                <AddMentor/>
                </div>

                </div>
                
              </div>
              <div className="px-4">
              
                <div className=" w-full">

                 <MentorCard/>
            
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer/>
      </>
    </div>
  );
};

export default page;
