"use client"
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Link from 'next/link';


const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalCounts, setTotalCounts] = useState({
    totalPosts: 0,
    totalSearchResults: 0,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/events/events/?page=${page}&limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPosts(prevPosts => [...prevPosts, ...data]);
        setTotalCounts(prevCounts => ({
          ...prevCounts,
          totalPosts: data.length,
        }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const apiUrl = `http://127.0.0.1:8000/events/events/?search=${searchQuery}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setSearchResults(data);
      setTotalCounts(prevCounts => ({
        ...prevCounts,
        totalSearchResults: data.length,
      }));
      setLoading(false);
      setPage(1); // Reset page number to 1 after search
    } catch (error) {
      console.error('Error searching events:', error);
      setError('Failed to search events');
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== '') {
        setSearchResults([]); // Clear previous search results
        handleSearch();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const renderPosts = () => {
    // Determine the array to render based on whether there are search results or not
    const eventsToRender = searchQuery.trim() !== '' ? searchResults : posts;

    return eventsToRender.map(event => (
      <div className="flex flex-col w-full bg-white rounded shadow-lg  md:w-7/2 lg:w-100 my-3 ,x-2" key={event.id}>
        <Link href={`Events/${event.id}`}>
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/Events/${event.image}')`
          }}
        />
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/5">
            <div className="md:text-3xl">{new Date(event.start_date).toLocaleString('default', { month: 'short' })}</div>
            <div className="md:text-6xl">{new Date(event.start_date).getDate()}</div>
            <div className="md:text-xl">{new Date(event.start_date).toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              {event.title}
            </h1>
            <p className="leading-normal">{event.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">{event.location}</div>
              <div className="w-1/2 flex justify-end">
                {/* Here you can place an image related to the event */}
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    ));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== '') {
      setSearchResults([]); // Clear previous search results
      handleSearch();
    }
  };

  return (
    <>
      <Navbar />
      <Searchbar setSearchQuery={setSearchQuery} handleSearch={handleSearchButtonClick} />

      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="mb-4">
            <p>Total Posts: {totalCounts.totalPosts}</p>
            <p>Total Search Results: {totalCounts.totalSearchResults}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            {renderPosts()}
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Load More</button>
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default Page;
