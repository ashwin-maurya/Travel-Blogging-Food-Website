import React from "react";
import Youtube from "@/app/(admin)/_admin/AdminPanel/Youtube/Youtube";
import { fetchvideos } from "@/lib/actions/youtube.actions";
export default async function page() {
  const videos = await fetchvideos();
  return (
    <div>
      <Youtube videos={videos} />
    </div>
  );
}
