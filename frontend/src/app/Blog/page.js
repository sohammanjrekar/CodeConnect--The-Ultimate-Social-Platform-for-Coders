"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';
import Addarticle from './Addarticle';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/blogs/blog-posts/?page=${page}&limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        if (page === 1) {
          setPosts(data.results); // Set posts only if it's the first page
        } else {
          setPosts(prevPosts => [...prevPosts, ...data.results]); // Append posts for subsequent pages
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const renderPosts = () => {
    return posts.map(post => (
      <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow my-4">
          <img
            src="https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg"
            className="aspect-video w-full object-cover"
            alt=""
          />
          <div className="p-4">
            <h2 className="text-xl font-medium text-gray-900">{post.title}</h2>
            <ul className="mt-2">
              {post.content.slice(1, -1).split("', '").map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">Published on: {post.created_at}</p>
          </div>
        </div>
      </div>
    ));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderPosts()}
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Load More</button>
        </div>
      </div>
      <Addarticle />
      <Footer />
      {/* UI Component */}
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        {/* Your UI component HTML goes here */}
      </div>
    </>
  );
};

export default Page;
