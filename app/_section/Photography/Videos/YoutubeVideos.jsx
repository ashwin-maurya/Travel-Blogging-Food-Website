"use client";
import React, { useState, useEffect } from "react";
import YoutubeLazyLoad from "../../Home/YoutubeContent/YoutubeLazyLoad";
import { fetchvideos } from "@/lib/actions/youtube.actions";

export default function YoutubeVideos({ video }) {
  const [videos, setVideos] = useState(video);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreVideos = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const additionalVideos = await fetchvideos(nextPage);
    if (additionalVideos.length === 0) {
      setHasMore(false);
    }
    if (additionalVideos) {
      setVideos((prevVideos) => [...prevVideos, ...additionalVideos]);
      setPage(nextPage);
    }
    setLoading(false);
  };

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

      {hasMore && (
        <div className="flex justify-center items-center w-full my-20">
          {loading ? (
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-2 h-10 w-10"></div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={loadMoreVideos}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </>
  );
}
