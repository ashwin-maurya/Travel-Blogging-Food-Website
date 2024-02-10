"use client";
import React, { useEffect, useState } from "react";
import { deleteImage } from "@/lib/adminactions/admin.gallery.actions";
import { fetchgallery } from "@/lib/actions/gallery.actions";
import { toast } from "react-toastify";
export default function UpdateImages({ images }) {
  const [image, setImages] = useState([]);
  useEffect(() => {
    setImages(images);
  }, [images]);

  const handleDelete = async (imageId) => {
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    let isConfirm = confirm("Are you sure you want to delete this image?");
    if (!isConfirm) {
      return;
    }
    const deleted = await deleteImage(imageId, authToken);
    if (deleted) {
      const img = await fetchgallery();
      setImages(img);
      toast.success("Image deleted successfully!");
    } else {
      // Handle failure
      toast.error("Failed to delete image!");
    }
  };
  return (
    <>
      <div className="mb-10 flex flex-col">
        <h1 className="break-words text-center font-Gamiliademo text-2xl font-bold uppercase">
          Your Photo Gallery
        </h1>
        <div className="mt-10 block w-full columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
          {" "}
          {image.map((image, index) => (
            <div
              className="group relative m-2 my-4  cursor-pointer overflow-hidden bg-stone-100 max-md:m-1 max-md:my-2 "
              key={index}
            >
              <div className="w-full ">
                <img
                  className="max-h-[400px] w-full object-cover object-center"
                  src={image.imageURL}
                  alt=""
                />
              </div>
              <div className="p-2 px-5">
                <h1 className="font-Oswald text-xl">{image.imageLocation}</h1>
                <p className="font-CooperHevitt text-base">
                  {image.imgDescription}
                </p>
                <div className="flex w-full justify-evenly gap-5 py-2">
                  <button
                    className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white "
                    onClick={() => handleDelete(image._id)} // Assuming image._id is the unique identifier of the image
                  >
                    Delete
                  </button>
                  <button className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white ">
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
