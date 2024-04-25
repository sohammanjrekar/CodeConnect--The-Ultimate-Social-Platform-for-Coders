"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import RatingScore from "@/app/components/RatingScore";
import Reviews from "@/app/components/Reviews";

const Page = ({ params }) => {
  const { id, imageid } = params;
  const [imageData, setImageData] = useState(null);
  const [designerData, setDesignerData] = useState({});
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageResponse = await axios.get(`http://127.0.0.1:8000/artgallery/images/${imageid}/`);
       
        setImageData(imageResponse.data);
       
        const designerResponse = await axios.get(`http://127.0.0.1:8000/artgallery/designer-profiles/${imageResponse.data.designer}/`);
        setDesignerData(designerResponse.data);

        const userResponse = await axios.get(`http://127.0.0.1:8000/account/users/${designerResponse.data.user}/`);
        setUserData(userResponse.data);

        fetchComments(id);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, [id, imageid]);
  useEffect(() => {
    console.log(imageData);
  }, [imageData]);

  const fetchComments = async (imageid) => {
    setLoading(true);
    try {
      const commentsResponse = await axios.get(`http://127.0.0.1:8000/artgallery/posts/${imageid}/comments/`);
      setComments(commentsResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Failed to fetch comments');
      setLoading(false);
    }
  };

  const handleCommentSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/artgallery/posts/${imageid}/comments/create/`, {
        user: 1,
        content: commentContent,
        image: imageid
      });
      if (response.status !== 201) {
        throw new Error('Failed to submit comment');
      }
      setCommentContent('');
      fetchComments(imageid);
    } catch (error) {
      console.error('Error submitting comment:', error);
      setError('Failed to submit comment');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/artgallery/images/${imageid}/`, {
        ...imageData,
        likes: imageData.likes + 1
      });
      fetchComments(imageid);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/artgallery/images/${imageid}/`, {
        ...imageData,
        dislikes: imageData.dislikes + 1
      });
      fetchComments(imageid);
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/artgallery/galleries/${id}/`);
        // Assuming response.data is a single gallery object
        setGalleries(response.data); // Convert the response data to an array and set it
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };
  
    fetchGalleries();
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800">
      {imageData && (
        <div className="flex justify-center h-screen">
         
          <div className="bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `url(${imageData.image})` }}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-10">
              <div>
                <h2 className="text-4xl font-bold text-white">{galleries.title}</h2>
                <p className="max-w-xl mt-3 text-gray-300">{imageData.description}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md  mx-auto lg:w-2/3">
            <div className="flex-1 inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="items-center w-full mx-auto relative max-w-7xl ">
                <div className="grid grid-cols-1">
                  <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                    <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                      <img src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713680848/User/${userData.avatar}`} className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl" alt="User Avatar" />
                      <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{userData.first_name} {userData.last_name}</p>
                      <h2 className="text-center text-2xl font-semibold mt-3">Mark Xenon</h2>
                      <p className="text-center text-gray-600 mt-1">Software Engineer</p>
                      <div className="flex justify-center mt-5">
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Portfolio</a>
                      </div>
                      <div className="mt-5">
                        <h3 className="text-xl font-semibold">Bio</h3>
                        <p className="text-gray-600 mt-2">{designerData.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
    
        </div>
            )}
        <Reviews
          userData={userData}
          comments={comments}
          loading={loading}
          error={error}
          commentContent={commentContent}
          setCommentContent={setCommentContent}
          handleCommentSubmit={handleCommentSubmit}
        />
       {imageData && ( <RatingScore
          blogData={imageData}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />)}
      </div>
      <Footer />
    </>
  );
};

export default Page;
