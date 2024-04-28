import React, { useState, useEffect, forwardRef } from "react";
import Addcomments from "./Addcomments";
import Likes from "./Likes";

const Post = forwardRef((props, ref) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const limit = 10; // Number of posts to fetch per page

  function formatTimeAgo(timestamp) {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
  
    const timeDifference = currentTime.getTime() - postTime.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    if (daysDifference > 30) {
      const monthsDifference = Math.floor(daysDifference / 30);
      if (monthsDifference > 12) {
        const yearsDifference = Math.floor(monthsDifference / 12);
        return `Posted ${yearsDifference} year${yearsDifference > 1 ? 's' : ''} ago`;
      }
      return `Posted ${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference > 0) {
      return `Posted ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else if (hoursDifference > 0) {
      return `Posted ${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference > 0) {
      return `Posted ${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    } else {
      return `Posted just now`;
    }
  }
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/post/posts/?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const responseData = await response.json();
        const { results: fetchedPosts } = responseData; // Extracting the 'results' array from the response

        // Fetch post and user data sequentially for each post
        const postsWithUserData = [];
        for (const post of fetchedPosts) {
          const userResponse = await fetch(
            `http://localhost:8000/account/users/${post.user}/`
          );
          const userData = await userResponse.json();
          postsWithUserData.push({ ...post, userData });
        }

        setPosts((prevPosts) => [...prevPosts, ...postsWithUserData]);
        setLoading(false);
        setHasMore(responseData.next !== null); // Update hasMore based on the 'next' field in the response
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };

    // Fetch posts initially
    fetchPosts();

    // Fetch next page every 3 seconds
    const intervalId = setInterval(() => {
      setPage((prevPage) => prevPage + 1);
    }, 30000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [page]);

  return (
    <div ref={ref}
      className="pb-72"
      style={{
        maxHeight: "2000px",
        minWidth: "1400px",
        
        gridColumn: "2 / span 2"
      }}
      id="boss"
    >
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg drop-shadow-2xl  mb-4 p-5">
          <div className="flex items-center space-x-2 mb-4 ml-14">
            <img
              src={
                post.userData?.avatar ||
                "https://www.nicepng.com/png/detail/804-8049853_med-boukrima-specialist-webmaster-php-e-commerce-web.png"
              }
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                {post.userData?.first_name || "Unknown User"} {post.userData?.last_name || "Unknown User"}
              </p>
              <p className="text-gray-500 text-sm">
                {formatTimeAgo(post.created_at)}
              </p>
            </div>
          </div>
          <p className="text-gray-800 ml-28">{post.content}</p>
          <img
            src={post.image}
            alt="Post Image"
            className="w-5/6 h-5/6 mx-auto my-3 object-cover rounded-md mb-4"
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
              <Likes postlike={post.likes} postId={post.id}/>
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
            </button>
          </div>

          <Addcomments postid={post.id}/>
        </div>
      ))}
      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center text-red-500 mt-4">{error}</div>}
      {!loading && !posts.length && (
        <div className="text-center mt-4">No posts to show</div>
      )}
    </div>
  );
})

export default Post;
