"use client";
import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ShareWeb from "./ShareWeb";

export default function ShareModalHorizonatal({ title }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Check if window is defined (client side)
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      setIsLargeScreen(window.innerWidth > 500);

      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 500);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="my-5 flex w-full cursor-pointer flex-row items-center justify-start transition-all duration-500 ease-out max-md:flex-col">
        <h1 className="mx-10 font-CooperHewitt text-3xl font-extrabold max-md:text-lg max-sm:mb-2">
          Share the Article :{" "}
        </h1>
        <div className="flex flex-wrap gap-3 font-CooperHewitt text-white max-sm:gap-0">
          {isLargeScreen ? (
            <>
              <span
                className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-stone-600 bg-stone-600 px-5 py-3 text-white transition duration-200 hover:border-stone-700 hover:bg-stone-700 max-sm:p-1"
                target="_blank"
                rel="noopener"
                onClick={copyToClipboard}
                aria-label="Copy URL to Clipboard"
              >
                <FaLink />
                <span className="ml-2">
                  {isCopied ? "Copied!" : "Copy URL"}
                </span>
              </span>
            </>
          ) : (
            <span
              className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-stone-600 bg-stone-600 px-5 py-3 text-white transition duration-200 hover:border-stone-700 hover:bg-stone-700 max-sm:p-1 max-sm:px-3 max-sm:text-sm"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              <ShareWeb title={title} />
              <span className="ml-2">Share</span>
            </span>
          )}

          <FacebookShareButton url={currentUrl}>
            <a
              className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-[#316FF6] bg-[#316FF6] px-5 py-3 text-white transition duration-200 hover:border-[#316FF6] hover:bg-[#316ff6cc] max-sm:p-1 max-sm:px-3 max-sm:text-sm"
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
            >
              <FaFacebookF />
              <span className="ml-2">Facebook</span>
            </a>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <a
              className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-blue-600 bg-[#1da1f2] px-5 py-3 text-white transition duration-200 hover:border-blue-500 hover:bg-blue-400 max-sm:p-1 max-sm:px-3 max-sm:text-sm"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              <FaTwitter />

              <span className="ml-2">Twitter</span>
            </a>
          </TwitterShareButton>

          <WhatsappShareButton url={currentUrl}>
            <a
              className="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-green-600 bg-green-500 px-5 py-3 text-white transition duration-200 hover:border-green-700 hover:bg-green-400 max-sm:p-1 max-sm:px-3 max-sm:text-sm"
              target="_blank"
              rel="noopener"
              aria-label="Share on Whatsapp"
              draggable="false"
            >
              <FaWhatsapp />

              <span className="ml-2">Whatsapp</span>
            </a>
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
}
