"use client";
import React, { useState, useEffect,useRef } from "react";
import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import Chatbox from "../chats/page";
import IndexHeroNav from "../components/IndexHeroNav";
import Post from "../Post/page";
import Addpost from "../Post/Addpost";
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.auth.user);
  if (!userData) {
    // Redirect to the login page
    router.push('/Login');
    // Return null or loading indicator if needed
    return null;
  }
  const postsRef = useRef(null);

  const scrollToPosts = () => {
    postsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to posts section when the component mounts
    scrollToPosts();
  }, []);

  

  return (
    <>
      <Navbar />
      <IndexHeroNav />
      <>
        {/* component */}
        <div className="h-screen  bg-white mb-10">
          <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-3 ">
            <div className="post lg:p-1 rounded-md" style={{ maxWidth:'500px',gridColumn: '1 / span 1'}}>
             
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                  {/* Banner Profile */}
                  <div className="relative">
                    <img
                      src={userData.banner}
                      alt="Banner Profile"
                      className="w-full max-h-1/2 rounded-t-lg"
                    />
                    <img
                      src={userData.avatar}
                      alt="Profile Picture"
                      className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                    />
                  </div>
                  {/* User Info with Verified Button */}
                  <div className="space-x-2 mt-16">
                  <p className="text-2xl text-center">{userData.first_name} {userData.last_name}</p>
                  <p className="text-gray-700 mt-2 text-center">
                  {userData.job_position}
                  </p>
       
                  {/* Bio */}
                 
                  {/* Social Links */}
                  <div className=" mt-4 space-x-6 text-center">
                    <a href={userData.twitter} className="text-blue-500 hover:underline">
                      {" "}
                      Twitter{" "}
                    </a>
                    <a href={userData.github} className="text-blue-500 hover:underline">
                      {" "}
                      GitHub{" "}
                    </a>
                    <a href={userData.linkedin} className="text-blue-500 hover:underline">
                      {" "}
                      LinkedIn{" "}
                    </a>
                  </div>
                </div>
                </div>
              <Addpost/>
              
            </div>


            
            <div className="h-100"  style={{minHeight: "3000px" }}>
            <Post ref={postsRef}/>
            
            </div>
          </div>

        </div>
       
      
        <Chatbox />
    
      </>
    
    </>
  );
};

export default Page;
