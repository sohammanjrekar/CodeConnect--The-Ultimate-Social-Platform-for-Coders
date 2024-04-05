import React, { useState, useEffect } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/post/posts/?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPosts(prevPosts => [...prevPosts, ...data]);
        setLoading(false);
        setHasMore(data.length > 0); // Update hasMore based on data length
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchPosts();
    }
  }, [page, hasMore]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && hasMore) {
      setPage(prevPage => prevPage + 1); // Only increment page if there are more posts
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const fetchUserData = async (userId) => {
    try {
      if (!userId) {
        return null; // Return null if userId is not defined
      }
      const response = await fetch(`http://localhost:8000/account/users/${userId}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  
  const getUserAvatar = async (userId) => {
    const userData = await fetchUserData(userId);
    return userData ? userData.avatar : 'https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png';
  };
  
  const getUserUsername = async (userId) => {
    const userData = await fetchUserData(userId);
    return userData ? userData.username : 'Unknown User';
  };
  

  return (
    <div className="overflow-y-auto max-h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
        {/* Render posts */}
        {posts.map(post => (
          <div key={post.id} className="bg-white p-8 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={getUserAvatar(post.user_id)}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">{getUserUsername(post.user_id)}</p>
                <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{post.content}</p>
            <img
              src={post.image ? post.image : 'https://codeop.tech/wp-content/uploads/2022/09/women-in-coding-e1664430458975.jpg'}
              alt="Post Image"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between text-gray-500">
              <button className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {/* Like icon */}
                </svg>
                <span>{post.likes} Likes</span>
              </button>
              <button className="flex items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Comment icon */}
                </svg>
                <span>{post.comments.length} Comments</span>
              </button>
            </div>
          </div>
        ))}
        {/* Loader while fetching */}
        {loading && <div className="text-center mt-4">Loading...</div>}
        {/* Error message */}
        {error && <div className="text-center text-red-500 mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default Post;
