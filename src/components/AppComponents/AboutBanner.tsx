"use client";
import React from "react";
import { Banner } from "@/components/UIComponents/Banner";
import { Heading } from "@/components/UIComponents/Heading";

export const AboutBanner: React.FC = () => {
  return (
    <div className="w-full relative">
      <Banner
        backgroundImage="/images/about.png"
        overlayOpacity={0.55}
        align="left"
      >
        {/* Content Overlay */}
        <div
          className="
            relative z-10 flex flex-col justify-center 
            py-12 sm:py-16 md:py-20 
            max-w-[1200px] w-full
          "
        >
          <Heading
            title="About Flying Kiwi"
            align="left"
            level={2}
            className="text-white mb-4 sm:mb-6 md:mb-8"
          />

          <div
            className="
              rounded-lg 
              max-w-3xl 
              text-white 
              leading-relaxed
              text-[clamp(0.9rem,1.5vw,1.1rem)]
              space-y-4 sm:space-y-5 md:space-y-6
            "
          >
            <p>
              A charity dedicated to empowering athletes with special needs
              through accessible fitness, health programs, and community
              support.
            </p>
            <p>
              Over the years, we've developed programs like Strong Hearts for
              cardiovascular health, Flying Kiwi Coaching for personalized
              fitness, the Flying Kiwi Cup competition, and the annual Flying
              Kiwi Formal.
            </p>
            <p>
              Our programs are NDIS-aligned, supported by qualified coaches, and
              operate at facilities such as Northside Indoor Sports and Goodlife
              Chermside.
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};
