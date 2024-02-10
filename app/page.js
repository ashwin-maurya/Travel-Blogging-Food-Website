import Image from "next/image";

import HeroAbout from "./_section/Home/Hero/HeroAbout";
import BrandLogo from "./_section/Home/Brands/BrandLogo";
import HomeAbout from "./_section/Home/About/HomeAbout";
import YoutubeContent from "./_section/Home/YoutubeContent/YoutubeContent";
import NewsletterHero from "./_section/Home/Newsletter/NewsletterHero";
import StoryContent from "./_section/Home/Stories/StoryContent";
import { fetchvideos } from "@/lib/actions/youtube.actions";
import { fetchAllStories } from "@/lib/actions/stories.actions";

export default async function Home() {
  const videos = await fetchvideos();
  const stories = await fetchAllStories();
  console.log(videos);
  return (
    <>
      <main>
        <HeroAbout />
        <div className="mx-auto max-w-screen-xl pt-0 max-md:pt-5">
          <BrandLogo />
        </div>
        <div className="mx-auto max-w-screen-xl my-10 max-md:pt-5">
          <HomeAbout />
        </div>
        <div className="mx-auto max-w-screen-xl my-32 max-md:pt-5">
          <StoryContent stories={stories} />
        </div>
        <div className="mx-auto max-w-screen-xl pt-10 max-md:pt-5">
          <YoutubeContent videos={videos} />
        </div>
        <div className="mx-auto pt-28 max-md:pt-10">
          <NewsletterHero />
        </div>
      </main>
    </>
  );
}
