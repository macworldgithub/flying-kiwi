"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  icon = <Sparkles className="text-blue-500" size={20} />,
  align = "left",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={cn(
      "mb-4 flex flex-col gap-1",
      align === "center" && "text-center items-center",
      align === "right" && "text-right items-end"
    )}
  >
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </motion.div>
);
