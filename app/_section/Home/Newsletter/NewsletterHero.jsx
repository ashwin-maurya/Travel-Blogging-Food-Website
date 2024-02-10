import React from "react";
import Newsletter from "./Newsletter";
export default function NewsletterHero() {
  return (
    <>
      <div className="relative min-h-72 bg-blue-400 bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-2 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="mx-auto px-4 py-1 pt-12 md:max-w-full">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
