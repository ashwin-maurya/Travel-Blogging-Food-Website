"use client";

import React, { useRef, useState, lazy, Suspense } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

import Link from "next/link";
const LazyStoryModal = lazy(() => import("../../Story/StoryModal"));
// import { stories } from "@/app/_components/constants/constants";

export default function StoryContent({ stories }) {
  const scrollContainerRef = useRef(null);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const router = useRouter(); // Initialize useHistory

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const openStoryPage = (index) => {
    router.push(`/story/${index}`);
  };

  return (
    <>
      {/* <Suspense fallback={null}>
        <LazyStoryModal
          selectedStoryIndex={selectedStoryIndex}
          setSelectedStoryIndex={setSelectedStoryIndex}
        />
      </Suspense> */}
      <div className="relative p-5 max-sm:px-0">
        <div className="mx-10 flex gap-5 overflow-hidden max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute bottom-0  left-0 top-0 z-50 my-5 ml-2 rounded-md border-none bg-white px-2 py-1 text-2xl text-black outline-none hover:bg-gray-100 focus:outline-none max-md:hidden"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex h-[400px] w-full flex-shrink-0 items-end justify-start gap-5 overflow-x-auto scroll-smooth bg-cover bg-center text-left transition-all duration-300 ease-in-out max-md:gap-2 2xl:h-[500px]"
            ref={scrollContainerRef}
          >
            <h1
              className="mx-10 h-full rotate-180 cursor-pointer text-center font-CooperHewitt text-4xl uppercase max-md:mx-2 max-md:ml-4 max-md:text-2xl"
              style={{ writingMode: "vertical-lr" }}
            >
              Spotlight
            </h1>
            {stories?.map((story, index) => (
              <Link
                href={`/story/${story._id}`}
                key={index}
                className="relative flex min-w-[250px] 2xl:min-w-[300px] h-[400px] w-full 2xl:max-w-[300px] max-w-[250px] cursor-pointer items-end justify-start bg-gray-500 bg-cover bg-center text-left max-md:h-[350px] max-md:min-w-[250px] 2xl:h-[500px]"
                style={{
                  backgroundImage: `url("${story.imageUrl}")`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
                <div className="absolute left-0 right-0 top-0 m-2 flex items-center justify-between">
                  <span className="tracki bg-sky-300 px-3 py-2 font-HankenGrotesk text-xs font-semibold uppercase text-gray-100">
                    {story.category}
                  </span>
                </div>
                <h2 className="z-10 p-5">
                  <span className="text-md font-montserrat font-medium text-gray-100 group-hover:underline">
                    {story.title}
                  </span>
                </h2>
              </Link>
            ))}
            <h1
              className="mx-10 h-full cursor-pointer text-center font-CooperHewitt text-4xl uppercase"
              style={{ writingMode: "vertical-lr" }}
            >
              View More
            </h1>
          </div>

          <button
            onClick={() => handleScroll(400)}
            className="absolute bottom-0 right-0 top-0 my-5 mr-2 rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-gray-100 focus:outline-none max-md:hidden"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
