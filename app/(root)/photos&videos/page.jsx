import React from "react";
import { fetchgallery } from "@/lib/actions/gallery.actions";
import GalleryHero from "@/app/_section/Photography/Hero/GalleryHero";
import MainContent from "@/app/_section/Photography/Gallery/MainContent";
import YoutubeVideos from "@/app/_section/Photography/Videos/YoutubeVideos";
import { fetchvideos } from "@/lib/actions/youtube.actions";
export default async function page() {
  const photos = await fetchgallery();
  const videos = await fetchvideos();

  return (
    <div className="">
      <div>
        <GalleryHero />
      </div>
      <div className="pt-10">
        <MainContent photos={photos} />
      </div>
      <div className="pt-10">
        <YoutubeVideos videos={videos} />
      </div>
    </div>
  );
}
