import React from "react";
import TravelDestinations from "@/app/_section/Travel/TravelDestination/TravelDestinations";
import { fetchdestinations } from "@/lib/actions/destination.actions";
import error from "./error";

export default async function Destiantions() {
  const destinations = await fetchdestinations();

  return (
    <div className="mt-20">
      <h1 className="text-center font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        FEATURED DESTINATIONS
      </h1>
      <div className="mx-auto max-w-screen-2xl">
        <TravelDestinations destinations={destinations} />
      </div>
    </div>
  );
}
