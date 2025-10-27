"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  className,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={cn(
      "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all w-full sm:p-6",
      className
    )}
    {...props}
  >
    {header && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        {header}
      </motion.div>
    )}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-gray-700"
    >
      {children}
    </motion.div>

    {footer && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-4 border-t pt-3"
      >
        {footer}
      </motion.div>
    )}
  </motion.div>
);
