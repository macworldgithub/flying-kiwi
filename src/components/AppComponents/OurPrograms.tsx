"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "../UIComponents/Heading";
import { Card } from "../UIComponents/Card";
import { Button } from "../UIComponents/Button";

const OurPrograms = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const programs = [
    {
      backgroundImage: "/images/card-image.png",
      title: "Strong Hearts Program",
      paragraph:
        "Cardiovascular health through specialized fitness training at Northside Indoor Sports.",
      buttonText: "Learn More",
    },
    {
      backgroundImage: "/images/card-image.png",
      title: "Active Minds",
      paragraph:
        "Boost mental wellness through yoga, mindfulness, and group activities.",
      buttonText: "Discover",
    },
    {
      backgroundImage: "/images/card-image.png",
      title: "Team Inclusion",
      paragraph:
        "Inclusive sports teams for all abilities, promoting teamwork and friendship.",
      buttonText: "Join Now",
    },
    {
      backgroundImage: "/images/card-image.png",
      title: "Adaptive Sports",
      paragraph:
        "Empowering athletes with disabilities through specialized coaching and adaptive gear.",
      buttonText: "Explore",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 bg-white overflow-hidden -mt-px">
      <Heading title="Our Programs" level={3} />

      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => scroll("left")}
          leftIcon={<ChevronLeft />}
          aria-label="Scroll Left"
          className="rounded-full bg-white/70 backdrop-blur-md border shadow-md hover:bg-white cursor-pointer"
        />
      </div>

      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => scroll("right")}
          rightIcon={<ChevronRight />}
          aria-label="Scroll Right"
          className="rounded-full bg-white/70 backdrop-blur-md border shadow-md hover:bg-white cursor-pointer"
        />
      </div>

      <motion.div
        ref={scrollRef}
        className="mt-8 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="shrink-0 snap-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              backgroundImage={program.backgroundImage}
              title={program.title}
              paragraph={program.paragraph}
              buttonText={program.buttonText}
              onButtonClick={() => console.log(`${program.title} clicked!`)}
              className="w-[90vw] sm:w-[320px] md:w-[360px] lg:w-[387px] h-[480px] md:h-[503px]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurPrograms;
