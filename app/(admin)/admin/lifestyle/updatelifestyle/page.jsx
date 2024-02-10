import React from "react";
import LifesytlePage from "@/app/(admin)/_admin/AdminPanel/Lifestyle/UpdateLifestyle/LifestylePage";
import { fetchlifestyle } from "@/lib/actions/lifestyle.actions";
export default async function page() {
  const lifestyle = await fetchlifestyle();
  return (
    <div>
      <LifesytlePage lifestyle={lifestyle} />
    </div>
  );
}
