import React, { useEffect, useState } from 'react';
import AddMentor from './AddMentor';
import Searchbar from '../components/Searchbar';
import Link from 'next/link';


const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 9;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalCounts, setTotalCounts] = useState({
    totalPosts: 0,
    totalSearchResults: 0,
  });
  const fetchUsername = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/account/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch username');
      }
      const data = await response.json();
      return data.username;
    } catch (error) {
      console.error('Error fetching username:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/MentorshipMatching/mentorship-profiles/?page=${page}&limit=${postsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log(data)
        const uniquePosts = removeDuplicates([...posts, ...data.results], 'id');
        setPosts(uniquePosts);
        setTotalCounts(prevCounts => ({
          ...prevCounts,
          totalPosts: data.count,
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

  const removeDuplicates = (array, key) => {
    return array.reduce((uniqueArray, item) => {
      const unique = uniqueArray.find(element => element[key] === item[key]);
      if (!unique) {
        uniqueArray.push(item);
      }
      return uniqueArray;
    }, []);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const apiUrl = `http://127.0.0.1:8000/MentorshipMatching/search/?query=${searchQuery}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setSearchResults(data.results);
      setTotalCounts(prevCounts => ({
        ...prevCounts,
        totalSearchResults: data.count,
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

  const renderPosts = () => {
    // Determine the array to render based on whether there are search results or not
    const postsToRender = searchQuery.trim() !== '' ? searchResults : posts;
    
    return postsToRender.map(async(profile) => {
      const username = await fetchUsername(profile.user);

      return(

      <div key={profile.id} className="mb-6 rounded-lg bg-white p-6">
        <Link href={`/Mentorship/${profile.id}`}>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="mr-2 h-10 w-10 rounded-full object-cover"
              src={`http://127.0.0.1:8000/account/users/${profile.user}/avatar/`}
              alt="profile"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {username} {/* Display username */}
              </h3>
              <span className="block text-xs font-normal text-gray-500">
                {profile.expertise}
              </span>
            </div>
          </div>
          <p className="text-sm font-medium text-indigo-500">
            <span className="mr-0.5">+</span>Follow
          </p>
        </div>
        <p className="my-6 text-sm font-normal text-gray-500">
          {profile.feedback}
        </p>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-2 h-5 w-5 text-base text-gray-500"
            >
              {/* Task icon */}
            </svg>
            <span className="mr-1">{profile.total_ratings}</span> Task
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1 h-5 w-6 text-yellow-500"
            >
              {/* Star icon */}
            </svg>
            {profile.total_stars} ({profile.total_ratings} Reviews)
          </div>
          
        </div>
        </Link>
      </div>
      );
  });
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="mb-4">
            <p>Total Posts: {totalCounts.totalPosts}</p>
            <p>Total Search Results: {totalCounts.totalSearchResults}</p>
          </div>
          <div className="container mx-auto px-4 w-full">
            <h1 className="text-3xl font-semibold mb-6">Mentorship Profiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderPosts()}
            </div>
            <button onClick={handleNextPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Load More</button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Page;
