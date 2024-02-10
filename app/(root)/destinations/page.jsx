import React from "react";
import TravelDestinations from "@/app/_section/Travel/TravelDestination/TravelDestinations";
import { fetchdestinations } from "@/lib/actions/destination.actions";
import { notFound } from "next/navigation";

export default async function page() {
  const destinations = await fetchdestinations();
  if (destinations === null) {
    return notFound();
  }
  return (
    <main className="mt-[4.5rem]">
      <div className="mx-auto max-w-screen-xl mt-20 max-md:mt-10 ">
        <TravelDestinations destinations={destinations} />
      </div>
    </main>
  );
}
