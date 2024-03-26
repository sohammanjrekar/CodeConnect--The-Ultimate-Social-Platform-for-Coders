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
                <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                  <form>
                    {/* Post Content Section */}
                    <div className="mb-6">
                      <label
                        htmlFor="postContent"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Post Content:
                      </label>
                      <textarea
                        id="postContent"
                        name="postContent"
                        rows={4}
                        className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
              sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                        placeholder="What's on your mind?"
                        defaultValue={""}
                      />
                    </div>
                    {/* File Attachment Section */}
                    <div className="mb-6">
                      <label
                        htmlFor="fileAttachment"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Attach File:
                      </label>
                      <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
                        <input
                          type="file"
                          id="fileAttachment"
                          name="fileAttachment"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          <span className="ml-2 text-sm text-gray-600">
                            Choose a file
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Max file size: 5MB
                        </span>
                      </div>
                    </div>
                    {/* Submit Button and Character Limit Section */}
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                      >
                        {" "}
                        Post{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={19}
                          viewBox="0 0 24 24"
                          id="send"
                          fill="#fff"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z" />
                          <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                        </svg>
                      </button>
                      <span className="text-gray-500 text-sm">
                        Max 280 characters
                      </span>
                    </div>
                  </form>
                </div>
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
