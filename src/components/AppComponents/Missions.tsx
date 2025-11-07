"use client";
import Image from "next/image";
import { Heading } from "@/components/UIComponents/Heading";

export const Missions = () => {
  return (
    <section className="w-full bg-white overflow-hidden py-16 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <Heading title="Our Mission" align="left" level={2} />
          <div className="w-16 h-1 bg-pink-500 rounded-full mb-6"></div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 max-w-md">
            Flying Kiwi is committed to improving life expectancy, independence,
            and self-confidence for athletes with special needs. Through our
            programs, we promote fitness, social engagement, and personal
            achievement.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
            Our partnership with JUSTmobile.ai allows supporters to contribute
            simply by switching their mobile service — where a portion of
            proceeds directly funds our initiatives.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/hand.png"
            alt="Our Mission"
            width={500}
            height={500}
            className="object-contain w-full max-w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};
