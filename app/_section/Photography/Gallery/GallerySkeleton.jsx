import React from "react";

export default function GallerySkeleton() {
  const skeletonCount = 6;

  return (
    <>
      <div className="mt-10 block w-screen columns-3 break-inside-avoid gap-0 px-10 max-lg:columns-2 max-md:columns-2 max-md:px-0">
        {[...Array(skeletonCount)].map((_, index) => (
          <div
            className="m-2 min-h-[300px] w-auto animate-pulse rounded-sm bg-gray-200"
            key={index}
          ></div>
        ))}
      </div>
    </>
  );
}
