"use client";
import React, { useRef } from "react";
import SubTravelDestinations from "./SubTravelDestinations";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TravelDestinations({ destinations }) {
  const router = useRouter();
  console.log("destinations", destinations);
  // Display only the top 6 destinations
  const topDestinations = destinations.slice(0, 6);

  // If there are more destinations, pass them to SubTravelDestinations
  const remainingDestinations = destinations.slice(6);

  const getDefaultImage = () => {
    // Replace with the default image URL if imageURL is not found or empty
    return "https://1.img-dpreview.com/files/p/TS560x560~forums/62803172/ae5fffae14814b88b8eb7551ef16ea84";
  };
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <>
      <div className="relative mx-10 mt-5 pb-10 max-md:mt-5 max-sm:px-0 max-md:mx-0">
        <div className="mx-10 flex items-center justify-center gap-5 overflow-hidden overflow-x-scroll max-md:mx-0">
          <button
            onClick={() => handleScroll(-400)}
            className="absolute left-0 z-50 h-full rounded-md bg-white px-2 py-1 text-2xl text-black hover:bg-stone-100 focus:outline-none max-md:hidden"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex max-h-[250px] w-full  items-start justify-start gap-5 overflow-x-scroll scroll-smooth bg-cover bg-center text-left  transition-all duration-300 ease-in-out max-md:gap-2 "
            ref={scrollContainerRef}
          >
            {topDestinations.map((destination, index) => (
              <div
                key={index}
                className="relative group cursor-pointer h-[250px] w-[300px] min-w-[300px]  overflow-hidden"
                onClick={() =>
                  router.push(
                    `/destinations/${destination.location
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`
                  )
                }
              >
                <div className="flex h-full w-full items-center justify-center text-center mix-blend-normal ">
                  <img
                    loading="lazy"
                    className="h-full  w-full scale-95 object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-80"
                    src={destination.imageURL || getDefaultImage()}
                  />
                  <div className="absolute m-0 flex h-auto w-full flex-wrap items-center justify-center p-5 text-white">
                    <span className="bg-[#00000082] px-10 max-sm:px-6 py-5 max-sm:py-3 font-CooperHewitt text-xl font-bold uppercase tracking-wider transition-all duration-500 ease-out  max-sm:text-sm">
                      {destination.location}
                    </span>
                  </div>
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
