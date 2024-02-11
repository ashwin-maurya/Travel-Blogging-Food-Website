"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FormatDate } from "@/app/_components/helper/FormatDate";
import { fetcharticles } from "@/lib/actions/articles.actions";
import InfiniteScroll from "react-infinite-scroll-component";
import NoMoreArticles from "./NoMoreArticles";
import Loading from "./loading";
export default function Articles({ article }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setArticles(article);
  }, [article]);
  useEffect(() => {
    console.log("articles", articles);
  }, [articles]);
  const fetchArticlesByPage = async () => {
    const fetchedArticles = await fetcharticles(page);

    if (fetchedArticles.length === 0) {
      setHasMore(false);
    } else {
      setArticles((prevArticles) => [...prevArticles, ...fetchedArticles]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className=" mt-24">
        <div className="mx-auto max-w-screen-xl mt-10">
          <InfiniteScroll
            loader={<Loading />}
            dataLength={articles.length} //This is important field to render the next data
            next={fetchArticlesByPage}
            hasMore={hasMore}
            endMessage={<NoMoreArticles />}
          >
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/articles/${article?._id}/${article.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`md group mx-14 flex cursor-pointer flex-wrap items-center max-md:mx-5 max-md:mb-5 max-md:flex-col-reverse ${
                  index % 2 !== 0 ? "flex-row-reverse " : ""
                }`}
              >
                <div className="w-1/2 bg-white p-10 font-sans max-md:w-full max-md:px-0 max-md:py-5">
                  <div className="max-md:mx-4">
                    <h1 className="text-5xl font-Gamiliademo mb-5 text-black font-bold">
                      {article?.title}
                    </h1>
                    <div className="flex gap-5 my-2 items-center">
                      <span className="inline-flex items-center justify-center bg-black px-4 py-1 font-HankenGrotesk text-gray-200">
                        {article?.category}
                      </span>
                      <span>-</span>
                      <div className="description  text-2xl w-full font-HankenGrotesk text-gray-500 md:w-2/3">
                        {article.location}
                      </div>
                    </div>
                    <div className="mt-4 flex font-light text-gray-500">
                      <span className="my-1 font-HankenGrotesk font-semibold text-gray-400">
                        {FormatDate(article?.date)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] relative w-1/2 overflow-hidden bg-gray-800 max-md:h-[300px] max-md:w-full">
                  <img
                    loading="lazy"
                    src={article.imageURL}
                    className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105"
                    alt=""
                  />
                  <div
                    className={`absolute   top-0 bg-[#15d0ffc5]  px-5 py-3 transition-all duration-300 ease-in-out max-md:px-2 max-md:py-1 ${
                      index % 2 !== 0 ? "left-0 " : " right-0 "
                    }`}
                  >
                    <h1 className="block font-CooperHewitt text-base uppercase tracking-wide text-white max-md:text-xs">
                      {article.category}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
