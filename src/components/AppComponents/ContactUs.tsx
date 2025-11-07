"use client";
import React from "react";
import { Banner } from "@/components/UIComponents/Banner";
import { Heading } from "@/components/UIComponents/Heading";

export const ContactUs: React.FC = () => {
  return (
    <div className="w-full relative">
      <Banner
        backgroundImage="/images/contact.png"
        overlayOpacity={0.55}
        align="left"
        height="70vh"
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
            title="Get in Touch"
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
              Have questions about Flying Kiwi Service or our
              <br /> programs? We'dlove to hear from you
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};
