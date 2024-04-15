"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';
import Addarticle from './Addarticle';
import Link from 'next/link';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/blogs/blog-posts/?page=${page}&limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPosts(prevPosts => [...prevPosts, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
  const handleSearch = async () => {
    setLoading(true);
    try {
      const apiUrl = `http://127.0.0.1:8000/blogs/search/?query=${searchQuery}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
      setPage(1); // Reset page number to 1 after search
    } catch (error) {
      console.error('Error searching blogs:', error);
      setError('Failed to search blogs');
      setLoading(false);
    }
  };

  if (searchQuery.trim() !== '') {
    setSearchResults([]); // Clear previous search results
    handleSearch();
  }
}, [searchQuery]);


  const renderPosts = () => {
    const postsToRender = searchQuery.trim() !== '' ? searchResults : posts;
    return postsToRender.map(post => (
      <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <Link href={`/Blog/${post.id}`}>
          <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow my-4">
            <img
              src="https://clickfirstmarketing.com/wp-content/uploads/Purpose-of-Blogging.jpeg"
              className="aspect-video w-full object-cover"
              alt=""
            />
            <div className="p-4">
              <h2 className="text-xl font-medium text-gray-900">{post.title}</h2>
              <ul className="mt-2">
              {post.content.slice(1, 90)}...
              </ul>
              <p className="text-sm text-gray-500 mt-4">Published on: {post.created_at}</p>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Navbar />
      <Searchbar setSearchQuery={setSearchQuery}  />

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
    </>
  );
};

export default Page;
