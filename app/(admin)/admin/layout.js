// Dashboardlayout.js
"use client";
import Sidebar from "../_admin/AdminPanel/Components/Common/SideNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./Auth";
import { useEffect, useState } from "react";
import Loader from "../_admin/AdminPanel/Components/Common/Loader";

export default function Dashboardlayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="flex">
      <Auth
        loading={loading}
        setLoading={setLoading}
        setAuthenticated={setAuthenticated} // Pass setAuthenticated to Auth component
      />
      {loading && <Loader />}
      {!loading && authenticated && (
        <>
          <div className="w-72 min-w-72 max-w-72">
            <Sidebar />
          </div>
          <ToastContainer />
          <div className="mx-auto w-full max-w-screen-xl overflow-y-scroll scroll-smooth pt-5 max-md:pt-5">
            <main>{children}</main>
          </div>
        </>
      )}
    </div>
  );
}
