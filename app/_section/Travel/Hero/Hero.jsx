import React from "react";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen max-h-[800px] overflow-hidden bg-black  text-white">
        <div
          className="h-full w-full place-items-center bg-cover bg-top bg-no-repeat opacity-100 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url("/images/hero/travel-&-food.png")`,
          }}
        ></div>
      </div>
    </>
  );
}
