import React from "react";
import { FormatDate } from "@/app/_components/helper/FormatDate";

export default function LifestyleHero({ date, title, category, imageURL }) {
  return (
    <>
      <section className="text-center">
        <div className="bg-white px-10 py-10">
          <h3 className="text-center font-CooperHewitt text-base font-thin uppercase tracking-[10px] opacity-90">
            Article By Shihka Gautam
          </h3>

          <br />
          <h2 className="text-center font-Gamiliademo text-4xl font-semibold capitalize leading-tight text-gray-800 max-md:text-2xl">
            {title}
          </h2>
          <h3 className="mt-5 text-center font-CooperHewitt text-sm font-bold uppercase tracking-[5px] opacity-90">
            {FormatDate(date)}
          </h3>
        </div>
      </section>
      <section
        className={`relative flex w-full items-center justify-center overflow-hidden bg-cover bg-fixed bg-top bg-no-repeat py-56`}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <h2 className={`font-CooperHewitt text-6xl uppercase text-white`}>
          {category}
        </h2>
      </section>
    </>
  );
}
