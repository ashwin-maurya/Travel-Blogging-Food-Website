import React from "react";
import Hero from "@/app/_section/Destinations/Hero";
import ArticlesContentDestination from "@/app/_section/Destinations/ArticlesContentDestination";
import SubTravelDestinations from "@/app/_section/Travel/TravelDestination/SubTravelDestinations";
import { fetchdestinations } from "@/lib/actions/destination.actions";
import { fetcharticlesbylocation } from "@/lib/actions/articles.actions";

export default async function page({ params: { location } }) {
  const destinations = await fetchdestinations();
  const articles = await fetcharticlesbylocation(location);

  const topDestinations = destinations.filter(
    (destination) =>
      destination.location.toLowerCase() !== location.toLowerCase()
  );

  return (
    <div>
      <div className=" w-fulL mx-auto mt-20 px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <div>
          <Hero location={location} />
        </div>
        {articles.length > 0 && (
          <div className="flex flex-col ">
            <ArticlesContentDestination articles={articles} />
          </div>
        )}

        {topDestinations.length > 0 && (
          <div className="my-20">
            <h1>
              <span className="font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
                Explore More Destinations
              </span>
            </h1>
            <SubTravelDestinations destinations={topDestinations} />
          </div>
        )}
      </div>
    </div>
  );
}
