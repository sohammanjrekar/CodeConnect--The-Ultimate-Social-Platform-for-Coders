"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Searchbar from "../../components/Searchbar";
import Link from "next/link";

const GalleryImagesPage = ({ params }) => {
  const { id } = params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/artgallery/galleries/${id}/images/`
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [id]); // Fetch images whenever the ID changes
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <Navbar />
      {/* <Searchbar /> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id}>
              <Link href={`/Artgallary/${id}/${image.id}`}>
                <div class="group relative m-0 flex  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                  <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img
                      src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713680848/Gallery/${image.image}`}
                      class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt={image.description}
                    />
                  </div>
                  <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 class="text-sm font-light text-blue-900 shadow-xl">
                      <p>Uploaded at: {formatDate(image.uploaded_at)}</p>
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryImagesPage;
