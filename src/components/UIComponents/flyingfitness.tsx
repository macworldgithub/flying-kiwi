"use client";

import React from "react";
import Image from "next/image";

const ContactBanner = () => (
  <div className="w-full bg-[#82cbf9] hover:bg-[#6abef2] transition cursor-pointer py-4 text-center">
    <span className="text-[#156e9e] font-semibold italic md:text-lg">
      Click Here to Contact Us at Flying Kiwi Fitness!
    </span>
  </div>
);

export const FlyingFitness = () => {
  return (
    <div className="bg-[#619bc9] min-h-screen py-10 px-4 md:px-8 font-sans">
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl mt-[80px] p-8 md:p-16">

        {/* Intro */}
        <p className="text-[#1f8cc6] font-bold text-center text-base md:text-lg leading-relaxed mb-10 uppercase">
          We believe all athletes living with special needs deserve to live healthy, confident, long and strong lives.
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          Therefore, our mission is to to <strong className="text-gray-700">improve the life expectancy, daily independence and self-confidence of all these Athletes</strong> through accessible, fun and results driven fitness and health programs for everyone living with Special Needs around Australia, and eventually the world.
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          We are the creators of the Strong Hearts Program, an All-Abilities Sport and Recreation program, boosting cardiovascular health, motor skills, and of course making friends!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-12 leading-relaxed">
          We are also the Hosts of the Flying Kiwi Cup, a monument to success of Powerlifting Athletes with All Abilities.
        </p>

        {/* Coaching Program */}
        <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6">Flying Kiwi Coaching Program</h2>
        <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-8">Coaching for a more capable, independent, and longer life.</h3>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          The Perfect solution for goal achieving, happiness and self-confidence boosting premium coaching support for Athletes with Special Needs. Taking a customised approach to achieving goals set out in your NDIS plan (Or just goals for life!) and making sure the plan framework is multi-faceted - attacking from all angles in life!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          Held at Goodlife Health Clubs, Chermside!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          This 2 minutes and 25 seconds explains us pretty well ⬇️⬇️
        </p>
        <div className="aspect-video w-full max-w-[600px] mb-8">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Training with Special Needs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <ContactBanner />

        {/* Strong Hearts Program */}
        <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Strong Hearts Program</h2>
        <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-4">Special Needs Social Sport and Recreation Program</h3>
        <h4 className="text-[#f12eb6] text-xl md:text-2xl font-bold text-center mb-10">ADDRESS: Northside Indoor Sports and Fitness, 17 Flinders Parade, North Lakes</h4>

        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          The Strong Hearts Program is our Group Special Needs Social, Sport and Recreation Program, creating a fun, Social, and loving environment focussed on Cardiovascular Health, Fine and Gross Motor Skills, and making friends all while not realising you are exercising!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
          The Aim is to help the Athletes Associate Exercise with Happiness - because if we can help them achieve that, then in the years to come, they will all want to exercise because they find it enjoyable - not because its a chore - and therefore help to improve their own health and wellbeing for their longer lifestyle!
        </p>
        <div className="text-center mb-10">
          <a href="#" className="text-[#65b2e8] underline">Check it out here</a>
        </div>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          We want to get to know you as a Parent, or Carer, and really understand what you would love for your child to achieve in the short term, and long term.
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          As we know every person is unique, we want to get to know your child inside and out, so we can take the best calculated approach possible to achieve everything we can as a team.
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-8 leading-relaxed">
          Please tap below to leave your details with us, and a member of the team will get in touch as soon as possible to help get on the way to a better way of life for your child - and you!
        </p>

        <ContactBanner />
        <div className="text-center mt-2 text-[#5a6268] text-sm">
          Tap here ⬆️⬆️⬆️
        </div>

        {/* The Flying Kiwi Cup */}
        <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Flying Kiwi Cup</h2>
        <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-10">The All Abilities Powerlifting Meet with HUGE Crowds</h3>
        <p className="text-[#5a6268] text-sm md:text-base mb-8 leading-relaxed">
          Giving our athletes something to aim for is a large part of any human's progress! We hold our Flying Kiwi Cup twice a year to give the athletes an opportunity to show their stuff on the platform in front of a big crowd, and it is always a big day of fun!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
          "No Egos, just lifting with my friends" 💙
        </p>
        <div className="aspect-video w-full max-w-[600px] mb-8">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="How To Increase The Confidence" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <ContactBanner />

        {/* The Flying Kiwi Formal */}
        <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-6 mt-14">The Flying Kiwi Formal</h2>
        <h3 className="text-[#f12eb6] text-2xl md:text-3xl font-bold text-center mb-10">The Celebration of Achievement for all of our Participants</h3>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          Once a year we all come together as a team with our Support Workers, Parents, and Friends to acknowledge everything we have achieved in the last 12 months!
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          Flying Kiwi Athletes attend free as a part of their membership with us
        </p>
        <p className="text-[#5a6268] text-sm md:text-base mb-6 leading-relaxed">
          Check out the highlights from 2022 here:
        </p>
        <div className="aspect-video w-full max-w-[600px] mb-8">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="The Flying Kiwi Formal 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <ContactBanner />
        <div className="text-center mt-2 text-[#5a6268] text-sm mb-14">
          Tap here ⬆️⬆️⬆️
        </div>

        {/* Feature on Channel 9 */}
        <h2 className="text-[#1f8cc6] text-3xl md:text-5xl font-bold text-center mb-10">Our Feature on Channel 9&apos;s Sunrise!</h2>
        <div className="aspect-video w-full max-w-[600px] mb-4">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Training for Special Needs Featured on Sunrise" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p className="text-[#5a6268] text-sm md:text-base mb-10 leading-relaxed">
          Flying Kiwi Athlete Talitha having a blast with Coach Michael!
        </p>

        {/* The Image at the bottom */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mt-8">
          <Image src="/images/pic2.png" alt="Coach Michael" fill className="object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
};
