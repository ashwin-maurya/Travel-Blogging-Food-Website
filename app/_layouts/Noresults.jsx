"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineArticle, MdModeOfTravel, MdPlace } from "react-icons/md";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
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
export default function Noresults() {
  const router = useRouter();

  return (
    <div class="h-screen justify-center">
      <center class="pt-24 m-auto ">
        <div class=" tracking-widest mt-4">
          <span class="text-gray-500 text-6xl block font-HankenGrotesk">
            <span>No results found!!</span>
          </span>
          <span class="text-gray-500 text-xl font-CooperHewitt">
            Sorry, Nothing to see here.
          </span>
        </div>
      </center>
      <center class="mt-6">
        <span
          onClick={() => router.back()}
          class="font-HankenGrotesk cursor-pointer text-xl bg-blue-500 p-5 py-2 rounded-md text-white hover:shadow-md"
        >
          Go back{" "}
        </span>
      </center>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 mt-40">
        {sections.map((section, index) => (
          <Link
            href={section.href}
            className="inline-flex cursor-pointer items-center text-base font-HankenGrotesk p-6 bg-blue-50 rounded-md text-blue-500  hover:underline"
          >
            <div key={index} className=" rounded-lg ">
              <span className="text-2xl text-blue-500">{section.icon}</span>

              <h3 className="mt-2 text-xl font-CooperHewitt font-medium text-gray-700">
                {section.title}
              </h3>

              <p className="mt-2 text-gray-500 font-HankenGrotesk text-base">
                {section.description}
              </p>
              <p className="gap-x-2 inline-flex items-center">
                <span>{section.linkText}</span>

                <HiArrowLongRight />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
