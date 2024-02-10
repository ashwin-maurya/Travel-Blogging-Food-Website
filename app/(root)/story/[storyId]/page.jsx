import React from "react";
import StoryModal from "@/app/_section/Story/StoryModal";
import { fetchAllStories } from "@/lib/actions/stories.actions";
export default async function page({ params: { storyId } }) {
  const stories = await fetchAllStories();
  return (
    <>
      <div className="py-96">
        <StoryModal storyId={storyId} stories={stories} />
      </div>
    </>
  );
}
