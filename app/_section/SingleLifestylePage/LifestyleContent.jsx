import React from "react";

export default function LifestyleContent({ content }) {
  console.log("Content:", content);

  return (
    <>
      <article className="blogContent mx-auto mt-12 max-w-[100vw] text-wrap font-HankenGrotesk text-xl leading-relaxed text-gray-700 max-md:max-w-full max-md:text-lg max-sm:m-2 max-sm:pl-0">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
