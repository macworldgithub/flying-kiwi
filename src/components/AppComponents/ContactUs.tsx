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
        align="center"
        height="70vh"
      >
        {/* Content Overlay */}
        <div
          className="
            relative z-10 flex flex-col justify-center items-center text-center
            py-12 sm:py-16 md:py-20 
            max-w-[1200px] w-full
          "
        >
          <Heading
            title="Get in Touch"
            align="center"
            level={2}
            className="text-white mb-4 sm:mb-6 md:mb-8"
          />

          <div
            className="
              rounded-lg 
              max-w-3xl 
              text-white 
              leading-relaxed
              text-[clamp(1rem,2vw,1.25rem)]
              font-medium
              space-y-4 sm:space-y-5 md:space-y-6
            "
          >
            <p className="max-w-xl mx-auto">
              Have questions about Flying Kiwi Service or our
              programs? We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};
