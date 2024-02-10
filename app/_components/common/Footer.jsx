"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <footer
        className={`${
          pathname.includes("/admin") ? "hidden" : ""
        }  mt-5 border-t-[1px] bg-white invert`}
      >
        <div className=" w-full px-20  py-10 max-lg:px-5 max-lg:py-2">
          <div className="mb-10 flex max-lg:flex-col">
            <div className="flex w-[60%] gap-20 max-lg:my-5 max-lg:mb-10 max-lg:w-full">
              <ul className="font-medium capitalize text-gray-800">
                <h4 className="mb-4 font-sans">Popular Reads</h4>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Best Ladakh stories you must read
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Tokyo Travel Guide for Adventure
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link href="/" className="text-black hover:underline">
                    Icelands most famous waterfalls
                  </Link>
                </li>
              </ul>
              <ul className="font-medium capitalize text-gray-800">
                <h4 className="mb-4 font-sans">Categories</h4>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Hotels & Stays
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Folk Tales
                  </Link>
                </li>
              </ul>
            </div>

            <div className="font-montserrat grid w-[40%] grid-cols-2 gap-8 max-lg:w-full sm:grid-cols-3  sm:gap-6 2xl:text-lg">
              <ul className="font-medium capitalize text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Hotels & Stays
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Folk Tales
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link href="/" className="text-black hover:underline">
                    Legends & Mythology
                  </Link>
                </li>
              </ul>
              <ul className="font-medium  text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline ">
                    Wonderful Places
                  </Link>
                </li>
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    All About Food
                  </Link>
                </li>
              </ul>

              <ul className="font-medium  text-gray-600">
                <li className="mb-4 list-none font-sans text-black">
                  <Link href="/" className="text-black hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-none font-sans text-black ">
                  <Link href="/" className="text-black hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-gray-200 " />
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-sm text-gray-900 sm:text-center  2xl:text-xl">
              <Link
                href="/"
                className="mr-1 font-Authorfont text-base text-black hover:underline 2xl:text-2xl"
              >
                Kahaani Studio
              </Link>
              © 2024{" "}
            </span>
            <div className="flex space-x-5 text-xl sm:mt-0 sm:justify-center 2xl:text-2xl"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
