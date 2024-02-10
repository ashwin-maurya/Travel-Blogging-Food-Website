"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function ArticlesContentDestination({ articles }) {
  const router = useRouter();

  return (
    <>
      {articles.map((article, index) => (
        <div
          key={index}
          onClick={() =>
            router.push(
              `/articles/${article?._id}/${article.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`
            )
          }
          className={`md group mx-14 flex cursor-pointer flex-wrap items-center max-md:mx-5 max-md:mb-5 max-md:flex-col-reverse ${
            index % 2 !== 0 ? "flex-row-reverse " : ""
          }`}
        >
          <div className="w-1/2 bg-white p-10 font-sans max-md:w-full max-md:px-0 max-md:py-5">
            <div className="max-md:mx-4">
              <h1 className="text-6xl font-bold">{article.location}</h1>

              <div className="mt-8 flex font-light text-gray-500">
                <div className="pr-4">
                  <span className="font-CooperHewitt uppercase">Country</span>
                  <p className="pt-2 font-Gamiliademo text-2xl font-semibold text-gray-900">
                    India
                  </p>
                </div>
                <div className="pr-4">
                  <span className="font-CooperHewitt  uppercase">Region</span>
                  <p className="pt-2 font-Gamiliademo text-2xl font-semibold text-gray-900">
                    Ladakh
                  </p>
                </div>
              </div>

              <div className="description mt-4 w-full font-HankenGrotesk text-lg text-gray-500 md:w-2/3">
                {article.title}
              </div>
            </div>
          </div>
          <div className="h-[400px] w-1/2 overflow-hidden bg-gray-800 max-md:h-[300px] max-md:w-full">
            <img
              loading="lazy"
              src={article.imageURL}
              className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
}
