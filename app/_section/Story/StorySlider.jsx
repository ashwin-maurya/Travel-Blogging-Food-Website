import React, { useEffect, useState } from "react";
import Stories from "stories-react";
import "stories-react/dist/index.css";
import { useRouter } from "next/navigation";

function Head(props) {
  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: "150px",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: "14px",
          marginLeft: "5px",
        }}
      >
        <p
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "20px",
            fontFamily: "sans",
            margin: 0,
            marginLeft: "5px",
          }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}

const StorySlider = ({ storyId, stories }) => {
  const router = useRouter();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [prevStoryTitle, setPrevStoryTitle] = useState("");
  const [nextStoryTitle, setNextStoryTitle] = useState("");

  useEffect(() => {
    // Find the index of the story with the given storyId
    const index = stories.findIndex((story) => story._id === storyId);
    setCurrentStoryIndex(index !== -1 ? index : 0);

    // Set titles of previous and next stories
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    if (prevIndex >= 0) {
      setPrevStoryTitle(stories[prevIndex].title);
    }
    if (nextIndex < stories.length) {
      setNextStoryTitle(stories[nextIndex].title);
    }
  }, [storyId, stories]);

  const nextStory = () => {
    const nextIndex = currentStoryIndex + 1;
    if (nextIndex < stories.length) {
      router.push(`/story/${stories[nextIndex]._id}`);
    } else {
      // Handle case when there is no next story
      router.push(`/story`);
    }
  };

  const prevStory = () => {
    const prevIndex = currentStoryIndex - 1;
    if (prevIndex >= 0) {
      router.push(`/story/${stories[prevIndex]._id}`);
    } else {
      // Handle case when there is no previous story
    }
  };

  return (
    <>
      <button
        onClick={prevStory}
        className="fixed left-0 top-1/2 z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
      >
        {prevStoryTitle ? `Previous: ${prevStoryTitle}` : "Previous"}
      </button>

      <Stories
        stories={stories[currentStoryIndex]?.storycontent.map((story) => ({
          type: story.type,
          url: story.url,
          defaultDuration: 10000,
          header: <Head name={story.header.title} time="5" />,
        }))}
        width="56.25vh"
        height="100vh"
        onAllStoriesEnd={nextStory}
        className="fixed right-0 top-1/2"
        pauseStoryWhenInActiveWindow={true}
        // loop={true}
      />

      <button
        onClick={nextStory}
        className="fixed right-0 top-1/2 z-[9999999999999] -translate-y-1/2 transform bg-gray-100 p-5 text-black"
      >
        {nextStoryTitle ? `Next: ${nextStoryTitle}` : "Next"}
      </button>
    </>
  );
};

export default StorySlider;
