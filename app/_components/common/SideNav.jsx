import React, { useRef, useState } from "react";
import { navLinks } from "../constants";
import Link from "next/link";

export default function SideNav(props) {
  return (
    <>
      <div
        id="mySidenav"
        className="sidenav bg-Opacitywhite fixed z-[99] h-[100vh] w-screen select-none overflow-hidden  bg-[#ffffff48] backdrop-blur-md transition-all delay-75 duration-200 ease-in-out"
      >
        <div className="dark:bg-darkBgMain flex h-full  w-full select-none flex-col items-center justify-start overflow-hidden shadow-lg">
          <div className="mt-24 flex w-auto">
            <span className="flex flex-1 flex-col items-center gap-8">
              {navLinks.map((item) => (
                <span
                  key={item.label}
                  className={`relative cursor-pointer px-2 font-CooperHewitt text-lg font-normal uppercase`}
                >
                  <Link href={item.href} className="text-black">
                    {item.label}
                  </Link>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
