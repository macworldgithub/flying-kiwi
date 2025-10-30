"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        outline:
          "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
        ghost: "text-gray-800 hover:bg-gray-100",
        gradient:
          "bg-gradient-to-r from-[#13AFF0] to-[#EB0FB6] text-white hover:opacity-90 focus-visible:ring-pink-400",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref" | "children">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  isLoading,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}) => (
  <motion.button
    whileTap={{ scale: 0.97 }}
    whileHover={{ scale: 1.02 }}
    disabled={isLoading || disabled}
    className={cn(
      buttonVariants({ variant, size }),
      "disabled:opacity-50 cursor-pointer",
      className
    )}
    {...props}
  >
    {isLoading ? (
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    ) : (
      leftIcon && <span className="mr-2">{leftIcon}</span>
    )}
    {children}
    {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
  </motion.button>
);
