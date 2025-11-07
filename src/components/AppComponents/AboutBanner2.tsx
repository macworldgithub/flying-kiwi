"use client";

import { Banner } from "../UIComponents/Banner";

export default function AboutBanner2() {
  return (
    <div className="w-full">
      <Banner
        title={
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
            Our Story
          </h2>
        }
        paragraph={
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto text-center whitespace-pre-line">
            {`Flying Kiwi began with a simple vision: to create a world where athletes with special needs have equal access to fitness, health programs, and opportunities to achieve their personal best.

Over the years, we've developed comprehensive programs including the Strong Hearts Program for cardiovascular health, Flying Kiwi Coaching for personalized fitness training, the Flying Kiwi Cup powerlifting competition, and the annual Flying Kiwi Formal social event.

Our programs are NDIS-aligned and designed to address the unique needs of our athletes, with support from qualified coaches and a caring community. We operate at facilities like Northside Indoor Sports and Goodlife Health Clubs Chermside, providing professional environments for training and growth.

The partnership with JUSTmobile.ai represents an innovative approach to charity funding, making it easier than ever for supporters to contribute to our mission while enjoying quality mobile services.`}
          </p>
        }
        backgroundImage="/images/banner.png"
        overlayOpacity={0.45}
        align="center"
      />
    </div>
  );
}
