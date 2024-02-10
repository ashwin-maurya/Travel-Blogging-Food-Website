"use client";
import React, { useEffect } from "react";
import AuthenticatedAdminPage from "../_admin/AdminPanel/AdminHome/AuthenticatedAdminPage";

export default function page() {
  return (
    <>
      <main>
        <AuthenticatedAdminPage />
      </main>
    </>
  );
}
