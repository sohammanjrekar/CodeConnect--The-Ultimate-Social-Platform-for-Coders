"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Searchbar from "../../components/Searchbar";
import Link from "next/link";
import Addarticle from "./Addarticle";

const GalleryImagesPage = ({ params }) => {
  const { id } = params;
  const [images, setImages] = useState([]);
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
        const response = await axios.get(`http://127.0.0.1:8000/artgallery/galleries/${id}/images/`);
        setImages(prevImages => [...prevImages, ...response.data]);
        setTotalCounts(prevCounts => ({
          ...prevCounts,
          totalPosts: response.data.count,
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
      const apiUrl = `http://127.0.0.1:8000/artgallery/search/?query=${searchQuery}`;
      const response = await axios.get(apiUrl);
      setSearchResults(response.data.results);
      setTotalCounts(prevCounts => ({
        ...prevCounts,
        totalSearchResults: response.data.count,
      }));
      setLoading(false);
      setPage(1); // Reset page number to 1 after search
    } catch (error) {
      console.error('Error searching blogs:', error);
      setError('Failed to search blogs');
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

  const formatDate = (date) => {
    // Implement your date formatting logic here
    return date;
  };

  const renderPosts = () => {
    // Determine the array to render based on whether there are search results or not
    const postsToRender = searchQuery.trim() !== '' ? searchResults : images;

    // Create a Set to store unique post IDs
    const uniquePostIds = new Set();

    // Filter out duplicate posts and limit the number of posts to display
    const uniquePosts = postsToRender.slice(0, postsPerPage).filter(post => {
      if (uniquePostIds.has(post.id)) {
        return false; // Skip if post ID is already in Set
      } else {
        uniquePostIds.add(post.id); // Add post ID to Set
        return true;
      }
    });

    return uniquePosts.map(image => (
      <div key={image.id}>
              <Link href={`/Artgallary/${id}/${image.id}`}>
                <div className="group relative m-0 flex  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src={image.image}
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt={image.description}
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="text-sm font-light text-blue-900 shadow-xl">
                      <p>Uploaded at: {formatDate(image.uploaded_at)}</p>
                    </h1>
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

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {renderPosts()}
        </div>
        {!loading && images.length < totalCounts.totalPosts && (
          <button onClick={handleNextPage} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load More
          </button>
        )}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <Addarticle galleryId={id}/>
      <Footer />
    </>
  );
};

export default GalleryImagesPage;
