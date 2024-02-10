"use client";
import React from "react";
import { MdOutlineArticle, MdModeOfTravel, MdPlace } from "react-icons/md";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sections = [
  {
    icon: <MdOutlineArticle />,
    href: "/articles",
    title: "Read Articles",
    description: "Dive in to read some awesome articles.",
    linkText: "Let's Go",
  },
  {
    icon: <MdModeOfTravel />,
    href: "/photos&videos",
    title: "Explore Photos & Videos",
    description: "Read the latest posts on our blog.",
    linkText: "Explore",
  },
  {
    icon: <MdPlace />,
    title: "Search Destinations",
    href: "/destinations",

    description: "Explore your new travel destinations.",
    linkText: "View",
  },
];

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <section className="bg-white">
        <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div className="w-full">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <p className="text-8xl font-HankenGrotesk font-medium text-blue-500">
                404
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-gray-800 font-HankenGrotesk">
                No Lifesyle Article Found
              </h1>
              <p className="mt-4 text-gray-500 text-xl font-CooperHewitt">
                The page you're looking for doesn't exist. Please check the URL
                or go back to the homepage.
              </p>

              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-base text-gray-700 transition-colors duration-200 bg-white border rounded-lg  gap-x-2 sm:w-auto   hover:bg-gray-100 "
                  onClick={() => router.back()}
                >
                  <HiArrowLongLeft />

                  <span>Go back</span>
                </button>
                <Link href="/">
                  <button className="w-1/2 px-5 py-2 text-base tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                    Take me home
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, index) => (
                <div key={index} className="p-6 rounded-lg bg-blue-50">
                  <span className="text-2xl text-blue-500">{section.icon}</span>

                  <h3 className="mt-2 text-xl font-CooperHewitt font-medium text-gray-700">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-gray-500 font-HankenGrotesk text-base">
                    {section.description}
                  </p>

                  <Link
                    href={section.href}
                    className="inline-flex items-center mt-4 text-base font-HankenGrotesk text-blue-500 gap-x-2  hover:underline"
                  >
                    <span>{section.linkText}</span>

                    <HiArrowLongRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
