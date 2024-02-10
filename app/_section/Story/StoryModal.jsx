"use client";
import React, { useEffect, useRef } from "react";
import StorySlider from "./StorySlider";
import { useRouter } from "next/navigation";
const StoryModal = ({ storyId, stories }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      // Clear the storyId when clicking outside the modal
      router.push(`/story`);
    }
  };

  useEffect(() => {
    if (storyId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [storyId]);

  return (
    <>
      <div
        id="myModal"
        className={`${
          storyId ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } bg-Opacityblack fixed inset-0 z-[99999999999] flex  select-none items-center justify-center          bg-[#000000cb] backdrop-blur-sm transition-all duration-300 ease-in-out`}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="bg- flex h-screen items-center justify-center overflow-hidden rounded-lg shadow-xl max-lg:w-[100%]">
          {storyId && <StorySlider storyId={storyId} stories={stories} />}
        </div>
      </div>
    </>
  );
};

export default StoryModal;
