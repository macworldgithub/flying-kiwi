"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamData, TeamMember, actionShots } from "@/data/teamData";

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow bg-white">
        <div className="mb-5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            className="h-1 bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6] mb-4 rounded-full"
          />
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#EB0FB6] transition-colors duration-300">
            {member.name}
          </h3>
          <div className="inline-flex items-center mt-2">
            <span className="text-sm font-semibold text-[#EB0FB6] bg-pink-50 px-3 py-1 rounded-lg">
              {member.role}
            </span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
          {member.description}
        </p>

        {/* Decorative element */}
        <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center text-[#13AFF0] font-semibold text-sm">
            Learn more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fafbfc] relative overflow-hidden" id="team">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6]" />
            <span className="text-[#EB0FB6] font-bold tracking-[0.2em] uppercase text-xs">
              The People
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1]"
          >
            Meet the Heart of <br />
            Flying Kiwi Fitness!

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-gray-600 leading-relaxed font-medium"
          >
            Our team is made up of those with big hearts. Each member brings unique expertise and a shared passion for making a difference.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Action Shots Gallery */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Flying Kiwi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6]">in Action</span>
            </motion.h3>
            <p className="text-gray-500 mt-4 text-lg font-medium">Moments from our programs, events, and daily training.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {actionShots.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white group"
              >
                <Image
                  src={image}
                  alt={`Action shot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 font-medium">
            <span>Interested in joining us?</span>
            <a href="/contact" className="text-[#EB0FB6] hover:text-[#13AFF0] font-bold transition-all">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
