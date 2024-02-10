// Auth.js
"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { tokenValidation } from "@/lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function Auth({ loading, setLoading, setAuthenticated }) {
  const route = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem("authtoken"));
    if (pathname.startsWith("/admin")) {
      setLoading(true);

      if (storedAuthData) {
        validateAuthToken();
      } else {
        handleLogout(); // Handle invalid token
      }
    }
  }, []);

  const validateAuthToken = async () => {
    try {
      setLoading(true);
      const authtoken = localStorage.getItem("authtoken");
      console.log(authtoken);
      if (!authtoken) {
        handleLogout();
        return;
      }

      const decodedToken = jwtDecode(authtoken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        handleLogout(); // Token expired, logout
        return;
      }

      const res = await tokenValidation(authtoken.replace(/"/g, ""));
      if (!res.success || !res.admin) {
        handleLogout();
        return;
      } else {
        setLoading(false);
        setAuthenticated(true); // Set authenticated to true when validation succeeds
        console.log(res);
      }
    } catch (error) {
      console.error(error);
      handleLogout(); // Handle invalid token
    } finally {
      console.log("Token validation complete");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    route.push("/authenticate/admin"); // Redirect to login page or any desired route
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return <></>;
}
