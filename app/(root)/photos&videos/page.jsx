import React from "react";
import { fetchgallery } from "@/lib/actions/gallery.actions";
import GalleryHero from "@/app/_section/Photography/Hero/GalleryHero";
import MainContent from "@/app/_section/Photography/Gallery/MainContent";
import YoutubeVideos from "@/app/_section/Photography/Videos/YoutubeVideos";
import { fetchvideos } from "@/lib/actions/youtube.actions";
export default async function page() {
  const photos = await fetchgallery(1);
  const videos = await fetchvideos(1);
  console.log(videos);
  return (
    <div className="">
      <div>
        <GalleryHero />
      </div>
      <div className="pt-10">
        <MainContent photos={photos} />
      </div>
      <div className="pt-10">
        <YoutubeVideos video={videos} />
      </div>
    </div>
  );
}
