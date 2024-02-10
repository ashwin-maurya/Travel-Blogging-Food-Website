"use client";

import React from "react";
import ContactFormInput from "./Contact/ContactFormInput";
import ContactInfo from "./Contact/ContactInfo";
export default function ContactForm() {
  return (
    <>
      <div class="w-full mt-0 flex max-md:flex-col">
        <div className="w-2/5 max-md:w-full flex justify-center items-center ">
          <ContactInfo />
        </div>

        <div className="w-3/5 max-lg:w-full">
          <ContactFormInput />
        </div>
      </div>
    </>
  );
}
