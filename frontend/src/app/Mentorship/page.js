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
         
               
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Mentors
                  </h2>
                  
               
                <div className="mb-5 relative justify-center items-center">
                <AddMentor/>
                </div>
                
               
              
                <div className=" w-full">
                
                 <MentorCard/>
               
            
          
          </div>
        </div>
        <Footer/>
      </>
    </div>
  );
};

export default page;
