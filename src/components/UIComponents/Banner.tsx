"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface StatItem {
  value: string;
  label: string;
}

interface BannerProps {
  title?: string;
  paragraph?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onClose?: () => void;
  backgroundImage?: string;
  overlayOpacity?: number;
  align?: "left" | "center" | "right";
  stats?: StatItem[];
  waveColor?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  paragraph,
  message,
  buttonText,
  onButtonClick,
  onClose,
  backgroundImage,
  overlayOpacity = 0.5,
  align = "center",
  stats,
  waveColor = "#ffffff",
}) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={cn(
          "relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden shadow-lg mt-10 sm:mt-12 md:mt-16",
          alignmentClasses[align]
        )}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}

        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div
          className={cn(
            "relative z-10 flex flex-col gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 text-white max-w-[1400px] w-full",
            alignmentClasses[align]
          )}
        >
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-md p-2 hover:bg-white/10 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          )}

          {title && (
            <h1
              className={cn(
                "font-extrabold leading-tight drop-shadow-lg",
                align === "center" && "mx-auto",
                // ↓ Smaller on mobile, scales smoothly up to desktop
                "text-[clamp(1.5rem,4vw,4rem)] max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
              )}
            >
              {title}
            </h1>
          )}

          {paragraph && (
            <p
              className={cn(
                "text-white/90 font-medium drop-shadow-md max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]",
                // ↓ Slightly smaller base size for mobile
                "text-[clamp(0.9rem,1.8vw,1.25rem)] leading-relaxed"
              )}
            >
              {paragraph}
            </p>
          )}

          {message && (
            <p className="text-[clamp(0.8rem,1.3vw,1.05rem)] text-white/80 font-semibold max-w-[80%] sm:max-w-[60%]">
              {message}
            </p>
          )}

          {buttonText && (
            <div
              className={cn(
                "mt-4 sm:mt-6", // smaller top margin for mobile
                align === "center" && "mx-auto",
                align === "right" && "ml-auto"
              )}
            >
              <Button variant="gradient" size="lg" onClick={onButtonClick}>
                {buttonText}
              </Button>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-4 sm:gap-8 md:gap-10 mt-8 sm:mt-10",
                align === "right"
                  ? "justify-end text-right sm:items-end"
                  : align === "center"
                  ? "justify-center text-center sm:items-center"
                  : "justify-start text-left sm:items-start"
              )}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col min-w-[70px] sm:min-w-[100px] md:min-w-[130px]"
                >
                  <p className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-bold text-white drop-shadow-md">
                    {stat.value}
                  </p>
                  <p className="text-[clamp(0.7rem,1.1vw,0.9rem)] text-white/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[120px] md:h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={waveColor}
            d="M0,224 C480,300 960,150 1440,224 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};
