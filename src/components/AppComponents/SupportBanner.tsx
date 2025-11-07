"use client";

import Image from "next/image";
import { Banner } from "@/components/UIComponents/Banner";

const SupportBanner = () => {
  return (
    <Banner
      title="Switch to E-Sim"
      paragraph="Switching to Flying Kiwi Service is simple, and every plan directly supports our athletes. Here’s how to get started."
      backgroundImage="/images/banner.png" 
      overlayOpacity={0.45}
      align="left"
    >
      
      <div className="absolute right-10 bottom-0 sm:right-20 md:right-28 lg:right-40 z-20">
        <Image
          src="/images/mobile.png"
          alt="Mobile preview"
          width={260}
          height={520}
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </Banner>
  );
};

export default SupportBanner;
