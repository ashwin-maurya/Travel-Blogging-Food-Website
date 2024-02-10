import React from "react";
import { fetchdestinations } from "@/lib/actions/destination.actions";
import Destinations from "@/app/(admin)/_admin/AdminPanel/Destination/Destinations";
export default async function page() {
  const destinations = await fetchdestinations();
  return (
    <div>
      <Destinations destinations={destinations} />
    </div>
  );
}
