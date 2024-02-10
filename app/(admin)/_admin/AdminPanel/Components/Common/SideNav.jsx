"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaYoutube,
  FaLifeRing,
} from "react-icons/fa";
import Link from "next/link";
import { GoFileMedia } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function Sidebar() {
  const sectionsData = [
    {
      name: "Gallery",
      icon: GoFileMedia,
      linksTitle: ["Add Image", "Update Image"],
      links: ["addimage", "updateimage"],
    },
    {
      name: "Articles",
      icon: TfiWrite,
      linksTitle: ["Add Articles", "Update Articles"],
      links: ["addarticle", "updatearticle"],
    },
    {
      name: "Lifestyle",
      icon: FaLifeRing,
      linksTitle: ["Add Lifestyle", "Update Lifesytle"],
      links: ["addlifestyle", "updatelifestyle"],
    },
    {
      name: "Stories",
      icon: FaLifeRing,
      linksTitle: ["Add Story", "Update Story"],
      links: ["addstories", "updatestories"],
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      linksTitle: ["Update"],
      links: ["updatevideos"],
    },
    {
      name: "Destinations",
      icon: CiLocationOn,
      linksTitle: ["View/Update"],
      links: ["viewupdate"],
    },
  ];

  const [sectionsExpanded, setSectionsExpanded] = useState(
    sectionsData.reduce((acc, section) => {
      acc[section.name.toLowerCase()] = false;
      return acc;
    }, {})
  );

  const toggleSection = (section) => {
    setSectionsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <aside className="fixed top-0 flex h-screen w-72 min-w-72 max-w-72 select-none flex-col border-r-2 border-black bg-stone-800">
        <div className="h-full w-full   p-6">
          <div className="flex items-center  justify-between overflow-y-scroll  font-sans font-bold  text-gray-100 ">
            <h2>Dashboard</h2>
            <FaBars className="text-2xl" />
          </div>
          <nav className="mt-5 h-full overflow-y-scroll scroll-smooth text-sm">
            <div>
              <Link
                className="my-1 flex cursor-pointer items-center justify-between rounded-lg p-3 font-sans text-base font-semibold uppercase text-gray-300 transition-all duration-200 ease-in-out hover:bg-gray-600 "
                href={`/admin`}
                rel="noopener noreferrer"
              >
                <span className="flex items-center justify-center">
                  <IoHomeOutline
                    className="mr-2 inline-block text-xl"
                    alt="home"
                  />
                  <span className="flex items-center rounded-md font-sans font-bold text-gray-300 ">
                    Home
                  </span>
                </span>
              </Link>
            </div>
            {sectionsData.map((section, index) => (
              <div key={index}>
                <h2
                  className="my-1 flex cursor-pointer items-center justify-between rounded-lg p-3 font-sans text-base font-semibold uppercase text-gray-300 transition-all duration-200 ease-in-out hover:bg-gray-600"
                  onClick={() => toggleSection(section.name.toLowerCase())}
                >
                  <span className="flex items-center justify-center">
                    <section.icon className="mr-2 inline-block text-xl" />
                    {section.name}
                  </span>
                  {sectionsExpanded[section.name.toLowerCase()] ? (
                    <FaChevronUp
                      className="ml-2 inline-block"
                      alt="chevron-up"
                    />
                  ) : (
                    <FaChevronDown
                      className="ml-2 inline-block"
                      alt="chevron-down"
                    />
                  )}
                </h2>
                <div
                  className={`mx-5 flex  flex-col overflow-hidden transition-all duration-200 ease-in-out ${
                    sectionsExpanded[section.name.toLowerCase()]
                      ? `h-20`
                      : `h-0`
                  }`}
                >
                  {section.linksTitle.map((linkTitle, linkIndex) => (
                    <Link
                      key={linkIndex}
                      className="flex items-center rounded-md p-2 font-sans text-sm font-bold text-gray-100 transition-all duration-200 ease-in-out  hover:bg-gray-500"
                      rel="noopener noreferrer"
                      href={`/admin/${section.name.toLowerCase()}/${
                        section.links[linkIndex]
                      }/`}
                    >
                      <FaPlus className="mr-2" alt="plus icon" />
                      {linkTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
