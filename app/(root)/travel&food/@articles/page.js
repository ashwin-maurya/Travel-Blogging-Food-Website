import React from "react";
import { fetcharticles } from "@/lib/actions/articles.actions";
import Articles from "./Articles";

export default async function ArticlesR() {
  const article = await fetcharticles(1);

  return (
    <div className=" mt-24">
      <h1 className="text-center after:bg-red-400 after:w-full after:h-20 font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        Reads
      </h1>
      <div className="mx-auto max-w-screen-xl mt-10">
        <Articles article={article} />
      </div>
    </div>
  );
}
