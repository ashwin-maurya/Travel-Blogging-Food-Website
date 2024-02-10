"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DestinationResults({ destinations }) {
  const router = useRouter();
  const getDefaultImage = () => {
    // Replace with the default image URL if imageURL is not found or empty
    return "https://1.img-dpreview.com/files/p/TS560x560~forums/62803172/ae5fffae14814b88b8eb7551ef16ea84";
  };

  return (
    <>
      <ul className="flex flex-col text-gray-700">
        {destinations.map((destination) => (
          <li
            key={destination._id}
            className="mb-4"
            onClick={() =>
              router.push(
                `/destinations/${destination.location
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
          >
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-full text-center mix-blend-normal">
              <img
                loading="lazy"
                className="group h-[40px] w-[40px] min-w-[40px] rounded-full bg-cover bg-no-repeat object-cover object-center transition-all duration-500 ease-in-out group-hover:opacity-90"
                src={destination.imageURL || getDefaultImage()}
                alt={destination.location}
              />
              <span className="w-full text-center font-CooperHewitt text-xs font-bold uppercase tracking-wider text-black transition-all duration-500 ease-out">
                {destination.location}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DestinationResults;
