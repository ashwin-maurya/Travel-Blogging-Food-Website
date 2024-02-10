"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addVideo } from "@/lib/adminactions/admin.youtube.actions";
import { fetchvideos } from "@/lib/actions/youtube.actions";
import { deleteVideo } from "@/lib/adminactions/admin.youtube.actions";
const Youtube = ({ videos }) => {
  const [video, setVideo] = useState([]);
  const [formData, setFormData] = useState({ youtubeId: "", title: "" });

  useEffect(() => {
    setVideo(videos);
  }, [videos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    const res = await addVideo(formData, authToken);
    if (res) {
      const videos = await fetchvideos();
      setVideo(videos);
      toast.success("Youtube Video uploaded!");
    } else {
      toast.error("Internal Server Error!");
    }
  };
  const handleDelete = async (id) => {
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    const res = await deleteVideo(id, authToken);
    if (res) {
      const videos = await fetchvideos();
      setVideo(videos);
      toast.success("Youtube Video deleted!");
    } else {
      toast.error("Internal Server Error!");
    }
  };

  return (
    <>
      <div className="my-0 flex flex-col">
        <h1 className="break-words text-center font-Gamiliademo text-2xl font-bold uppercase">
          Your Youtube Videos
        </h1>
        <div className="mx-auto my-5">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center justify-center flex-row gap-5"
          >
            <label className="font-CooperHevitt text-xl text-black">
              Add Youtube Video ID:
              <div className="mb-2 flex gap-2">
                <input
                  className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                  type="text"
                  name="youtubeId"
                  value={formData.youtubeId}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className="font-CooperHevitt text-xl text-black">
              Add a title:
              <input
                className="w-full rounded-sm border-none bg-stone-100 p-3 text-sm"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <br />
            <div>
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 max-h-10 py-3 font-medium text-white sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>{" "}
        </div>
        <div className="mt-10 flex w-full flex-wrap gap-5 items-center justify-center">
          {video?.map((videoItem, index) => (
            <div className="max-md:mb-4 max-md:w-full w-1/4" key={index}>
              <div
                className=" group relative cursor-pointer overflow-hidden bg-stone-100 max-md:m-1 max-md:my-2 "
                key={index}
              >
                <div className=" aspect-video   rounded-md overflow-hidden">
                  <img
                    loading="lazy"
                    className="absolute w-full top-0 bottom-0 m-auto rounded-md "
                    src={`https://img.youtube.com/vi/${videoItem?.youtubeId}/hqdefault.jpg`}
                    alt={videoItem?.title}
                  />
                </div>
              </div>
              <div>
                <div className="flex w-full justify-evenly gap-5 py-2">
                  <button
                    className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white "
                    onClick={() => handleDelete(videoItem?._id)} // Assuming image._id is the unique identifier of the image
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
};

export default Youtube;
