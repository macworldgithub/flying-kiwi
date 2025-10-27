"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, CheckCircle, AlertTriangle, AlertOctagon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface BannerProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  onClose?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  message,
  type = "info",
  onClose,
}) => {
  const variants = {
    info: {
      style: "bg-blue-50 border-blue-200 text-blue-800",
      icon: Info,
    },
    success: {
      style: "bg-green-50 border-green-200 text-green-800",
      icon: CheckCircle,
    },
    warning: {
      style: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: AlertTriangle,
    },
    error: {
      style: "bg-red-50 border-red-200 text-red-800",
      icon: AlertOctagon,
    },
  };

  const Icon = variants[type].icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={cn(
          "w-full border px-4 py-3 flex items-center justify-between rounded-md shadow-sm",
          variants[type].style
        )}
      >
        <div className="flex items-center gap-2">
          <Icon size={18} />
          <p className="text-sm sm:text-base font-medium">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 rounded-md p-1 hover:bg-black/5 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
