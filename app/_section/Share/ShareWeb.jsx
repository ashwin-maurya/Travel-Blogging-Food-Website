import React from "react";
import { RWebShare } from "react-web-share";
import { FaShare } from "react-icons/fa";

const ShareWeb = ({ title }) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <RWebShare
        data={{
          text: `${title}\n`,
          url: currentUrl,
          title: "Kahaani Studio",
        }}
        sites={["facebook", "twitter", "linkedin", "whatsapp"]}
      >
        <FaShare className="text-2xl max-sm:text-xs" />
      </RWebShare>
    </>
  );
};

export default ShareWeb;
