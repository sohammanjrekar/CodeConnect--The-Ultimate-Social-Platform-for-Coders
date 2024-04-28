import React, { useState, useEffect } from 'react';

const Likes = ({ postlike, postId }) => {
  const [likes, setLikes] = useState(postlike);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of posts the user has already liked from localStorage
    const likedPostsFromStorage = JSON.parse(localStorage.getItem('likedPosts')) || [];
    setLikedPosts(likedPostsFromStorage);
  }, []);

  const handleLike = async () => {
    if (!likedPosts.includes(postId)) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/post/like/${postId}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          // Increment likes count locally
          setLikes(likes + 1);
          // Add the post ID to the list of liked posts
          setLikedPosts([...likedPosts, postId]);
          // Store the updated liked posts list in localStorage
          localStorage.setItem('likedPosts', JSON.stringify([...likedPosts, postId]));
        } else {
          console.error('Failed to increment likes');
        }
      } catch (error) {
        console.error('Error incrementing likes:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        <div className="mr-2 gap-0 grid  grid-cols-2">
          <svg
            className="fill-rose-600 dark:fill-rose-400"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
          >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          <span className="text-lg font-bold">
            {likes} Likes
          </span>
        </div>
      </button>
    </div>
  );
};

export default Likes;
