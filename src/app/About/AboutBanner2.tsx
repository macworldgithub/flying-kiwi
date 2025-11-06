"use client";
import { Banner } from "../../components/UIComponents/Banner";

const HomeBanner2 = () => {
  return (
    <div className="w-full -mt-px relative">
      {/* Background Banner */}
      <Banner
        title=""
        paragraph=""
        backgroundImage="/images/banner.png"
        overlayOpacity={0.55}
        align="center"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Our Story
        </h2>
        <div className="w-16 h-1 bg-pink-500 rounded-full mb-6"></div>

        {/* Paragraphs */}
        <div className="bg-opacity-40 p-6 md:p-8 rounded-lg max-w-3xl text-white text-base md:text-lg leading-relaxed">
          <p className="mb-4">
            Flying Kiwi began with a simple vision: to create a world where
            athletes with special needs have equal access to fitness, health
            programs, and opportunities to achieve their personal best.
          </p>
          <p className="mb-4">
            Over the years, we've developed comprehensive programs including the
            Strong Hearts Program for cardiovascular health, Flying Kiwi
            Coaching for personalized fitness training, the Flying Kiwi Cup
            powerlifting competition, and the annual Flying Kiwi Formal social
            event.
          </p>
          <p className="mb-4">
            Our programs are NDIS-aligned and designed to address the unique
            needs of our athletes, with support from qualified coaches and a
            caring community. We operate at facilities like Northside Indoor
            Sports and Goodlife Health Clubs Chermside, providing professional
            environments for training and growth.
          </p>
          <p>
            The partnership with JUSTmobile.ai represents an innovative approach
            to charity funding, making it easier than ever for supporters to
            contribute to our mission while enjoying quality mobile services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
