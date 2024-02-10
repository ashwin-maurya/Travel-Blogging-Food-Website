"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { updateImageURL } from "@/lib/adminactions/admin.destination.actions";
import { fetchdestinations } from "@/lib/actions/destination.actions";
const Destinations = ({ destinations }) => {
  const [destination, setDestinations] = useState([]);
  useEffect(() => {
    setDestinations(destinations);
  }, [destinations]);
  const handleImageUpload = async (selectedImage, destinationId) => {
    try {
      console.log("Uploading image...");

      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "demo_kahaani_studio");
      formData.append("cloud_name", "dhktoeo0l");

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dhktoeo0l/image/upload`;

      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const imageUrl = data.secure_url;

      console.log("Image URL:", imageUrl);
      handleSubmit(imageUrl, destinationId);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleChange = (event, destinationId) => {
    const selectedFile = event.target.files[0];
    handleImageUpload(selectedFile, destinationId);
  };

  const handleSubmit = async (imageURL, destinationId) => {
    console.log("Image URL:", imageURL);
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    const res = await updateImageURL(destinationId, imageURL, authToken);
    if (res) {
      const destination = await fetchdestinations();
      setDestinations(destination);

      toast.success("Destination Image uploaded!");
    } else {
      toast.error("Internal Server Error!");
    }
  };

  return (
    <>
      <div className="my-0 flex flex-col">
        <h1 className="break-words text-center font-Gamiliademo text-2xl font-bold uppercase">
          Your Destinations
        </h1>
        <div className="mt-10 flex w-full flex-wrap">
          {destination?.map((destination, index) => (
            <div
              className="max-w-1/4 min-w-1/4 group relative m-2 my-4 w-1/4 cursor-pointer overflow-hidden bg-stone-100 max-md:m-1 max-md:my-2 "
              key={index}
            >
              <div className="min-h-[150px] w-full">
                {destination?.imageURL ? (
                  <img
                    className="min-h-[150px] w-full object-cover object-center"
                    src={destination.imageURL}
                    alt=""
                  />
                ) : (
                  <div className="flex w-full flex-row p-4">
                    <label
                      htmlFor={`dropzone-file-${index}`}
                      className="flex h-40 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
                    >
                      <div className="pb- justify-center6 flex flex-col items-center p-2">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>

                        <p className="text-center text-xs text-gray-500 ">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                      <input
                        id={`dropzone-file-${index}`}
                        type="file"
                        className="hidden"
                        name="imageURL"
                        onChange={(e) => handleChange(e, destination._id)}
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="p-2 px-5">
                {destination?.imageURL && (
                  <div className="flex">
                    <label
                      htmlFor={`dropzone-file-${index}`}
                      className="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
                    >
                      <svg
                        className="h-6 w-6 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="ml-2 text-center font-sans text-sm font-semibold text-gray-500 ">
                        Change
                      </p>
                      <input
                        id={`dropzone-file-${index}`}
                        type="file"
                        className="hidden"
                        name="imageURL"
                        onChange={(e) => handleChange(e, destination._id)}
                      />
                    </label>
                  </div>
                )}
                <h1 className="font-Oswald text-xl">{destination.location}</h1>
                <p className="font-CooperHevitt text-base">
                  Total Content: {destination.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
