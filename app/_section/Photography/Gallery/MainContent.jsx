"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import PhotoModal from "./PhotoModal";
import GallerySkeleton from "./GallerySkeleton";
import Image from "next/image";

export default function MainContent({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [images, setImages] = useState(photos);

  useEffect(() => {
    console.log("Photos", photos);
    setImages(photos);
  }, [photos]);
  const handleImageLoad = (imageId) => {
    // Mark the image as loaded
    setLoadedImages((prevLoadedImages) => {
      console.log("Previous Loaded Images:", prevLoadedImages);
      console.log("Adding Image ID:", imageId);
      return [...prevLoadedImages, imageId];
    });
  };

  // if (!images || images.length === 0) {
  //   // Render a loading state or return null
  //   return <GallerySkeleton />;
  // }

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="text-center font-CooperHewitt text-4xl mt-20 font-thin uppercase">
        Photo Gallery
      </h1>
      <div className="mt-10 block w-full columns-3 max-sm:p-1 break-inside-avoid gap-10 max-sm:gap-1 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
        {images.map((image, index) => (
          <div
            className="group unset-img relative m-2 max-sm:m-0 my-4 w-full h-full max-h-full cursor-pointer overflow-hidden max-md:m-1 max-md:my-2 "
            key={index}
            onClick={() => openImage(image)}
          >
            <Image
              src={image.imageURL}
              alt={image.imgDescription}
              className=" custom-img w-full h-auto transition-all object-cover object-center duration-500 ease-in-out  group-hover:scale-105 group-hover:opacity-90"
              onLoad={() => handleImageLoad(image._id)}
              layout="fill"
            />

            {/* <img loading="lazy" /> */}

            <div className="absolute left-0  top-0 bg-[#00000071] px-5 py-3 transition-all duration-300 ease-in-out max-md:px-2 max-md:py-1">
              <h1 className="block font-CooperHewitt text-base uppercase tracking-wide text-white max-md:text-xs">
                {image.imageLocation}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <PhotoModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          imageData={images} // Pass the entire images array to the PhotoModal
          closeImage={closeImage}
        />
      )}
    </>
  );
}
