import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center w-full my-20">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-2 h-10 w-10"></div>
      </div>
    </>
  );
}
