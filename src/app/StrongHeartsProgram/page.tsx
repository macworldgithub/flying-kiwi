"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const StrongHeartsProgram = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FDEBF5" }}>
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            The Strong Hearts Program
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700">
            By Flying Kiwi Fitness
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            Welcome to the solution you have been looking for, to help your NDIS
            participant get more steps in their week while making more friends!
          </p>
        </div>
      </div>
      {/* Images 1-5 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong1.jpg"
              alt="Strong Hearts Program 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong2.jpg"
              alt="Strong Hearts Program 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong3.jpg"
              alt="Strong Hearts Program 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong4.jpg"
              alt="Strong Hearts Program 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong5.jpg"
              alt="Strong Hearts Program 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Program Details */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-gray-800 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            We use the power of social interaction alongside team-spirited games
            to help participants get in and involved on all the activities that
            happen over the course of the half-day program!
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 mr-3">Times:</span>
              <span>9am – 1pm</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 mr-3">Days:</span>
              <span>Monday, Wednesday (new!) and Thursday.</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 mr-3">Cost:</span>
              <span>
                $21.75 per hour, totalling $87 for the program for each day's
                attendance.
              </span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 mr-3">
                Location:
              </span>
              <span>
                North Lakes Indoor Sports and Fitness, 17 Flinders Parade, North
                Lakes, 4509
              </span>
            </div>
            <div className="mt-4 italic">
              Attendance is completely flexible- athletes are welcome to arrive
              later, finish earlier or stay for the full session, it is entirely
              up to you!
            </div>
          </div>
        </div>
      </div>
      {/* Billing Notice */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-center shadow-lg border border-blue-500/30">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            ATHLETES ARE ONLY INVOICED ON AN ATTENDANCE BASIS – NO SHOW, NO FEE!
            THERE ARE NO LOCK IN CONTRACTS, AND NO CANCELLATION FEES. UNLESS YOU
            ARE THERE, YOU WONT BE BILLED!
          </h3>
        </div>
      </div>
      {/* Video Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yqGyA20j1V4"
            title="Strong Hearts Program Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      {/* Trial Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-800">
          <p className="text-lg mb-4">
            Were you sent here by a team member of Team Flying Kiwi, and you
            want to continue with a trial with us? Click the link here for our
            trial form!
          </p>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Team Flying Kiwi Trial Form
          </Link>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-800">
          <p className="text-lg mb-4">
            Keen to try it out? Fill out the contact form right below here and
            we will be in touch ASAP to get you started!
          </p>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            FLYING KIWI CONTACT FORM HERE!
          </Link>
        </div>
      </div>
      {/* What to Expect Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-gray-800 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            What to Expect
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Each session is filled with a variety of inclusive activities
              designed to suit all energy and ability levels. Some activities
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Red Rover</li>
              <li>Stuck in the mud</li>
              <li>Lawn Bowls</li>
              <li>Shooting hoops</li>
              <li>
                And a highly anticipated staff vs athletes Beach Volleyball!
              </li>
            </ul>
            <p>
              All activities are adjusted based on both intensity and ability,
              that way everyone feels confident, comfortable, and included! Our
              main goal is to keep athletes moving in a fun and supportive
              environment, while creating a positive relationship with exercise.
            </p>
          </div>
        </div>
      </div>
      {/* Achievement Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-800">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            The results speak for themselves, in 2024 our superstar athletes
            collectively clocked just over 9 million steps- what an awesome
            achievement!
          </p>
        </div>
      </div>
      {/* Images 6-10 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong6.jpg"
              alt="Strong Hearts Program 6"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong7.jpg"
              alt="Strong Hearts Program 7"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong8.jpg"
              alt="Strong Hearts Program 8"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong9.jpg"
              alt="Strong Hearts Program 9"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong10.jpg"
              alt="Strong Hearts Program 10"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Support Requirements Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-gray-800 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Support requirements:
          </h2>
          <p className="text-lg mb-6">
            All athletes are required to attend Strong Hearts with their own
            support worker, at a minimum ratio of 1:2, or 1:1 where required,
            depending on individual needs and support plans. You can chat to us
            to discuss what might suit your participant best!
          </p>
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">
            NDIS funding:
          </h2>
          <p className="text-lg mb-6">
            Depending on the goals we are supporting, sessions are generally
            billed through Capacity Building- Health and Wellbeing or Social and
            Community Participation. Of course there are many other options, so
            feel free to contact us to discuss suitable NDIS codes.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">
            What to bring:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Snacks and lunch</li>
            <li>
              Plenty of water (there is a bubbler to fill up with as well)
            </li>
            <li>
              Wear some exercise gear (or whatever you're comfortable in!) and
              some sneakers
            </li>
          </ul>
        </div>
      </div>
      {/* Additional Trial and Contact Forms */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-800">
          <p className="text-lg mb-4">
            Were you sent here by a team member of Team Flying Kiwi and you want
            to continue with a trial with us? Click the link here for our trial
            form!
          </p>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-6"
          >
            Team Flying Kiwi Trial Form
          </Link>
          <p className="text-lg mb-4 mt-8">
            Keen to try it out? Fill out the contact form right below here and
            we will be in touch ASAP to get you started!
          </p>
          <Link
            href="#"
            className="inline-block bg-gradient-to-r from-[#A9D7F1] to-[#F8CFF3] text-[#05263D] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            FLYING KIWI CONTACT FORM HERE!
          </Link>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Testimonials for Flying Kiwi
          </h2>
        </div>
      </div>
      {/* Remaining Images 11-15 */}
      <div className="max-w-7xl mx-auto px-4 py-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong11.png"
              alt="Strong Hearts Program 11"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong12.jpg"
              alt="Strong Hearts Program 12"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong13.jpg"
              alt="Strong Hearts Program 13"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong14.png"
              alt="Strong Hearts Program 14"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
            <Image
              src="/images/strong/strong15.png"
              alt="Strong Hearts Program 15"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StrongHeartsProgram;
