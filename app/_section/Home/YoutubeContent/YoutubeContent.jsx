"use client";
import React from "react";
import YoutubeLazyLoad from "./YoutubeLazyLoad";

export default function YoutubeContent({ videos }) {
  // const videos = [
  //   { id: 1, videoUrl: "OCzzN8VZgfY", altText: "Shikha Gautam" },
  //   { id: 2, videoUrl: "iBSbD_7bvE8", altText: "Shikha Gautam" },
  //   { id: 3, videoUrl: "s3G2kLruJJo", altText: "Shikha Gautam" },
  //   { id: 4, videoUrl: "kARJS7aG0_Q", altText: "Shikha Gautam" },
  // ];

  return (
    <>
      <div className="scale-[.8] max-md:scale-[.9]  2xl:max-w-screen-xl 2xl:scale-100">
        <h1 className="relative right-10 mb-10 text-left font-CooperHewitt text-5xl  font-thin max-md:right-0">
          Latest Videos
        </h1>
        <div className="flex max-md:flex-col">
          <div className=" aspect-video  w-[75%] max-md:mb-4 max-md:w-full">
            <YoutubeLazyLoad
              videoUrl={videos[0]?.youtubeId}
              altText={videos[0]?.title}
            />
          </div>
          <div className="mx-5 flex flex-col justify-between gap-3 max-md:mx-0">
            {videos?.slice(1, 4).map((video, index) => (
              <div key={index} className=" aspect-video ">
                <YoutubeLazyLoad
                  videoUrl={video?.youtubeId}
                  altText={video?.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
