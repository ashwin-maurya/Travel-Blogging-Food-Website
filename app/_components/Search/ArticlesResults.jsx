"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ArticlesResults({ articles }) {
  const router = useRouter();

  return (
    <>
      <ul className="w-full text-gray-700">
        {articles.map((article) => (
          <li
            key={article._id}
            onClick={() =>
              router.push(
                `/articles/${article?._id}/${article.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
            className="flex w-full cursor-pointer justify-between rounded-sm px-2 py-1 hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <span className="font-HankenGrotesk text-lg font-semibold">
                {article.title}
              </span>
            </div>
            <img
              src={article.imageURL}
              alt={article.title}
              className="h-8 rounded-sm object-cover object-center"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
