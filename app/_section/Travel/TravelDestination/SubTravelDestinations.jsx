"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function SubTravelDestinations({ destinations }) {
  const router = useRouter();
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };
  const getDefaultImage = () => {
    // Replace with the default image URL if imageURL is not found or empty
    return "https://1.img-dpreview.com/files/p/TS560x560~forums/62803172/ae5fffae14814b88b8eb7551ef16ea84";
  };

  return (
    <>
      <div className="relative mx-10 mt-5 max-w-screen-xl pb-10 max-md:mt-5 max-sm:px-0">
        <div className="mx-10 flex items-center justify-center gap-5 overflow-hidden overflow-x-scroll max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute left-0 z-50 h-full rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-stone-100 focus:outline-none max-md:hidden"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex max-h-[200px] w-full  items-start justify-start gap-5 overflow-x-scroll scroll-smooth bg-cover bg-center text-left  transition-all duration-300 ease-in-out max-md:max-h-[150px] max-md:gap-2 "
            ref={scrollContainerRef}
          >
            <h1
              className="mx-10 h-full rotate-180 cursor-pointer text-center font-CooperHewitt text-3xl uppercase max-md:mx-2 max-md:ml-4 max-md:text-2xl"
              style={{ writingMode: "vertical-lr" }}
            >
              More
            </h1>
            {destinations?.map((destination) => (
              <div
                className="relative flex cursor-pointer flex-col items-start  justify-start bg-cover bg-center text-left"
                key={destination.id}
                onClick={() =>
                  router.push(
                    `/destinations/${destination.location
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  )
                }
              >
                <div className="flex flex-col items-center justify-center rounded-full text-center mix-blend-normal ">
                  <img
                    loading="lazy"
                    className="group h-[150px] w-[150px] min-w-[150px] scale-95 rounded-full bg-cover bg-no-repeat object-cover  object-center transition-all duration-500 ease-in-out group-hover:opacity-90 max-md:h-[100px] max-md:w-[100px] max-md:min-w-[100px]"
                    src={destination.imageURL || getDefaultImage()}
                  />
                  <span className="w-full text-center font-CooperHewitt text-lg font-bold uppercase tracking-wider text-black transition-all duration-500 ease-out max-md:text-xs">
                    {destination.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll(400)}
            className="absolute right-0 z-50 h-full rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-stone-100 focus:outline-none max-md:hidden"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
