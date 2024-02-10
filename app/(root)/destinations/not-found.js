"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div class="bg-gray-100 h-screen justify-center">
      <center class="mt-24 m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="sad">
          <symbol id="New_Symbol_14" viewBox="-6.5 -6.5 13 13">
            <path
              fill="#ffd4c3"
              stroke="#504b46"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M0-6c2.2 0 4.1 1.5 4.7 3.5C6.3-2.5 6.4 0 5 0v1c0 2.8-2.2 5-5 5s-5-2.2-5-5V0c-1.4 0-1.3-2.5.2-2.5C-4.1-4.5-2.2-6 0-6z"
            ></path>
            <circle cx="-1.6" cy="-.1" r=".1" fill="#ffc258"></circle>
            <path
              fill="#4f4b45"
              d="M-1.6.5c-.3 0-.6-.3-.6-.6s.2-.7.6-.7c.3 0 .6.3.6.7s-.3.6-.6.6z"
            ></path>
            <circle cx="1.6" cy="-.1" r=".1" fill="#ffc258"></circle>
            <path
              fill="#4f4b45"
              d="M1.6.5C1.3.5 1 .2 1-.1s.3-.6.6-.6.6.3.6.6-.2.6-.6.6z"
            ></path>
            <circle cx="-3" cy="-1.5" r=".5" fill="#fabfa5"></circle>
            <circle cx="3" cy="-1.5" r=".5" fill="#fabfa5"></circle>
            <path
              fill="none"
              stroke="#504b46"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M-1.2-3c.8-.5 1.7-.5 2.5 0"
            ></path>
          </symbol>
          <g id="Icons">
            <g id="XMLID_531_">
              <circle
                id="XMLID_7072_"
                cx="24"
                cy="21.3"
                r="20"
                fill="#ffe500"
              ></circle>
              <path
                id="XMLID_7069_"
                fill="#ebcb00"
                d="M24 1.3c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 37C13.9 38.3 5.8 30.1 5.8 20 5.8 10 13.9 1.8 24 1.8S42.2 10 42.2 20c0 10.1-8.1 18.3-18.2 18.3z"
              ></path>
              <ellipse
                id="XMLID_7068_"
                cx="24"
                cy="5.3"
                fill="#fff48c"
                rx="6"
                ry="1.5"
              ></ellipse>
              <circle
                id="XMLID_7067_"
                cx="24"
                cy="21.3"
                r="20"
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></circle>
              <path
                id="XMLID_7066_"
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-miterlimit="10"
                d="M19 31.3c1.4-1 3.1-1.5 5-1.5 1.8 0 3.6.6 5 1.5"
              ></path>
              <ellipse
                id="XMLID_7065_"
                cx="24"
                cy="45.2"
                fill="#45413c"
                opacity=".15"
                rx="16"
                ry="1.5"
              ></ellipse>
              <circle
                id="XMLID_7064_"
                cx="14"
                cy="21.3"
                r="1"
                fill="#45413c"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></circle>
              <circle
                id="XMLID_7063_"
                cx="33.5"
                cy="21.3"
                r="1"
                fill="#45413c"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              ></circle>
              <path
                id="XMLID_7062_"
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M13 17c1.1-.2 2.2-.5 3.4-1.1 1.1-.6 2.1-1.3 2.9-2.1"
              ></path>
              <path
                id="XMLID_7061_"
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M34.8 17c-1.1-.2-2.2-.5-3.4-1.1-1.1-.6-2.1-1.3-2.9-2.1"
              ></path>
              <ellipse
                id="XMLID_7060_"
                cx="36"
                cy="26.3"
                fill="#ffaa54"
                rx="2.5"
                ry="1.5"
              ></ellipse>
              <ellipse
                id="XMLID_7059_"
                cx="12"
                cy="26.3"
                fill="#ffaa54"
                rx="2.5"
                ry="1.5"
              ></ellipse>
            </g>
          </g>
        </svg>
        <div class=" tracking-widest mt-4">
          <span class="text-gray-500 text-6xl block">
            <span>No results found!!</span>
          </span>
          <span class="text-gray-500 text-xl">Sorry, Nothing to see here.</span>
        </div>
      </center>
      <center class="mt-6">
        <span
          onClick={() => router.back()}
          class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >
          Go back{" "}
        </span>
      </center>
    </div>
  );
}
