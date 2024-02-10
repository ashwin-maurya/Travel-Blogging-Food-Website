import React, { useRef, useEffect, useState } from "react";
import { FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function PhotoModal({
  selectedImage,
  closeImage,
  imageData,
  setSelectedImage,
}) {
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);
  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      closeImage();
    }
  };

  const handleImageClick = (event) => {
    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const percentX = (mouseX / rect.width) * 100;
    const percentY = (mouseY / rect.height) * 100;

    setZoomPosition({ x: percentX, y: percentY });
    setZoomed((prevZoomed) => !prevZoomed);
  };

  const getTransformOrigin = () => {
    return `${zoomPosition.x}% ${zoomPosition.y}%`;
  };
  const navigateImage = (direction) => {
    const currentIndex = imageData.findIndex(
      (image) => image._id === selectedImage._id
    );
    let nextIndex;

    if (direction === "left") {
      nextIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    } else {
      nextIndex = (currentIndex + 1) % imageData.length;
    }

    setSelectedImage(imageData[nextIndex]);
  };

  return (
    <>
      <div
        id="myModal"
        className={`bg-Opacityblack fixed inset-0 z-[99999999999] flex select-none items-center justify-center bg-[#00000052] backdrop-blur-sm transition-all duration-300 ease-in-out`}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div
          className="z-[999999999] overflow-hidden backdrop-blur-sm "
          id={selectedImage.id}
        >
          <div className="zoom-wrapper__image  group relative m-auto flex h-full items-center justify-center shadow-lg">
            <img
              loading="lazy"
              ref={imageRef}
              className={`ease max-h-[95vh] w-full h-auto transform transition-transform duration-300 ${
                zoomed ? "scale-[2]  cursor-zoom-out" : " cursor-zoom-in "
              }`}
              alt={selectedImage.imgDescription}
              src={selectedImage.imageURL}
              onClick={handleImageClick}
              style={{
                transformOrigin: getTransformOrigin(),
              }}
            />
            <span
              className="absolute right-0 top-0 -translate-y-12 cursor-pointer bg-gray-600 p-2 text-xl text-white transition-all duration-500 ease-in-out hover:scale-95 group-hover:translate-y-0 max-md:translate-y-0 max-md:text-lg"
              onClick={closeImage}
            >
              <FaTimes />
            </span>
            <span
              className={`absolute bottom-0 right-0  w-full bg-[#00000071] p-2 text-xl text-white opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 max-md:opacity-100 max-sm:p-1`}
            >
              <h1 className="font-CooperHewitt text-base capitalize max-sm:text-xs">
                {selectedImage.imageLocation}
              </h1>
              <p className="font-Authorfont text-sm max-sm:text-[10px]">
                {selectedImage.imgDescription}
              </p>
            </span>
          </div>
        </div>
        <div
          className="-translate-y-2/2 absolute z-[99999999999999]  left-0 flex transform cursor-pointer items-center bg-[#00000086] py-10 max-md:bottom-0"
          onClick={() => navigateImage("left")}
        >
          <button className="cursor-pointer bg-transparent p-2 text-2xl text-white">
            <FaChevronLeft />
          </button>
        </div>
        <div
          className="-translate-y-1/1 absolute right-0  z-[99999999999999] flex transform cursor-pointer items-center bg-[#00000086] py-10 max-md:bottom-0"
          onClick={() => navigateImage("right")}
        >
          <button className="cursor-pointer bg-transparent  p-2 text-2xl text-white">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
