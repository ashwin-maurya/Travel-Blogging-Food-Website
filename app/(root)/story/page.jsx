import React from "react";
import StoriesPage from "@/app/_section/Story/StoryPage/StoriesPage";
import { fetchAllStories } from "@/lib/actions/stories.actions";
import StoryContent from "@/app/_section/Home/Stories/StoryContent";
export default async function page() {
  const stories = await fetchAllStories();
  return (
    <div>
      <h1 className="text-center font-CooperHewitt text-4xl mt-28 font-thin uppercase">
        Explore More Stories
      </h1>
      <div className="mx-auto max-w-screen-xl my-10 max-md:pt-5">
        <h1 className="text-left font-CooperHewitt text-4xl mt-20 font-thin uppercase">
          Exciting Food Journey in India
        </h1>
        <StoryContent stories={stories} />
      </div>
      <div className="mx-auto max-w-screen-xl my-10 max-md:pt-5">
        <h1 className="text-left font-CooperHewitt text-4xl mt-20 font-thin uppercase">
          Look at some amazing tourist destinations
        </h1>
        <StoryContent stories={stories} />
      </div>
    </div>
  );
}
