"use client"
import React from 'react';
import Addcode from './Addcode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Codecard from './Codecard';

const Page = () => {
 

  return (
    <>
      <Navbar />
      <div className='my-5 pt-8 '>
      
        
        <Codecard /> 
        <Addcode />
        </div>
     
      <Footer />
    </>
  );
};

export default Page;
