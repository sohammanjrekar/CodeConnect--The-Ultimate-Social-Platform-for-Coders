"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const Page = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/artgallery/galleries/');
        setGalleries(response.data);
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };

    fetchGalleries();
  }, []);
  const getRandomColor = () => {
    const colors = ["yellow", "red", "blue", "orange", "purple", "pink"]; // List of colors
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const fetchTagName = async (tagId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/artgallery/tags/${tagId}/`);
      return response.data.name; // Assuming the tag name is returned in the response
    } catch (error) {
      console.error('Error fetching tag name:', error);
      return ''; // Return an empty string in case of an error
    }
  };

  

  return (
    <>
      <Navbar />
      <div className="container justify-center  mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-center my-3 text-blue-600">Explore Our Gallery</h1>
      <hr />
      <div className="flex flex-wrap justify-center">
        
        {galleries.map((gallery) => (
          <div key={gallery.id} className="max-w-[28rem] m-4  group ">
             <Link href={`/Artgallary/${gallery.id}`}>
            <div className="relative grid h-[40rem] w-full z-10  border border-gray-200 opacity-80  group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent transition duration-300 ease-in-out"
                style={{ backgroundImage: `url('https://res.cloudinary.com/dp6odhftt/image/upload/v1713685248/Gallery/banner/${gallery.banner}')`, backgroundSize: 'cover', backgroundClip: 'border-box', backgroundPosition: 'center', boxShadow: 'none' }}
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 py-14 px-6 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {gallery.title}      
                </h2>
                <h2 className="mb-6 block font-sans text-md font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {gallery.description}
                </h2>
                <div className="flex flex-wrap justify-center">
            {gallery.tags.map(async (tagId, index) => {
              const tagName = await fetchTagName(tagId);
              const tagColor = getRandomColor(); // Generate a random color from the list
              return (
                <div key={index} className='m-1'>
                <button
                  className={`middle  none center rounded-lg bg-${tagColor}-500 py-2 px-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                  data-ripple-light="true"
                >
                  {tagName}
                </button>
              </div>
              
              );
            })}
            </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
