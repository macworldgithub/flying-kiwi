"use client";

import React from "react";

interface AboutFlyingKiwiProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
}

const SameBanner: React.FC<AboutFlyingKiwiProps> = ({
  title = "About Flying Kiwi",
  description = "A charity dedicated to empowering athletes with special needs through accessible fitness, health programs, and community support.",
  backgroundImage = "/images/about.png", 
  overlayOpacity = 0.4,
}) => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-20 text-left text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          {title}
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SameBanner;
