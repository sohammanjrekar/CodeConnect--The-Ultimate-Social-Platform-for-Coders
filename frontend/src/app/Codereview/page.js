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
      <div className='m-3'>
        <Addcode />
        
        <Codecard /> 
        </div>
     
      <Footer />
    </>
  );
};

export default Page;
