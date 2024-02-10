"use client";
import React, { useState } from "react";
import TextEditor from "../../Editor/TextEditor";
import { addlifestyle } from "@/lib/adminactions/admin.lifestyle.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainEditorLifestyle() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageURL: "",
    content: "",
  });

  const { title, category, imageURL, content } = formData;

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "imageURL" && files.length > 0) {
      const uploadedImageUrl = await handleImageUpload(files[0]);
      setFormData({
        ...formData,
        [name]: uploadedImageUrl,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageUpload = async (selectedImage) => {
    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", "demo_kahaani_studio");
      formData.append("cloud_name", "dhktoeo0l");

      const cloudinaryUrl =
        "https://api.cloudinary.com/v1_1/dhktoeo0l/image/upload";

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const authToken = JSON.parse(localStorage.getItem("authtoken"));
      const res = await addlifestyle(formData, authToken);

      if (res) {
        toast.success("Article added successfully!");
      } else {
        toast.error("Internal Server Error!");
      }
    } catch (error) {
      toast.error("Error adding Article!");
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto mb-10 w-full max-w-screen-xl select-none px-4 ">
        <h1 className="mb-5 text-center">Lifestyle Editor</h1>
        <div className="rounded-lg bg-white p-8 shadow-lg ">
          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex w-full flex-row gap-5">
                  <div className="w-2/3">
                    <label
                      className="mb-3 font-CooperHevitt text-xl text-black"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                      type="text"
                      id="title"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="w-1/3">
                    <label
                      className="mb-3 font-CooperHevitt text-xl text-black"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                      type="text"
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-3 font-CooperHevitt text-xl text-black"
                    htmlFor="category"
                  >
                    Blog Thumbnail Image
                  </label>
                  <div className="flex flex-row">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-40 w-full max-w-72 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
                    >
                      <div className="pb- justify-center6 flex flex-col items-center pt-5">
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
                        <p className="mb-2 text-sm text-gray-500 ">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 ">
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
                    <div className="ml-10 w-72">
                      {imageURL && (
                        <img
                          className="max-h-[160px] w-full rounded-lg object-cover"
                          src={imageURL}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <TextEditor
                  content={content}
                  onContentChange={(value) =>
                    setFormData({ ...formData, content: value })
                  }
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Add Lifestyle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
