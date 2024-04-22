"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import RatingScore from '@/app/components/RatingScore';
import Reviews from '@/app/components/Reviews';
import { useRouter } from 'next/router';

const EachBlog = ({ params }) => {
  const { id } = params;
  const [blogData, setBlogData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentContent, setCommentContent] = useState('');

  const fetchBlogAndComments = async () => {
    setLoading(true);
    try {
      // Fetch blog data
      const blogResponse = await fetch(`http://127.0.0.1:8000/blogs/blog-posts/${id}/`, {
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'wVqNf0EzeNU9qe3vKta9TZMYZe9QLUj9qCDjMbrDBdQv1Q7lprDgSb7mgpEcbyQb'
        }
      });
      if (!blogResponse.ok) {
        throw new Error('Failed to fetch blog');
      }
      const blogData = await blogResponse.json();
      setBlogData(blogData);

      // Fetch comments for the blog post
      const commentsResponse = await fetch(`http://127.0.0.1:8000/blogs/posts/${id}/comments/`, {
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'wVqNf0EzeNU9qe3vKta9TZMYZe9QLUj9qCDjMbrDBdQv1Q7lprDgSb7mgpEcbyQb'
        }
      });
      if (!commentsResponse.ok) {
        throw new Error('Failed to fetch comments');
      }
      const commentsData = await commentsResponse.json();

      // Fetch user details for each comment
      const commentsWithUserData = await Promise.all(commentsData.map(async (comment) => {
        const userResponse = await fetch(`http://127.0.0.1:8000/account/users/${comment.user}/`);
        if (!userResponse.ok) {
          throw new Error(`Failed to fetch user data for comment ${comment.id}`);
        }
        const userData = await userResponse.json();
        return { ...comment, userData };
      }));

      setComments(commentsWithUserData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  const handleCommentSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/blogs/posts/${id}/comments/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'wVqNf0EzeNU9qe3vKta9TZMYZe9QLUj9qCDjMbrDBdQv1Q7lprDgSb7mgpEcbyQb'
        },
        body: JSON.stringify({
          
          user: 1,
          content: commentContent,
          post: id
        })
      });
      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }
      setCommentContent('');
      setLoading(false);
      fetchBlogAndComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError('Failed to submit comment');
      setLoading(false);
    }
  };  
  const handleLike = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/blogs/blog-posts/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'wVqNf0EzeNU9qe3vKta9TZMYZe9QLUj9qCDjMbrDBdQv1Q7lprDgSb7mgpEcbyQb'
        },
        body: JSON.stringify({
          title: blogData.title,
        content: blogData.content,
        author: blogData.author, // Dummy author ID
          likes: blogData.likes + 1, // Increment likes by 1
          dislikes: blogData.dislikes // Keep dislikes the same
        })
      });
      if (!response.ok) {
        throw new Error('Failed to like the post');
      }
      const updatedBlogData = await response.json();
      setBlogData(updatedBlogData); // Update local state with updated data
      fetchBlogAndComments(); // Refresh comments after successful update
    } catch (error) {
      console.error('Error liking post:', error);
      // Display a user-friendly error message or handle the error in another way
    }
  };
  
  const handleDislike = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/blogs/blog-posts/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'wVqNf0EzeNU9qe3vKta9TZMYZe9QLUj9qCDjMbrDBdQv1Q7lprDgSb7mgpEcbyQb'
        },
        body: JSON.stringify({
          title: blogData.title,
          content: blogData.content,
          author: blogData.author,
          likes: blogData.likes, // Keep likes the same
          dislikes: blogData.dislikes + 1 // Increment dislikes by 1
        })
      });
      if (!response.ok) {
        throw new Error('Failed to dislike the post');
      }
      const updatedBlogData = await response.json();
      setBlogData(updatedBlogData); // Update local state with updated data
      fetchBlogAndComments(); // Refresh comments after successful update
    } catch (error) {
      console.error('Error disliking post:', error);
      // Display a user-friendly error message or handle the error in another way
    }
  };
  
  
  useEffect(() => {
    fetchBlogAndComments();
  }, [id]);

  
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {blogData && (
            <>
              <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                    {blogData.title}
                  </h2>
                </div>
                <img
                  src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713679707/Blogs/${blogData.featured_image}`}
                  className="w-full object-cover lg:rounded"
                  style={{ height: "28em" }}
                  alt={blogData.featured_image}
                />
              </div>
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed">
                <p className="pb-6">{blogData.content}</p>
                {/* Render other blog details as needed */}
              </div>
            </>
          )}
        </main>
      </div>
    
      <Reviews
                comments={comments}
                loading={loading}
                error={error}
                commentContent={commentContent}
                setCommentContent={setCommentContent} 
                handleCommentSubmit={handleCommentSubmit}
            />
       {blogData && (
        <RatingScore
          blogData={blogData}
          handleLike={() => handleLike(blogData.id)}
          handleDislike={() => handleDislike(blogData.id)}
        />
      )}
    <Footer />
  </div>
);
};

export default EachBlog;
