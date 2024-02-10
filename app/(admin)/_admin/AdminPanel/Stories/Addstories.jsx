"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { addstory } from "@/lib/adminactions/admin.stories.actions";
export default function addstories() {
  const [formData, setFormData] = useState({
    category: "",
    imageUrl: "",
    title: "",
    storycontent: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentChange = (e, index) => {
    const { name, value } = e.target;
    const updatedContent = [...formData.storycontent];

    // Handle the "type" property separately
    if (name === "type") {
      updatedContent[index][name] = value;
    } else {
      // Update the appropriate nested field based on the input name
      if (name.startsWith("header.")) {
        const [fieldName, subFieldName] = name.split(".");
        updatedContent[index].header[subFieldName] = value;
      } else {
        updatedContent[index][name] = value;
      }
    }

    setFormData({
      ...formData,
      storycontent: updatedContent,
    });
  };

  const addContentItem = () => {
    setFormData({
      ...formData,
      storycontent: [
        ...formData.storycontent,
        { type: "", url: "", duration: "", header: { title: "", desc: "" } },
      ],
    });
  };

  const removeContentItem = (index) => {
    const updatedContent = [...formData.storycontent];
    updatedContent.splice(index, 1);
    setFormData({
      ...formData,
      storycontent: updatedContent,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    const res = await addstory(formData, authToken);

    if (res) {
      toast.success("Blog added successfully!");
    } else {
      toast.error("Internal Server Error!");
    }
  };

  return (
    <div className="mx-auto mb-10 w-full max-w-screen-xl select-none px-4 ">
      <h1 className="mb-5 text-center">Add stories</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg ">
        <form onSubmit={handleSubmit}>
          <div className="mx-20">
            <label className="mb-3 font-sans text-xl text-black">
              Category:
              <input
                className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="mb-3 font-sans text-xl text-black">
              Thumbnail Image URL:
              <input
                className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="mb-3 font-sans text-xl text-black">
              Title:
              <input
                className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <br />
          </div>

          <div className="flex justify-around flex-wrap">
            {formData.storycontent.map((content, index) => (
              <div key={index} className=" max-w-1/4 w-1/4 mx-5">
                <div className="flex justify-between w-full">
                  <h2 className="mb-3 font-sans text-xl text-black mt-5">
                    Story: {index + 1}
                    <button
                      className="inline-block w-full my-2 rounded-sm bg-red-400 px-5 py-3 font-medium text-white sm:w-auto"
                      type="button"
                      onClick={() => removeContentItem(index)}
                    >
                      Remove Content
                    </button>
                  </h2>
                </div>
                <label className="mb-3 font-sans text-xl text-black">
                  Content Type:
                  <select
                    className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                    name="type"
                    value={content.type}
                    onChange={(e) => handleContentChange(e, index)}
                  >
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                  </select>
                </label>

                <label className="mb-3 font-sans text-xl text-black">
                  Content URL:
                  <input
                    className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                    type="text"
                    name="url"
                    value={content.url}
                    onChange={(e) => handleContentChange(e, index)}
                  />
                </label>
                <label className="mb-3 font-sans text-xl text-black">
                  Duration:
                  <input
                    className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                    type="number"
                    name="duration"
                    value={content.duration}
                    onChange={(e) => handleContentChange(e, index)}
                  />
                </label>
                <label className="mb-3 font-sans text-xl text-black">
                  Header Title:
                  <input
                    className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                    type="text"
                    name={`header.title`}
                    value={content.header.title}
                    onChange={(e) => handleContentChange(e, index)}
                  />
                </label>
                <label className="mb-3 font-sans text-xl text-black">
                  Header Description:
                  <input
                    className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                    type="text"
                    name={`header.desc`}
                    value={content.header.desc}
                    onChange={(e) => handleContentChange(e, index)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="w-full justify-center items-center">
            <button
              type="button"
              className="inline-block w-full rounded-sm my-10 bg-green-400 px-5 py-3 font-medium text-white sm:w-auto"
              onClick={addContentItem}
            >
              Add Content
            </button>
          </div>
          <br />
          <button
            className="inline-block w-full rounded-sm bg-black px-5 py-3 font-medium text-white sm:w-auto"
            type="submit"
          >
            Upload Story
          </button>
        </form>
      </div>
    </div>
  );
}
