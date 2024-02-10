"use client";
import React, { useRef } from "react";

export default function ContactFormInput() {
  return (
    <>
      <section className="bg-blue-400  max-sm:px-6 py-12 2xl:py-32 max-sm:py-16">
        <div className="flex justify-evenly items-center max-sm:flex-col gap-5">
          <form
            id="form"
            className="w-[70%] max-sm:w-[90%] flex flex-col gap-5  font-montserrat"
          >
            <h1 className="text-4xl 2xl:text-5xl  text-white font-CooperHewitt max-lg:text-center">
              Send a message:
            </h1>

            <div className="flex">
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full h-12 2xl:text-xl px-4 bg-transparent outline-none text-white border border-solid border-gray-100  transition duration-300 ease-in-out placeholder-white  hover:text-white"
                required
              />
            </div>
            <input
              id="email"
              type="text"
              placeholder="Your e-mail"
              name="user_email"
              className="w-full h-12 2xl:text-xl px-4 bg-transparent outline-none placeholder-white text-white border border-solid border-gray-100  transition duration-300 ease-in-out  hover:text-white"
              required
            />
            <textarea
              id="message"
              placeholder="Your Message"
              name="message"
              cols={4}
              className="w-full h-32 2xl:text-xl p-4 bg-transparent outline-none placeholder-white text-white border border-solid border-gray-100  transition duration-300 ease-in-out  hover:text-white"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full 2xl:text-xl h-full bg-white text-black p-3 justify-center flex items-center cursor-pointer hover:bg-gray-200 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
