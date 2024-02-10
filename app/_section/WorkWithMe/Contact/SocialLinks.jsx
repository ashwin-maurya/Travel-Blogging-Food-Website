import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <FaFacebook />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <FaTwitter />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <FaInstagram />
      </Link>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-600 hover:scale-110"
      >
        <FaLinkedin />
      </Link>
    </>
  );
}
