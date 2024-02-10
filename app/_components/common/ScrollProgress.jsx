"use client";

import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress dark:bg-secondary fixed top-0 z-[999999999] h-[5px] bg-[#64baf7] transition-all duration-500 ease-out"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
