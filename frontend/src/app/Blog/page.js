"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'
import Addarticle from './Addarticle'
import Link from 'next/link'


const page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/blogs/blog-posts/')
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <>
      <Navbar/>
      <Searchbar/>
  {/* component */}
  <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
    <div
      className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
max-w-7xl"
    > 
      <div className="flex flex-col items-center sm:px-5 md:flex-row">
        <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
          <div
            className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
      md:space-y-5"
          >
            <div
              className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
        uppercase inline-block"
            >
              <p className="inline">
               
              </p>
              <p className="inline text-xs font-medium">New</p>
            </div>
            <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              Write anything. Be creative.
            </a>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <p className="text-sm font-medium inline">author:</p>
              <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                Jack Sparrow
              </a>
              <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                · 23rd, April 2021 ·
              </p>
              <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                1hr 20min. read
              </p>
            </div>
          </div>
        </div>
       
        <div className="w-full md:w-1/2">
          <div className="block">
            <img
              src=""
              className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
  {posts.map((post) => (
    <div key={post.id} className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      {/* <Link href={`/Blog/${post.id}`} passHref> */}
        <a>
          <img
            src={post.featured_image}
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
          />
        </a>
      {/* </Link> */}
      <p
        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
        rounded-full uppercase inline-block"
      >
        {post.categories.length > 0 ? post.categories.map((category) => category.title).join(', ') : 'Uncategorized'}
      </p>
      {/* <Link href={`/Blog/${post.id}`} passHref> */}
        <a className="text-lg font-bold sm:text-xl md:text-2xl">{post.title}</a>
      {/* </Link> */}
      <p className="text-sm text-black">
        {Array.isArray(post.content) ? post.content.join(' ') : post.content}
      </p>
      <div className="pt-2 pr-0 pb-0 pl-0">
        {/* <Link href={`/author/${post.author}`} passHref> */}
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
            Author Name {/* Replace with actual author name from your API */}
          </a>
        {/* </Link> */}
        <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
          · {new Date(post.created_at).toLocaleDateString()} ·
        </p>
        <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
          {post.reading_time} min. read {/* Replace with actual reading time from your API */}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
  </div>
  <Addarticle/>
  <Footer/>
</>

    </>
  )
}

export default page
