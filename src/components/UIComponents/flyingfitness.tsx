"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";

const SectionHeader: React.FC<{ eyebrow: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
    <div className="mb-12">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
        >
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6]" />
            <span className="text-[#EB0FB6] font-bold tracking-[0.2em] uppercase text-xs">
                {eyebrow}
            </span>
        </motion.div>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-xl text-[#EB0FB6] font-bold"
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

const VideoCard: React.FC<{ src: string; title: string }> = ({ src, title }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
    >
        <iframe
            width="100%"
            height="100%"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="group-hover:scale-105 transition-transform duration-700"
        ></iframe>
    </motion.div>
);

export const FlyingFitness = () => {
    return (
        <div className="bg-[#fafbfc] min-h-screen pt-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,175,240,0.05),transparent_40%)]" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-pink-50 text-[#EB0FB6] text-sm font-bold mb-6"
                        >
                            Our Mission
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-8"
                        >
                            Empowering Athletes to Live{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6]">
                                Healthy, Confident Lives.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed font-medium mb-10"
                        >
                            We believe all athletes living with special needs deserve to live healthy, confident, long and strong lives. Our mission is to improve life expectancy, independence, and confidence.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button variant="gradient" size="xl" className="shadow-xl">
                                Contact Us Today
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <SectionHeader
                            eyebrow="Premium Coaching"
                            title="Flying Kiwi Coaching Program"
                            subtitle="Coaching for a more capable, independent, and longer life."
                        />
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                The perfect solution for goal-achieving, happiness and self-confidence boosting premium coaching support for Athletes with Special Needs.
                            </p>
                            <p className="font-bold text-gray-900 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-blue-50 text-[#13AFF0]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                Held at Goodlife Health Clubs, Chermside!
                            </p>
                        </div>
                    </div>
                    <VideoCard src="https://www.youtube.com/embed/yAvXvdm7Gjc" title="Training with Special Needs" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="lg:order-2">
                        <SectionHeader
                            eyebrow="Social & Recreation"
                            title="The Strong Hearts Program"
                            subtitle="Social Sport and Recreation for All Abilities"
                        />
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Creating a fun, social, and loving environment focused on cardiovascular health, motor skills, and making friends.
                            </p>
                            <p className="font-bold text-gray-900 flex items-start gap-3">
                                <span className="p-2 rounded-lg bg-pink-50 text-[#EB0FB6] mt-1">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                Northside Indoor Sports and Fitness, 17 Flinders Parade, North Lakes
                            </p>
                        </div>
                    </div>
                    <div className="lg:order-1">
                        <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-gray-100">
                            <VideoCard src="https://www.youtube.com/embed/Y6vg_yxiONo" title="Strong Hearts" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <SectionHeader
                            eyebrow="Major Events"
                            title="The Flying Kiwi Cup & Formal"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Flying Kiwi Cup</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                The All Abilities Powerlifting Meet with HUGE Crowds. We hold this twice a year to give athletes an opportunity to show their progress.
                            </p>
                            <VideoCard src="https://www.youtube.com/embed/Gk7kfjBTdBQ" title="Flying Kiwi Cup" />
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Flying Kiwi Formal</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Once a year we celebrate our achievements together with support workers, parents, and friends!
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sunrise Feature */}
            {/* <section className="py-24 bg-[#fafbfc]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <SectionHeader
                        eyebrow="Media"
                        title="Our Feature on Channel 9's Sunrise!"
                    />
                    <div className="max-w-4xl mx-auto">
                        <VideoCard src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Sunrise Feature" />
                        <p className="mt-8 text-gray-600 font-medium italic">
                            "Flying Kiwi Athlete Talitha having a blast with Coach Michael!"
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Footer Image */}
            <section className="relative h-[60vh] w-full mt-24">
                <Image
                    src="/images/pic2.png"
                    alt="Coach Michael"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-white text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 drop-shadow-2xl">Ready to Join Us?</h2>
                        <Button variant="gradient" size="xl">Start Your Journey</Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
