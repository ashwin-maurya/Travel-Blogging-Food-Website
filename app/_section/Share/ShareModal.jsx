"use client";
import React from "react";
import { FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import ShareWeb from "./ShareWeb";

export default function ShareModal({ title }) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50  overflow-hidden text-[1.7vw] text-gray-100 max-md:hidden">
        <div className="flex cursor-pointer flex-col items-center justify-center bg-gray-300 shadow transition-all duration-500 ease-out">
          <div className="item-center flex w-auto  justify-center overflow-hidden bg-red-600 px-2 py-2 text-2xl text-gray-200 transition-all duration-200 ease-out hover:scale-105 max-md:px-6">
            <ShareWeb title={title} />
          </div>
          <div className="flex flex-col justify-around">
            <WhatsappShareButton url={currentUrl}>
              <div className="item-center flex  justify-center overflow-hidden bg-green-500 px-2 py-2 text-2xl  transition-all duration-200 ease-out hover:scale-105 max-md:px-6">
                <FaWhatsapp />
              </div>
            </WhatsappShareButton>
            <FacebookShareButton url={currentUrl}>
              <div className="item-center flex  justify-center overflow-hidden bg-blue-500 px-2 py-2 text-2xl  transition-all duration-200 ease-out hover:scale-105 max-md:px-6">
                <FaFacebook />
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={currentUrl}>
              <div className="item-center flex  justify-center overflow-hidden bg-blue-400 px-2 py-2 text-2xl  transition-all duration-200 ease-out hover:scale-105 max-md:px-6">
                <FaTwitter />
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  );
}
