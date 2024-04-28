import React, { useState } from 'react';

const Likes = ({ postlike, postdislike, postId }) => {
  const [likes, setLikes] = useState(postlike);
  const [dislikes, setDislikes] = useState(postdislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = async () => {
    if (!liked && !disliked) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/codereivew/like/${postId}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          // Increment likes count locally
          setLikes(likes + 1);
          // Set liked state to true
          setLiked(true);
        } else {
          console.error('Failed to increment likes');
        }
      } catch (error) {
        console.error('Error incrementing likes:', error);
      }
    }
  };

  const handleDislike = async () => {
    if (!liked && !disliked) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/codereivew/dislike/${postId}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          // Increment dislikes count locally
          setDislikes(dislikes + 1);
          // Set disliked state to true
          setDisliked(true);
        } else {
          console.error('Failed to increment dislikes');
        }
      } catch (error) {
        console.error('Error incrementing dislikes:', error);
      }
    }
  };

  return (
    <div>
       <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded-md mr-4" disabled={liked || disliked}>
         {likes} Like
       </button>
       <button onClick={handleDislike} className="bg-red-500 text-white px-4 py-2 rounded-md" disabled={liked || disliked}>
         {dislikes} Dislike
       </button>
    </div>
  );
};

export default Likes;
