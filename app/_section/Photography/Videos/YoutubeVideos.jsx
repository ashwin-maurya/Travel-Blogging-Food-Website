"use client";
import React from "react";
import YoutubeLazyLoad from "../../Home/YoutubeContent/YoutubeLazyLoad";

export default function YoutubeVideos({ videos }) {
  return (
    <>
      <h1 className="relative text-center right-10 mb-10 font-CooperHewitt text-5xl  font-thin max-md:right-0">
        Latest Videos
      </h1>
      <div className="mt-10 block w-full columns-3 break-inside-avoid gap-10 gap-y-10 px-10 max-md:px-2 max-lg:columns-2 max-md:columns-1 max-md:gap-y-5">
        {videos?.map((video) => (
          <div key={video.id} className="w-full py-4 max-md:py-1 aspect-video ">
            <YoutubeLazyLoad
              videoUrl={video?.youtubeId}
              altText={video?.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
