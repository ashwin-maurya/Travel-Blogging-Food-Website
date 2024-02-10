"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { addimage } from "@/lib/adminactions/admin.gallery.actions";
const ImageForm = () => {
  const [formData, setFormData] = useState({
    imageURL: "",
    imageLocation: "",
    imgDescription: "",
  });

  const [previewURL, setPreviewURL] = useState(""); // State for the preview

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "imageURL" && files && files.length > 0) {
      const uploadedImageUrl = await handleImageUpload(files[0]);
      console.log("Uploaded Image URL:", uploadedImageUrl);
      setPreviewURL(uploadedImageUrl);

      setFormData({
        ...formData,
        [name]: uploadedImageUrl,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      if (name === "imageURL") {
        setPreviewURL(value);
      }
    }

    // Update the previewURL state as the user types
  };

  const handleImageUpload = async (selectedImage) => {
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
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const authToken = JSON.parse(localStorage.getItem("authtoken"));

    // Call the addImage function from the context to submit the data

    const res = addimage(formData, authToken);
    if (res) {
      toast.success("Image added!");
    } else {
      toast.error("Internal Server Error!");
    }
    // Optional: You can clear the form after submission
    // setFormData({
    //   imageURL: "",
    //   imageLocation: "",
    //   imgDescription: "",
    // });

    // Clear the previewURL after submission
    setPreviewURL("");
  };

  return (
    <div className="mx-auto my-5 max-w-96">
      <h2 className="mb-5 text-center font-Gamiliademo text-2xl uppercase">
        Add Image
      </h2>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-1">
        <label className="font-CooperHevitt text-xl text-black">
          Image URL or Upload:
          <div className="mb-2 flex gap-2">
            <input
              className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
              type="text"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full flex-row">
            <label
              htmlFor="dropzone-file"
              className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
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
                id="dropzone-file"
                type="file"
                className="hidden"
                name="imageURL"
                onChange={handleChange}
              />
            </label>
            <div className="ml-2 w-full">
              {previewURL && (
                <img
                  className="max-h-[160px] w-full rounded-md object-cover"
                  src={previewURL}
                  alt=""
                />
              )}
            </div>
          </div>
        </label>
        <br />

        <label className="font-CooperHevitt text-xl text-black">
          Image Location:
          <input
            className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
            type="text"
            name="imageLocation"
            value={formData.imageLocation}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="font-CooperHevitt text-xl text-black">
          Image Description/Alt:
          <input
            className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
            type="text"
            name="imgDescription"
            value={formData.imgDescription}
            onChange={handleChange}
          />
        </label>
        <br />

        <button
          type="submit"
          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageForm;
