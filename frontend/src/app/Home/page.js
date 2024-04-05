"use client";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MdSettings, MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useClickOutside } from "@mantine/hooks";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import SubscriptionCard from "../components/SubscriptionCard";
import Testinomial from "../components/Testinomial";
import CTA from "../components/CTA";
import {
  setCampaigns,
  deleteCampaign,
  addCampaign,
} from "@/redux/Slices/campaignslice";
import Chatbox from "../chats/page";
import IndexHeroNav from "../components/IndexHeroNav";
import Post from "../Post/page";
import Addpost from "../Post/Addpost";
const Page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    try {
      // Fetch posts from API
      const postsData = await fetchPosts(); // Implement this function to fetch posts
      setPosts(postsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setIsLoading(false);
    }
  };

  const fetchCommentsForPost = async (postId) => {
    try {
      // Fetch comments for a specific post from API
      const commentsData = await fetchCommentsByPostId(postId); // Implement this function to fetch comments by post ID
      // Handle comments data (e.g., store in state or display)
      console.log("Comments for post ID:", postId, commentsData);
    } catch (error) {
      console.error("Error fetching comments for post ID:", postId, error);
    }
  };

  return (
    <>
      <Navbar />
      <IndexHeroNav />
      <>
        {/* component */}
        <div className="h-screen  bg-white mb-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
            <div className="post p-5 lg:p-1 rounded-md">
              <div className="">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                  {/* Banner Profile */}
                  <div className="relative">
                    <img
                      src="https://truecontext.com/wp-content/uploads/2023/11/tile-image-drel-guide.jpg"
                      alt="Banner Profile"
                      className="w-full rounded-t-lg"
                    />
                    <img
                      src="https://iti-digital.com/wp-content/uploads/2020/07/AdobeStock_317917475-scaled.jpeg"
                      alt="Profile Picture"
                      className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                    />
                  </div>
                  {/* User Info with Verified Button */}
                  <div className="flex items-center mt-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      John Doe
                    </h2>
                  </div>
                  {/* Bio */}
                  <p className="text-gray-700 mt-2">
                    {" "}
                    Web Developer | Cat Lover | Coffee Enthusiast{" "}
                  </p>
                  {/* Social Links */}
                  <div className="flex items-center mt-4 space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      Twitter{" "}
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      GitHub{" "}
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      {" "}
                      LinkedIn{" "}
                    </a>
                  </div>
                </div>
              <Addpost/>
              </div>
            </div>


            <Post/>
          </div>
        </div>
        <Services />
        <CTA />
        <SubscriptionCard />
        <Testinomial />

        <Footer />
        <Chatbox />
      </>
    </>
  );
};

export default Page;
