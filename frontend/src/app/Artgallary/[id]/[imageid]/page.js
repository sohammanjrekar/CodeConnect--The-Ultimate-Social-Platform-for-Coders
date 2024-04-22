"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";

const Page = ({ params }) => {
  const { id, imageid } = params;
  const [imageData, setImageData] = useState({});
  const [designerData, setDesignerData] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/artgallery/images/${imageid}/`);
        setImageData(response.data);
        const designerId = response.data.designer;

        const designerResponse = await axios.get(`http://127.0.0.1:8000/artgallery/designer-profiles/${designerId}/`);
        setDesignerData(designerResponse.data);

        const userId = designerResponse.data.user;
        const userResponse = await axios.get(`http://127.0.0.1:8000/account/users/${userId}/`);
        setUserData(userResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchImageData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800">
        <div className="flex justify-center h-screen">
          <div
            className=" bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dp6odhftt/image/upload/v1713680848/Gallery/${imageData.image})`
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Brand</h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  {imageData.description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-md  mx-auto lg:w-2/3">
            <div className="flex-1 inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div className="items-center w-full mx-auto relative max-w-7xl ">
                  <div className="grid grid-cols-1">
                    <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                      <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                        <img
                          src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713680848/User/${userData.avatar}`}
                          className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                          alt="User Avatar"
                        />
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
        </div>
   
      <Footer />
    </>
  );
};

export default Page;
