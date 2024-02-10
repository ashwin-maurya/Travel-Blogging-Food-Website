import React from "react";
import UpdateImages from "@/app/(admin)/_admin/AdminPanel/Gallery/UpdateImages";
import { fetchgallery } from "@/lib/actions/gallery.actions";
export default async function page() {
  const images = await fetchgallery();
  return (
    <div>
      <UpdateImages images={images} />
    </div>
  );
}
