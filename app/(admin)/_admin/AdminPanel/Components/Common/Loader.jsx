"use client";
import React from "react";

export default function Loader() {
  return (
    <>
      <div
        id="myModal"
        className={`bg-Opacityblack fixed inset-0 z-[99999999999] flex  select-none items-center justify-center bg-[#ffffffcb] backdrop-blur-sm transition-all duration-300 ease-in-out`}
      >
        <div>
          <h1 className="font-sans">Authenticating...</h1>
        </div>
      </div>
    </>
  );
}
