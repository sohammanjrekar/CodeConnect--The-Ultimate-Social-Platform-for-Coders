import React from 'react';
import Calender from '../components/Calender';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListOfChallenge from './ListOfChallenge';
import LCard from './LCard';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex flex-row mx-auto">
        <LCard />
        <Calender />
      </div>
      <ListOfChallenge />
      <Footer />
    </div>
  );
};

export default Page;
