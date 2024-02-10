import React from "react";
import WorkWithMeHero from "@/app/_section/WorkWithMe/WorkWithMeHero";
import ContactForm from "@/app/_section/WorkWithMe/ContactForm";
export default function page() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <WorkWithMeHero />
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <ContactForm />
      </div>
    </>
  );
}
